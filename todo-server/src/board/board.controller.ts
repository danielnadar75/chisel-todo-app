import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { AuthUserDto } from 'src/auth/dto/auth-user.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthUser } from 'src/auth/decorator/auth-user.decorator';

@UseGuards(AuthGuard)
@Controller('board')
export class BoardController {
  constructor(
    @Inject(BoardService)
    private boardService: BoardService,
  ) {}

  @Post()
  createBoard(
    @Body() createBoardDto: CreateBoardDto,
    @AuthUser('id') fk_userId: string,
  ) {
    return this.boardService.createBoard({ ...createBoardDto, fk_userId });
  }

  @Get('all')
  getAllBoards(@AuthUser() authUser: AuthUserDto) {
    return this.boardService.getAllBoards(authUser.id);
  }

  @Get(':id')
  getBoardById(@Param('id') id: string) {
    return this.boardService.getBoardById(id);
  }

  @Put(':id')
  updateBoardById(
    @Param('id') id: string,
    @Body() updateBoardDto: UpdateBoardDto,
  ) {
    return this.boardService.updateBoard(id, updateBoardDto);
  }

  @Delete(':id')
  deleteBoard(@Param('id') id: string) {
    return this.boardService.deleteBoard(id);
  }
}
