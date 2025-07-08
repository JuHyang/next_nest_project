import type { CreatePostInput } from "../types"
import type { Post } from "../types"

export default async function createPost(title: string, content: string): Promise<Post> {
    const requestDto: CreatePostInput = {
        title: title,
        content: content,
    } 
    const res = await fetch('http://localhost:3001/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestDto),
        cache: 'no-store',
    })
    if (!res.ok) {
        throw new Error('Failed to create post')
    }

    const response = await res.json()

    return response.post
}
