import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { SingInDto } from './dto/sign-in.dto';
import { SingUpDto } from './dto/sing-up.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async SingUp(singUpDto: SingUpDto) {
    const existingUser = await this.usersService.findOneByEmail(singUpDto.Email);
    if (existingUser) {
      throw new BadRequestException('user already exists');
    }

    await this.usersService.create(singUpDto);
    return 'მომხმარებელი შექმნილია წარმატებით';
  }

  async SignIn(singInDto: SingInDto) {
    const existingUser = await this.usersService.findOneByEmail(singInDto.Email);
    if (!existingUser) {
      throw new BadRequestException('create user /auth/sign-up');
    }

    const isEqualPass = await bcrypt.compare(
      singInDto.Password,
      existingUser.Password,
    );
    if (!isEqualPass) {
      throw new BadRequestException('invalid credentials');
    }

    const payload = {
      userId: existingUser._id.toString(),
    };

    return this.jwtService.sign(payload, { expiresIn: '1h' });
  }

  async currentUser(userId: string) {
    return this.usersService.findOne(userId);
  }
}
