import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  bookList: string[] = []; 
  bookTitle: string = ''; 

  
  addBook() {
    if (this.bookTitle) { 
      this.bookList.push(this.bookTitle);
      this.bookTitle = ''; 
    }
  }
}

