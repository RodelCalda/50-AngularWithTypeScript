import { Component } from '@angular/core';
import { SoftwareListService } from '../services/software-list.service';
import { Software } from '../../../interface/software'; 

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css'],
})
export class SoftwareListComponent {
  newSoftware: Software = { id: 0, name: '', version: '', licenseType: '', releaseDate: new Date() };
  softwareList: Software[] = [];

  constructor(private softwareService: SoftwareListService) {
    this.softwareList = this.softwareService.getSoftwareList();
  }

  addSoftware() {
    if (this.newSoftware.name.trim() && this.newSoftware.version.trim() && this.newSoftware.licenseType.trim()) {
      const newId = this.softwareList.length ? this.softwareList[this.softwareList.length - 1].id + 1 : 1;
      const softwareToAdd: Software = { ...this.newSoftware, id: newId };

      this.softwareService.addSoftware(softwareToAdd);
      this.newSoftware = { id: 0, name: '', version: '', licenseType: '', releaseDate: new Date() }; 
      this.softwareList = this.softwareService.getSoftwareList(); 
    }
  }

  removeSoftware(id: number) {
    this.softwareService.removeSoftware(id);
    this.softwareList = this.softwareService.getSoftwareList();
  }

  clearSoftwareList() {
    this.softwareService.clearSoftwareList(); 
    this.softwareList = this.softwareService.getSoftwareList(); 
  }
}