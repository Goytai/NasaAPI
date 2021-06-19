import { Field, Float, ObjectType } from 'type-graphql';

@ObjectType()
export class SuitablePlanetsResponse {
  @Field()
  name: string;

  @Field(() => Float, { nullable: true })
  mass?: number;

  @Field()
  hasStation: boolean;
}
