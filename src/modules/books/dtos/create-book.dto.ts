/* eslint-disable prettier/prettier */

import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateBookDTO {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsString()
    @IsNotEmpty()
    year: string;

    @IsNumber()
    @IsNotEmpty()
    pages: number;

    @IsString()
    @IsNotEmpty()
    genre: string;
    
    @IsBoolean()
    @IsNotEmpty()
    readed: boolean;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    cover_image: string | null;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    book_url: string | null;

    @IsString()
    @IsNotEmpty()
    user_id: string;
}