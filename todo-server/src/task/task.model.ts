import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Board } from 'src/board/board.model';
import { User } from 'src/user/user.model';

@Table({
  timestamps: true,
})
export class Task extends Model {
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  @AllowNull(false)
  @Column
  title: string;

  @Column
  description: string;

  @Default(false)
  @Column
  completed: boolean;

  /** Foreign References */
  @ForeignKey(() => Board)
  @Column
  fk_boardId: string;

  @ForeignKey(() => User)
  @Column
  fk_userId: string;

  @BelongsTo(() => Board)
  board: Board;

  @BelongsTo(() => User)
  owner: User;
}
