import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardController } from './board/board.controller';
import { TaskController } from './task/task.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Board } from './board/board.model';
import { Task } from './task/task.model';
import { BoardModule } from './board/board.module';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';
import { BoardService } from './board/board.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Dialect } from 'sequelize';
import { UserModule } from './user/user.module';
import { User } from './user/user.model';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: configService.get<Dialect>('DB_DIALECT', 'postgres'),
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        models: [User, Board, Task],
        autoLoadModels: true,
        synchronize: true,
        // sync: { force: true },
        logging: console.log,
      }),
    }),
    BoardModule,
    TaskModule,
    UserModule,
    AuthModule,
    JwtModule,
  ],
  controllers: [AppController, BoardController, TaskController],
  providers: [AppService, BoardService, TaskService],
})
export class AppModule {}
