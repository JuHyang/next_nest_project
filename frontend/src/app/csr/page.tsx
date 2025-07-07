'use client'

import { useEffect, useState } from 'react'
import { usePostStore } from '@/stores/postStore'
import type { Post } from '@shared/types/post'

export default function CSR() {
    const posts = usePostStore((state) => state.posts)
    const fetchPosts = usePostStore((state) => state.fetchPosts)
    const createPost = usePostStore((state) => state.createPost)
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        fetchPosts()
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!title.trim() || !content.trim()) return
        
        await createPost({
            title,
            content,
        })
        
        setTitle('')
        setContent('')
    }

    if (!posts) return <p>Loading...</p>

    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold mb-4">Posts</h1>
                <form onSubmit={handleSubmit} className="mb-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border p-2 mr-2"
                    />
                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="border p-2 mr-2"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2"
                    >
                        Create Post
                    </button>
                </form>
            </div>
            <div>
            {
                posts.map((post: Post) => (
                    <div key={post.id} className="border p-4 mb-4">
                        <h2 className="text-xl font-bold">{post.title}</h2>
                        <p>{post.content}</p>
                        <p className="text-gray-500 text-sm">
                            Created at: {new Date(post.createdAt).toLocaleString()}
                        </p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}