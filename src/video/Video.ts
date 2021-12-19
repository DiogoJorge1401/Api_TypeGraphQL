import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Video {
  @Field()
  description: String
  @Field()
  title: String
  @Field()
  category: String
}