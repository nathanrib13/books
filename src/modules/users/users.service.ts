/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository ){}
  //indica que sempre que eu criar um usuario eu preciso passar um repositorio
  //serve quase como um paraemtro de uma funcao 
  async create(createUserDto: CreateUserDto) {
    const user = await this.usersRepository.create(createUserDto)
    return user
  }

 async findAll() {
    const users = await this.usersRepository.findAll()
    return users
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOne(id)
    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.update(id, updateUserDto)
    return user 
  }

  async remove(id: string) {
    await this.usersRepository.delete(id)
    return 
  }
}
