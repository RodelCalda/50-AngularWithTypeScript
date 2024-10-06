import { Injectable } from '@angular/core';
import { Tool } from '../../../interface/tool'; 

@Injectable({
  providedIn: 'root',
})
export class ToolListService {
  private tools: Tool[] = [
    { id: 1, name: 'Hammer', type: 'hand tool', brand: 'Stanley', price: 15.99 },
    { id: 2, name: 'Drill', type: 'power tool', brand: 'DeWalt', price: 99.99 },
    { id: 3, name: 'Screwdriver', type: 'hand tool', brand: 'Craftsman', price: 9.99 },
    { id: 4, name: 'Wrench', type: 'hand tool', brand: 'Makita', price: 14.99 },
    { id: 5, name: 'Circular Saw', type: 'power tool', brand: 'Bosch', price: 129.99 },
    { id: 6, name: 'Pliers', type: 'hand tool', brand: 'Irwin', price: 12.99 },
    { id: 7, name: 'Jigsaw', type: 'power tool', brand: 'Ryobi', price: 89.99 },
    { id: 8, name: 'Level', type: 'hand tool', brand: 'Empire', price: 19.99 },
    { id: 9, name: 'Tape Measure', type: 'hand tool', brand: 'Milwaukee', price: 7.99 },
    { id: 10, name: 'Angle Grinder', type: 'power tool', brand: 'Hitachi', price: 149.99 },
  ];

  getTools(): Tool[] {
    return this.tools;
  }

  addTool(tool: Tool): void {
    this.tools.push(tool);
  }

  removeTool(id: number): void {
    this.tools = this.tools.filter(tool => tool.id !== id);
  }

  clearTools(): void {
    this.tools = [];
  }
}
