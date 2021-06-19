import { Field, InputType } from 'type-graphql';

@InputType()
export class InstallStationInput {
  @Field()
  name: string;
}
