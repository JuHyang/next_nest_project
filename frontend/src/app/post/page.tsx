'use client'

import { useEffect } from 'react'
import { usePostStore } from '@/features/post/store/postStore'
import CreatePostForm from '@/features/post/components/CreatePostForm'
import PostList from '@/features/post/components/PostList'

export default function PostPage() {
    const posts = usePostStore((state) => state.posts)
    const fetchPosts = usePostStore((state) => state.fetchPosts)

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            <CreatePostForm />
            <PostList posts={posts} />
        </div>
    )
}
