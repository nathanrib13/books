/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateBookDTO } from './dtos/create-book.dto';

@Injectable()
export class BooksService {
    //essa classe será responsavel por gerar todas os metodos de booksx 
    create(data: CreateBookDTO){
        return {data}   
    }
}
