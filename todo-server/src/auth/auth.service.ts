import {
  Inject,
  Injectable,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { SignUpDto } from './dto/sign-up.dto';
import { generateHashFromPassword } from 'src/utils';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService)
    private userService: UserService,
    private configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.userService.getUser(email);

    const hash = generateHashFromPassword(
      password,
      this.configService.get('HASH_SALT'),
    );

    if (user?.hash !== hash) {
      throw new UnauthorizedException();
    }

    const payload = {
      id: user.id,
      email: user.email,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(signUpDto: SignUpDto) {
    const { password, ...userData } = signUpDto;
    try {
      const hash = generateHashFromPassword(
        password,
        this.configService.get('HASH_SALT'),
      );

      const user = await this.userService.createUser({
        ...userData,
        hash,
      });

      const payload = {
        id: user.id,
        email: user.email,
      };

      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      console.error(error);
      throw new ServiceUnavailableException();
    }
  }
}
