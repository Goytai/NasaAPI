import { Field, ID, ObjectType } from 'type-graphql';
import { ObjectID } from 'typeorm';

@ObjectType()
export class InstallStationResponse {
  @Field(() => ID)
  id: ObjectID;

  @Field()
  planetName: string;

  @Field()
  createdAt: Date;
}
