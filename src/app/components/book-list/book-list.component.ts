import { Component } from '@angular/core';
import { BookListService } from '../services/services/book-list.service';
import { Book } from '../../../interface/book'; 

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  newBook: Book = { id: 0, title: '', author: '', genre: '', year: 0 };
  bookList: Book[] = [];

  constructor(private bookService: BookListService) {
    this.bookList = this.bookService.getBooks(); 
  }

  addBook() {
    if (this.newBook.title.trim() && this.newBook.author.trim() && this.newBook.genre.trim() && this.newBook.year > 0) {
      const newId = this.bookList.length ? this.bookList[this.bookList.length - 1].id + 1 : 1;
      const bookToAdd: Book = { ...this.newBook, id: newId };

      this.bookService.addBook(bookToAdd);
      this.newBook = { id: 0, title: '', author: '', genre: '', year: 0 }; 
      this.bookList = this.bookService.getBooks(); 
    }
  }

  removeBook(id: number) {
    this.bookService.removeBook(id);
    this.bookList = this.bookService.getBooks();
  }

  clearBooks() {
    this.bookService.clearBooks(); 
    this.bookList = this.bookService.getBooks(); 
  }
}


