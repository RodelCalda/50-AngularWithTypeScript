import { Component } from '@angular/core';
import { FlowerListService } from '../services/flower-list.service';
import { Flower } from '../../../interface/flower';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css'],
})
export class FlowerListComponent {
  newFlower: Flower = { id: 0, name: '', color: '', price: 0, availability: true };
  flowerList: Flower[] = [];

  constructor(private flowerService: FlowerListService) {
    this.flowerList = this.flowerService.getFlowers(); 
  }

  addFlower() {
    if (this.newFlower.name.trim() && this.newFlower.color.trim() && this.newFlower.price > 0) {
      const newId = this.flowerList.length ? this.flowerList[this.flowerList.length - 1].id + 1 : 1;
      const flowerToAdd: Flower = { ...this.newFlower, id: newId };

      this.flowerService.addFlower(flowerToAdd);
      this.newFlower = { id: 0, name: '', color: '', price: 0, availability: true }; 
      this.flowerList = this.flowerService.getFlowers(); 
    }
  }

  removeFlower(id: number) {
    this.flowerService.removeFlower(id);
    this.flowerList = this.flowerService.getFlowers(); 
  }

  clearFlowers() {
    this.flowerService.clearFlowers(); 
    this.flowerList = this.flowerService.getFlowers(); 
  }
}
