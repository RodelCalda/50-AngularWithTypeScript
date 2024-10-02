import { Component } from '@angular/core';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css']
})
export class FlowerListComponent {
  flowerList: string[] = [
    'Roses',
    'Peonies',
    'Lilies',
    'Tulips',
    'Hydrangeas',
    'Daisies',
    'Carnations',
    'Sunflowers',
    'Orchids',
    'Calla Lilies',
    'Baby\'s Breath',
    'Chrysanthemums',
    'Freesias',
    'Gerbera Daisies',
    'Snapdragons'
  ];
  flowerName: string = '';


  addFlower() {
    if (this.flowerName) {
      this.flowerList.push(this.flowerName);
      this.flowerName = ''; 
    }
  }
}
