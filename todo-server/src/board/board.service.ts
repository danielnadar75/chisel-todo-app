import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectModel(Board)
    private boardRepository: typeof Board,
  ) {}

  async createBoard(createBoardDto: CreateBoardDto) {
    try {
      const boards = await this.boardRepository.create({
        ...createBoardDto,
      });

      return {
        success: true,
        message: 'Successfully created',
        data: boards,
      };
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
      };
    }
  }

  async getAllBoards(fk_userId: string) {
    try {
      const boards = await this.boardRepository.findAndCountAll({
        where: {
          fk_userId,
        },
      });

      return {
        success: true,
        message: 'Successfully fetched.',
        data: boards,
      };
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
      };
    }
  }

  async getBoardById(id: string) {
    try {
      const board = await this.boardRepository.findByPk(id);

      if (!board)
        return {
          success: false,
          message: 'No board found.',
          data: null,
        };

      return {
        success: true,
        message: 'Successfully fetched.',
        data: board,
      };
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
      };
    }
  }

  async updateBoard(id: string, updateBoardDto: UpdateBoardDto) {
    try {
      const [isUpdated, updatedBoards] = await this.boardRepository.update(
        updateBoardDto,
        {
          where: {
            id,
          },
          returning: true,
        },
      );

      if (!isUpdated)
        return {
          success: false,
          message: 'Unable to update the board.',
        };

      return {
        success: true,
        message: 'Successfully updated',
        data: updatedBoards[0],
      };
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
      };
    }
  }

  async deleteBoard(id: string) {
    try {
      const isDeleted = await this.boardRepository.destroy({
        where: {
          id,
        },
      });

      if (!isDeleted)
        return {
          success: false,
          message: 'Unable to delete the board.',
        };

      return {
        success: true,
        message: 'Successfully deleted.',
      };
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
      };
    }
  }
}
