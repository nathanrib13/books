/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {
    
    @Post
    create(@Body()){
      return booksService.create
    } //esse metodo vai chamar o service por isso precisa colocar o constructor com o service a cima 
  }
}
