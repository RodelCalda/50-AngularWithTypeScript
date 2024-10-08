import { Component } from '@angular/core';
import { MobileAppListService } from '../services/mobile-app-list.service';
import { MobileApp } from '../../../interface/mobile-app';

@Component({
  selector: 'app-mobile-app-list',
  templateUrl: './mobile-app-list.component.html',
  styleUrls: ['./mobile-app-list.component.css'],
})
export class MobileAppListComponent {
  newMobileApp: MobileApp = { id: 0, name: '', category: '', developer: '', rating: 0, price: 0 };
  mobileAppList: MobileApp[] = [];

  constructor(private mobileAppService: MobileAppListService) {
    this.mobileAppList = this.mobileAppService.getMobileApps(); 
  }

  addMobileApp() {
    if (
      this.newMobileApp.name.trim() &&
      this.newMobileApp.category.trim() &&
      this.newMobileApp.developer.trim() &&
      this.newMobileApp.rating >= 0 &&
      this.newMobileApp.price >= 0
    ) {
      const newId = this.mobileAppList.length ? this.mobileAppList[this.mobileAppList.length - 1].id + 1 : 1;
      const appToAdd: MobileApp = { ...this.newMobileApp, id: newId };

      this.mobileAppService.addMobileApp(appToAdd);
      this.newMobileApp = { id: 0, name: '', category: '', developer: '', rating: 0, price: 0 }; 
      this.mobileAppList = this.mobileAppService.getMobileApps(); 
    }
  }

  removeMobileApp(id: number) {
    this.mobileAppService.removeMobileApp(id);
    this.mobileAppList = this.mobileAppService.getMobileApps(); 
  }

  clearMobileApps() {
    this.mobileAppService.clearMobileApps(); 
    this.mobileAppList = this.mobileAppService.getMobileApps(); 
  }
}
