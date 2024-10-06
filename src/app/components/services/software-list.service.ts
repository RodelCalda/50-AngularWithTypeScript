import { Injectable } from '@angular/core';
import { Software } from '../../../interface/software'; 

@Injectable({
  providedIn: 'root'
})
export class SoftwareListService {
  private softwareList: Software[] = [
    { id: 1, name: 'Visual Studio Code', version: '1.60.0', licenseType: 'Free', releaseDate: new Date('2021-09-01') },
    { id: 2, name: 'Adobe Photoshop', version: '2022', licenseType: 'Paid', releaseDate: new Date('2021-10-05') },
  ];

  getSoftwareList(): Software[] {
    return this.softwareList;
  }

  addSoftware(software: Software): void {
    this.softwareList.push(software);
  }

  removeSoftware(id: number): void {
    this.softwareList = this.softwareList.filter(software => software.id !== id);
  }

  clearSoftwareList(): void {
    this.softwareList = [];
  }
}