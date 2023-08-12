import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserService } from './user.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  exports: [SequelizeModule],
  providers: [UserService],
})
export class UserModule {}
