// src/app/services/book-list.service.ts
import { Injectable } from '@angular/core';
import { Book } from '../../../../interface/book'; 

@Injectable({
  providedIn: 'root',
})
export class BookListService {
  private books: Book[] = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', genre: 'Dystopian', year: 1949 },
  ];

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  removeBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }

  clearBooks(): void {
    this.books = [];
  }
}

