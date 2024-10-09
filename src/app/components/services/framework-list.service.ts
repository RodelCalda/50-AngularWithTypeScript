import { Injectable } from '@angular/core';
import { Framework } from '../../../interface/framework'; 

@Injectable({
  providedIn: 'root'
})
export class FrameworkListService {
  private frameworks: Framework[] = [
    { id: 1, name: 'Angular', language: 'TypeScript', description: 'A platform for building mobile and desktop web applications.' },
    { id: 2, name: 'React', language: 'JavaScript', description: 'A JavaScript library for building user interfaces.' }
  ];

  
  getFrameworks(): Framework[] {
    return this.frameworks;
  }

  
  addFramework(framework: Framework): void {
    this.frameworks.push(framework);
  }

  
  removeFramework(id: number): void {
    this.frameworks = this.frameworks.filter(framework => framework.id !== id);
  }

  
  clearFrameworks(): void {
    this.frameworks = [];
  }
}
