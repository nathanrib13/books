/* eslint-disable prettier/prettier */

import { randomUUID } from "crypto";

export class Book{
    readonly id: string;
    title: string
    author: string 
    year: string
    pages: number
    genre: string
    readed: boolean
    cover_image: string | null
    book_url: string | null
    user_id: string

    constructor(){
        this.id = randomUUID()
    }


}