import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql'
import VideoSchema from './VideoSchema'
import { Video } from './Video'


@InputType('VideoInput')
class VideoInput {
  @Field()
  description: String
  @Field()
  title: String
  @Field()
  category: String
}

@Resolver()
export class VideoResolver {
  @Mutation(() => Video)
 async addVideo(@Arg('videoInput') videoInput: VideoInput) {
    return await VideoSchema.create(videoInput)
  }
  @Query(() => [Video])
  async videos() {
    return await VideoSchema.find()
  }
}
