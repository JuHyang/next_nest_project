import type { Post } from 'selling-page/src/features/post/types'

export default function PostList({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-10">
        <p>No posts available.</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        📋 Posts
      </h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 hover:shadow-md transition bg-white dark:bg-gray-800"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{post.content}</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              🕒 {new Date(post.createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
