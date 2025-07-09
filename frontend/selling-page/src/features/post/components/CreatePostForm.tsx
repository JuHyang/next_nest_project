'use client'

import { useState } from 'react'
import { useCreatePostMutation } from '../hooks/useCreatePostMutation'

export default function CreatePostForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { mutate, isPending, isError } = useCreatePostMutation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return

    mutate({ title, content })

    setTitle('')
    setContent('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl p-6 max-w-xl mx-auto mb-6 space-y-4 transition-colors"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        ✏️ Create a new post
      </h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition"
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
        className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition resize-none"
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
      >
        Create Post
      </button>
    </form>
  )
}
