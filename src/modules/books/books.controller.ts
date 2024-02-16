/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dtos/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
    @Post('')
    create(@Body() createBookDTO: CreateBookDTO){
      return this.booksService.create(createBookDTO)
    } //esse metodo vai chamar o service por isso precisa colocar o constructor com o service a cima 
  }

