import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { SingInDto } from './dto/sign-in.dto';
import { SingUpDto } from './dto/sing-up.dto';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  singUp(@Body() singUpDto: SingUpDto) {
    return this.authService.SingUp(singUpDto);
  }

  @Post('sign-in')
  singIn(@Body() signInDto: SingInDto) {
    return this.authService.SignIn(signInDto);
  }

  @UseGuards(AuthGuard)
  @Get('current-user')
  currentUser(@CurrentUser() userId: string) {
    return this.authService.currentUser(userId);
  }
}
