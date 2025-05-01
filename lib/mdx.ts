import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { cache } from "react"

// Directory where MDX files are stored
const postsDirectory = path.join(process.cwd(), "content/posts")

// Create the directory if it doesn't exist
try {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }
} catch (error) {
  console.error("Failed to create posts directory:", error)
}

// Get all post slugs
export const getPostSlugs = cache(() => {
  try {
    return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"))
  } catch (error) {
    console.error("Error reading post directory:", error)
    return []
  }
})

// Get post by slug
export const getPostBySlug = cache(async (slug: string) => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)

    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: {
        title: data.title || "",
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || "",
        coverImage: data.coverImage || "/placeholder.svg",
        readingTime: data.readingTime || calculateReadingTime(content),
        ...data,
      },
      content,
    }
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error)
    return null
  }
})

// Get all posts
export const getAllPosts = cache(async () => {
  try {
    const slugs = getPostSlugs()
    const posts = await Promise.all(
      slugs.map(async (slug) => {
        const post = await getPostBySlug(slug.replace(/\.mdx$/, ""))
        return post
      }),
    )

    // Filter out null posts and sort by date
    return posts
      .filter(Boolean)
      .sort((a, b) => new Date(b!.frontmatter.date).getTime() - new Date(a!.frontmatter.date).getTime())
  } catch (error) {
    console.error("Error getting all posts:", error)

    // Return sample posts if no posts are found
    return getSamplePosts()
  }
})

// Calculate reading time
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)
  return readingTime.toString()
}

// Sample posts for development
function getSamplePosts() {
  return [
    {
      slug: "exploring-the-intersection-of-art-and-feminism",
      frontmatter: {
        title: "Exploring the Intersection of Art and Feminism",
        date: "2023-04-15T00:00:00.000Z",
        excerpt: "How feminist perspectives have shaped my artistic journey and continue to influence my work.",
        coverImage: "/blog/post-1.jpg",
        readingTime: "5",
      },
      content:
        "# Exploring the Intersection of Art and Feminism\n\nArt has always been a powerful medium for expressing social and political ideas...",
    },
    {
      slug: "the-power-of-color-in-visual-storytelling",
      frontmatter: {
        title: "The Power of Color in Visual Storytelling",
        date: "2023-03-22T00:00:00.000Z",
        excerpt: "Examining how color choices impact the emotional resonance and narrative of artwork.",
        coverImage: "/blog/post-2.jpg",
        readingTime: "4",
      },
      content:
        "# The Power of Color in Visual Storytelling\n\nColor is one of the most powerful tools in an artist's arsenal...",
    },
    {
      slug: "finding-inspiration-in-everyday-life",
      frontmatter: {
        title: "Finding Inspiration in Everyday Life",
        date: "2023-02-10T00:00:00.000Z",
        excerpt: "How ordinary moments and objects can spark extraordinary artistic creations.",
        coverImage: "/blog/post-3.jpg",
        readingTime: "3",
      },
      content:
        "# Finding Inspiration in Everyday Life\n\nAs artists, we often search for grand moments of inspiration...",
    },
  ]
}
