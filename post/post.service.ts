import { DatabaseHandler } from '../Services/database.service'
import { type Prisma } from '@prisma/client'

export class PostService extends DatabaseHandler {
  constructor (
    public createPost = async (body: Prisma.PostsCreateInput, id: string, dataArray: Array<{ url: string }>) => {
      let { title, text, heading, classification, importance } = body
      if (importance !== undefined && typeof importance === 'string') importance = parseInt(importance)
      return await this.prisma.posts.gCreate({ author: { connect: { id } }, classification, heading, title, text, importance, images: { create: dataArray } })
    }
  ) {
    super()
  }
}
