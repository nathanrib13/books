/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './repositories/users.repository';
import { UsersInMemoryRepository } from './repositories/in-memory/users.in-memory';

@Module({
  controllers: [UsersController],
  providers: [UsersService, {
    provide: UsersRepository,
    useClass: UsersInMemoryRepository // uma classe abstrata que controla o repositorio, o repositorio cria a rega de neogcio com o banco de dados usando um orm por exemplo, caso eu muda a regra no repositorio, ou mude o tipo de criaçao, orm ou qualquer coisa, basta alterar a classe aqui e toda aplicaçao continuará funcionando 
  }],
})
export class UsersModule {}
