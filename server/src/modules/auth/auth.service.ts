import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignupInput } from './dto/signup-input';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { SignInInput } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(input: SignupInput) {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: input.email }, { login: input.login }],
      },
    });

    if (existingUser) {
      throw new UnauthorizedException(
        'User with this email or login already exists',
      );
    }

    const hashedPassword = await bcrypt.hash(input.password, 12);

    const user = await this.prisma.user.create({
      data: {
        email: input.email,
        login: input.login,
        password: hashedPassword,
      },
    });

    const accessToken = this.jwtService.sign({ userId: user.id });

    return { user, accessToken };
  }

  async signin(input: SignInInput) {
    const user = await this.prisma.user.findFirst({
      where: {
        login: input.login,
      },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordValid = await bcrypt.compare(input.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const accessToken = this.jwtService.sign({ userId: user.id });

    return { user, accessToken };
  }
}
