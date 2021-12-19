import 'reflect-metadata'
import './connection'

import { ApolloServer } from 'apollo-server'
import { VideoResolver } from './video/VideoResolver'
import { buildSchema } from 'type-graphql'

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [VideoResolver],
  })

  const server = new ApolloServer({ schema })

  server.listen({ port: 4100 }, console.log('Server is running'))
}

bootstrap()
