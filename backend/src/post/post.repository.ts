import { Injectable } from '@nestjs/common'
import { Post } from './post.entity'
import { CreatePostDto } from './dto/create-post.dto'

@Injectable()
export class PostRepository {
  cache: Post[] = []

  async save(dto: CreatePostDto): Promise<Post> {
    // 여기서 DB 나 뭐 다른데저장하는 로ㅓ
    const newPost = Post.mapFromDto(dto, this.cache.length)

    this.cache.push(newPost)

    return Promise.resolve(newPost)
  }

  async findAll(): Promise<Post[]> {
    return Promise.resolve(this.cache)
  }
}
