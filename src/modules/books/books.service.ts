/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
    //essa classe será responsavel por gerar todas os metodos de booksx 
    create(name: string, gender: string){

        return {name, gender}

    }
}
