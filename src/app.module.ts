/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { UsersModule } from './modules/users/users.module';
import { BooksModule } from './modules/books/books.module';

@Module({
  imports: [UsersModule, BooksModule],
  //controllers: [AppController], //responsavel pela chamada http e retonar algo - funciona como a rota
  //providers: [AppService], // responsavel por providenciar as regras do negocio - como um serviço memsmo 
  //repostiroies ---> responsavel por realizar a conexao com o bacno de dados 
})
export class AppModule {}
