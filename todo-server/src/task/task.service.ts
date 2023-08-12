import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task)
    private taskRepository: typeof Task,
  ) {}

  async createTask(createTaskDto: CreateTaskDto) {
    try {
      const task = await this.taskRepository.create({
        ...createTaskDto,
      });

      return {
        success: true,
        message: 'Successfully created',
        data: task,
      };
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
      };
    }
  }

  async getAllTasks(fk_userId: string, fk_boardId?: string) {
    try {
      const where = {
        fk_userId,
      };

      if (fk_boardId) where['fk_boardId'] = fk_boardId;

      const tasks = await this.taskRepository.findAndCountAll({
        where,
        order: [['createdAt', 'DESC']],
      });

      console.log(JSON.stringify(tasks));

      return {
        success: true,
        message: 'Successfully fetched.',
        data: tasks,
      };
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
      };
    }
  }

  async getTaskById(id: string) {
    try {
      const task = await this.taskRepository.findByPk(id);

      if (!task)
        return {
          success: false,
          message: 'No task found.',
          data: null,
        };

      return {
        success: true,
        message: 'Successfully fetched.',
        data: task,
      };
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
      };
    }
  }

  async updateTask(id: string, updateTaskDto: UpdateTaskDto) {
    try {
      const [isUpdated, updatedTasks] = await this.taskRepository.update(
        updateTaskDto,
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
          message: 'Unable to update the task.',
        };

      return {
        success: true,
        message: 'Successfully updated',
        data: updatedTasks[0],
      };
    } catch (error) {
      return {
        success: false,
        error: true,
        message: error.message,
      };
    }
  }

  async deleteTask(id: string) {
    try {
      const isDeleted = await this.taskRepository.destroy({
        where: {
          id,
        },
      });

      if (!isDeleted)
        return {
          success: false,
          message: 'Unable to delete the task.',
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
