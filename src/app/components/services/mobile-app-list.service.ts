import { Injectable } from '@angular/core';
import { MobileApp } from '../../../interface/mobile-app'; 

@Injectable({
  providedIn: 'root'
})
export class MobileAppListService {
  private mobileApps: MobileApp[] = [
    { id: 1, name: 'WhatsApp', category: 'Social Media', developer: 'Meta', rating: 4.5, price: 0 },
    { id: 2, name: 'Instagram', category: 'Social Media', developer: 'Meta', rating: 4.2, price: 0 },
    { id: 3, name: 'Spotify', category: 'Music', developer: 'Spotify Technology S.A.', rating: 4.8, price: 0 },
    { id: 4, name: 'Microsoft Word', category: 'Productivity', developer: 'Microsoft', rating: 4.6, price: 69.99 },
  ];

  getMobileApps(): MobileApp[] {
    return this.mobileApps;
  }

  addMobileApp(app: MobileApp): void {
    this.mobileApps.push(app);
  }

  removeMobileApp(id: number): void {
    this.mobileApps = this.mobileApps.filter(app => app.id !== id);
  }

  clearMobileApps(): void {
    this.mobileApps = [];
  }
}
