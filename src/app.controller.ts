import { Body, Get } from '@nestjs/common';
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { GoogleAuthGuard } from './auth/google-auth.guard';
import { Req } from '@nestjs/common';
import { LoginDto } from './auth/dto/login.dto';
import { RememberPasswordDto } from './auth/dto/remember-password.dto';

@Controller()
export class AppController {
  constructor (private authService: AuthService){}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  //@UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('auth/rememberPassword')
  async rememberPassword(@Body() rememberPasswordDto: RememberPasswordDto) {
    return this.authService.rememberPassword(rememberPasswordDto);
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Req() req) {}

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect(@Req() req) {
    return this.authService.googleLogin(req)
  }

}
