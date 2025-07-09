'use client'

import { useEffect } from 'react'
import { usePostStore } from 'selling-page/src/features/post/store/postStore'
import CreatePostForm from 'selling-page/src/features/post/components/CreatePostForm'
import PostList from 'selling-page/src/features/post/components/PostList'
import { usePostQuery } from 'selling-page/src/features/post/hooks/usePostQuery'

export default function PostPage() {
    const { data, isLoading, isError } = usePostQuery()
    const setPosts = usePostStore((state) => state.setPosts)
    const posts = usePostStore((state) => state.posts)

    useEffect(() => {
        if (data) {
            setPosts(data)
        }
    }, [data, setPosts])

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Failed to load posts</p>


    return (
        <div>
            <CreatePostForm />
            <PostList posts={posts} />
        </div>
    )
}
