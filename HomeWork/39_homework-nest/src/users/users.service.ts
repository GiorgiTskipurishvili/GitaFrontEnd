import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { isValidObjectId, Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // async create(createUserDto: CreateUserDto) {
  //   const existingUser = await this.userModel.findOne({
  //     Email: createUserDto.Email,
  //   });
  //   if (existingUser) {
  //     throw new BadRequestException('user already exists');
  //   }

  //   const hashedPassword = await bcrypt.hash(createUserDto.Password, 10);
  //   const createUser = await this.userModel.create({
  //     ...createUserDto,
  //     Password: hashedPassword,
  //   });

  //   return createUser;
  // }

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userModel.findOne({
      Email: createUserDto.Email,
    });
    if (existingUser) {
      throw new BadRequestException('user already exists');
    }

    const createUser = await this.userModel.create(createUserDto);

    return createUser;
  }

  async findAll() {
    return this.userModel.find().select('-Password');
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('invalid user id');
    }

    const findUser = await this.userModel.findById(id).select('-Password');
    if (!findUser) {
      throw new NotFoundException('user not found');
    }

    return findUser;
  }

  async findOneByEmail(email: string) {
    return this.userModel.findOne({ Email: email });
  }

  
  async update(id: string, updateUserDto: UpdateUserDto) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('invalid user id');
    }

    const updateUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .select('-Password');
    if (!updateUser) {
      throw new NotFoundException('user not found');
    }

    return updateUser;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('invalid user id');
    }

    const deleteUser = await this.userModel.findByIdAndDelete(id);
    if (!deleteUser) {
      throw new NotFoundException('user not found');
    }

    return deleteUser;
  }
}
