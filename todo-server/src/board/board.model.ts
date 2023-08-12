import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Task } from 'src/task/task.model';
import { User } from 'src/user/user.model';

@Table({
  timestamps: true,
})
export class Board extends Model {
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  @AllowNull(false)
  @Column
  name: string;

  @Default(false)
  @Column
  active: boolean;

  /** Foreign References */
  @ForeignKey(() => User)
  @Column
  fk_userId: string;

  @BelongsTo(() => User)
  owner: User;

  @HasMany(() => Task)
  tasks: Task[];
}
