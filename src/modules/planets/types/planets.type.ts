import { Field, Float, ObjectType } from 'type-graphql';

@ObjectType()
class PlanetsResponse {
  @Field()
  name: string;

  @Field(() => Float, { nullable: true })
  mass?: number;

  @Field()
  hasStation: boolean;
}

export default PlanetsResponse;
