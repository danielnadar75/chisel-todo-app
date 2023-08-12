import { Module } from '@nestjs/common';
import { Board } from './board.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { BoardService } from './board.service';

@Module({
  imports: [SequelizeModule.forFeature([Board])],
  providers: [BoardService],
  exports: [SequelizeModule],
})
export class BoardModule {}
