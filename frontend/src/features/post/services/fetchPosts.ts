export default async function fetchPosts() {
    const res = await fetch('http://localhost:3001/post', {
        cache: 'no-store',
    })
    if (!res.ok) {
        throw new Error('Failed to fetch posts')
    }
    const data = await res.json();

    return data.posts;
}
