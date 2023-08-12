import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthUser } from 'src/auth/decorator/auth-user.decorator';
import { AuthUserDto } from 'src/auth/dto/auth-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('task')
export class TaskController {
  constructor(
    @Inject(TaskService)
    private taskService: TaskService,
  ) {}

  @Post()
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    @AuthUser() authUser: AuthUserDto,
  ) {
    return this.taskService.createTask({
      ...createTaskDto,
      fk_userId: authUser.id,
    });
  }

  @Get('all')
  getAllTasks(
    @Query('boardId') fk_boardId: string,
    @AuthUser('id') fk_userId: string,
  ) {
    return this.taskService.getAllTasks(fk_userId, fk_boardId);
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }
}
