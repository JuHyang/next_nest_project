import { 
    Controller,
    Post,
    Body,
    Get,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    async create(@Body() createPostDto: CreatePostDto) {
        const result = await this.postService.createPost(createPostDto);
        return {
            message: 'Post created successfully',
            post: result,
        };
    }

    @Get()
    async findAll() {
        const posts = await this.postService.getAllPosts();
        return {
            message: 'Posts retrieved successfully',
            posts,
        };
    }
}
