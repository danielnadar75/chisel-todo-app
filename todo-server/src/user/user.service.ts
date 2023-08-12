import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UniqueConstraintError } from 'sequelize';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
  ) {}

  async getUserById(id: string) {
    try {
      const user = await this.userRepository.findByPk(id);
      return user;
    } catch (error) {
      throw new NotFoundException('Unable to fetch the user!');
    }
  }

  async getUser(email: string) {
    try {
      const user = await this.userRepository.findOne({
        where: {
          email,
        },
      });
      return user;
    } catch (error) {
      throw new NotFoundException('Unable to fetch the user!');
    }
  }

  async createUser(data: CreateUserDto) {
    try {
      const user = await this.userRepository.create({ ...data });
      return user;
    } catch (error) {
      if (error instanceof UniqueConstraintError)
        throw new BadRequestException('Email alread in use!');

      throw new BadRequestException();
    }
  }
}
