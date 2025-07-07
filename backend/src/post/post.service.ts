import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
    constructor(
        private readonly postRepository: PostRepository,
    ) {}

    async createPost(dto: CreatePostDto) {
        return this.postRepository.save(dto);
    }

    async getAllPosts() {
        return this.postRepository.findAll();
    }
}
