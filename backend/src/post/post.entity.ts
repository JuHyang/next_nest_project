import { CreatePostDto } from "./dto/create-post.dto"

// src/post/post.entity.ts
export class Post {
  id!: number

  title!: string

  content!: string

  createdAt!: Date

  static mapFromDto(dto: CreatePostDto, id: number): Post {
    const post = new Post();
    post.id = id;
    post.title = dto.title;
    post.content = dto.content;
    post.createdAt = new Date(); // 현재 시간으로 설정
    return post;
  }
}
