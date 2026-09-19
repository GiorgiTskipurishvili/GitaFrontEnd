import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { AuthGuard } from './guards/auth.guard';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { User } from '../users/schema/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({summary:"რეგისტრაცია"})
  @ApiCreatedResponse({description:"მომხმარებელი შეიქმნა",schema:{type:"string",example:"მომხმარებელი შექიმან წარამტებით"}})
  @ApiBadRequestResponse({description:"user already exsists ან ვალიდაციის შეცდომა"})
  @Post("/sign-up")
  signUp(@Body() signUpDto:SignUpDto){
    return this.authService.SignUp(signUpDto)
  }

  @ApiOperation({summary:"შესვლა, აბრუნებს JWT access token-ს (1 საათი)"})
  @ApiCreatedResponse({description:"JWT access token",schema:{type:"string",example:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}})
  @ApiBadRequestResponse({description:"მომხმარებელი არ მოიძებნა ან invalid Credentials"})
  @Post("/sign-in")
  signIn(@Body() signInDto:SignInDto){
    return this.authService.SignIn(signInDto)
  }
  
  @ApiOperation({summary:"ამჟამინდელი მომხმარებელი (ტოკენის მიხედვით)"})
  @ApiBearerAuth()
  @ApiOkResponse({type:User})
  @ApiUnauthorizedResponse({description:"ტოკენი არ არის ან არასწორია"})
  @UseGuards(AuthGuard)
  @Get("/current-user")
  currentUser(@Req() request: any) {
    const userId = request.userId;   
    console.log(userId);
    return this.authService.currentUser(userId);
  }
}
