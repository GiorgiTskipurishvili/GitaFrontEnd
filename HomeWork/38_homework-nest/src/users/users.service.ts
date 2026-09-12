import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { isValidObjectId, Model } from 'mongoose';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel:Model<User>){}
  
  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userModel.findOne({Email:createUserDto.Email})
    if(existingUser) throw new BadRequestException()
    
    const hashedPassword = await bcrypt.hash(createUserDto.Email, 10)
    const createUser = await this.userModel.create({...createUserDto,Password: hashedPassword})

    return createUser
  }

  async findAll() {
    return this.userModel.find().select("-Password");
  }

  async findOne(id: string) {
    if(!isValidObjectId(id)) throw new BadRequestException()
    const findUser = await this.userModel.findById(id).select("-Password")
    if(!findUser) throw new NotFoundException()
    return findUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if(!isValidObjectId(id)) throw new BadRequestException()
    const updateUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, {new:true})
    if(!updateUser) throw new NotFoundException()
    return updateUser;
  }

  async remove(id: string) {
    if(!isValidObjectId(id)) throw new BadRequestException()
    const deleteUser = await this.userModel.findByIdAndDelete(id)
    if(!deleteUser) throw new NotFoundException()
    return deleteUser;
  }
}
