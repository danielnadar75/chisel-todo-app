import {
  Column,
  DataType,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Board } from 'src/board/board.model';
import { Task } from 'src/task/task.model';

@Table
export class User extends Model {
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Unique
  @Column
  email: string;

  @Column
  hash: string;

  /** Foreign References */
  @HasMany(() => Board)
  boards: Board[];

  @HasMany(() => Task)
  tasks: Task[];
}
