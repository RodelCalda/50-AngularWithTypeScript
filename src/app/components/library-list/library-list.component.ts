import { Component } from '@angular/core';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent {
  librariesList: string[] = [];
  
  libraryName: string = '';

 
  addLibrary() {
    if (this.libraryName) { 
      this.librariesList.push(this.libraryName);
      this.libraryName = ''; 
    }
  }
}
