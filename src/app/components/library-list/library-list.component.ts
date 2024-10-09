import { Component } from '@angular/core';
import { LibraryListService } from '../services/library-list.service';
import { Library } from '../../../interface/library'; 

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css'],
})
export class LibraryListComponent {
  newBook: Library = { id: 0, title: '', author: '', genre: '', yearPublished: 0 };
  libraryList: Library[] = [];

  constructor(private libraryService: LibraryListService) {
    this.libraryList = this.libraryService.getBooks(); 
  }

  addBook() {
    if (
      this.newBook.title.trim() &&
      this.newBook.author.trim() &&
      this.newBook.genre.trim() &&
      this.newBook.yearPublished > 0
    ) {
      const newId = this.libraryList.length ? this.libraryList[this.libraryList.length - 1].id + 1 : 1;
      const bookToAdd: Library = { ...this.newBook, id: newId };

      this.libraryService.addBook(bookToAdd);
      this.newBook = { id: 0, title: '', author: '', genre: '', yearPublished: 0 }; 
      this.libraryList = this.libraryService.getBooks(); 
    }
  }

  removeBook(id: number) {
    this.libraryService.removeBook(id);
    this.libraryList = this.libraryService.getBooks(); 
  }

  clearLibrary() {
    this.libraryService.clearLibrary(); 
    this.libraryList = this.libraryService.getBooks();
  }
}
