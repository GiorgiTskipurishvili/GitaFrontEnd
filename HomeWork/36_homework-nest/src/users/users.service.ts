import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';
import { isValidObjectId, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel:Model<User>){}
  
  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userModel.findOne({Email:createUserDto.Email});
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
     const newUser = await this.userModel.create(createUserDto)
    return newUser;
  }

  async findAll() {
    return this.userModel.find();
  }

  async findOne(id: string) {
    if(!isValidObjectId(id)) throw new BadRequestException()
    const findNewUser = await this.userModel.findById(id)
    if(!findNewUser) throw new NotFoundException()
    return findNewUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if(!isValidObjectId(id)) throw new BadRequestException()
    const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true })
    if(!updatedUser) throw new NotFoundException()
    return updatedUser;
  }

  async remove(id: string) {
    if(!isValidObjectId(id)) throw new BadRequestException()
    const removedUser = await this.userModel.findByIdAndDelete(id)
    if(!removedUser) throw new NotFoundException()
    return removedUser;
  }
}
