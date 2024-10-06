import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  private books: string[] = ['The Great Gatsby', '1984', 'To Kill a Mockingbird'];

  constructor() { }

  
  getBooks(): string[] {
    return this.books;
  }

  
  addBook(book: string): void {
    this.books.push(book);
  }

  
  removeBook(book: string): void {
    this.books = this.books.filter(b => b !== book);
  }
}
