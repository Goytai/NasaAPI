import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn
} from 'typeorm';

@Entity('stations')
export class Stations {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  planetName: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
