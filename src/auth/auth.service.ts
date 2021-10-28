import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HttpResponse } from 'src/protocols/http-response';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(loginDto: LoginDto): Promise<any> {
    const user = await this.usersService.findOneByEmail(loginDto.email);
    if (user && user.password === loginDto.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any): Promise<HttpResponse> {
    const payload = { email: user.email, sub: user.id };
    const access_token = this.jwtService.sign(payload);
    const body = Object.assign({}, user, {access_token});

    return new HttpResponse(201,body, '');
  }


  async rememberPassword(user: any) {
    const payload = { email: user.email };
    return {
      email: payload.email,
    };
  }

  async googleLogin (req) {
    if (!req.user) {
      return 'No user from google'
    }

    return {
      message: 'User information from google',
      user: req.user
    }
  }
}
