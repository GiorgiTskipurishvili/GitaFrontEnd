import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignUpDto } from './dto/sign-up.dto';
import * as bcrypt from "bcrypt"
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
      constructor(private usersService:UsersService, private jwtService:JwtService){}

  async SignUp(signUpDto:SignUpDto){
    const existinUser = await this.usersService.findOneByEmail(signUpDto.Email)
    if(existinUser) throw new BadRequestException("user alreade existis")
    const hashedPass = await bcrypt.hash(signUpDto.Password, 10)
    await this.usersService.create({...signUpDto, Password: hashedPass})
    return "მომხმარებელი შეიქმნა წარმატებით";
  }

  async SignIn(signInDto:SignInDto){
    const existingUser = await this.usersService.findOneByEmail(signInDto.Email)
    if(!existingUser) throw new BadRequestException("create user /auth/sign-up")

    const isEqualPass = await bcrypt.compare(signInDto.Password, existingUser.Password)

    if(!isEqualPass) throw new BadRequestException("invalid Creditinals")
      const payLoad={
    userId:existingUser._id
    }
    
    const accessToken = await this.jwtService.sign(payLoad,{expiresIn:"1h"})
  
    return accessToken
  }

  async currentUser(userId:string){
    const user = await this.usersService.findOne(userId)
    return user
  }

}
