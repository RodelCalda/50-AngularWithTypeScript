import { Injectable } from '@angular/core';
import { Library } from '../../../interface/library'; 

@Injectable({
  providedIn: 'root',
})
export class LibraryListService {
  private libraries: Library[] = [
    { id: 1, title: '1984', author: 'George Orwell', genre: 'Dystopian', yearPublished: 1949 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', yearPublished: 1960 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', yearPublished: 1925 },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', yearPublished: 1851 },
  ];

  getBooks(): Library[] {
    return this.libraries;
  }

  addBook(book: Library): void {
    this.libraries.push(book);
  }

  removeBook(id: number): void {
    this.libraries = this.libraries.filter(book => book.id !== id);
  }

  clearLibrary(): void {
    this.libraries = [];
  }
}
