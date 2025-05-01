import { getAllPosts } from "@/lib/mdx"
import PostCard from "@/components/post-card"

export default async function FeaturedPosts() {
  const posts = await getAllPosts()
  const featuredPosts = posts.slice(0, 3) // Get the first 3 posts

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredPosts.map((post) => (
        <PostCard key={post.slug} post={post} isFeatured />
      ))}
    </div>
  )
}
