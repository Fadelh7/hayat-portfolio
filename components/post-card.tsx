import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PostCardProps {
  post: {
    slug: string
    frontmatter: {
      title: string
      date: string
      excerpt: string
      coverImage: string
      readingTime: string
    }
  }
  isFeatured?: boolean
}

export default function PostCard({ post, isFeatured = false }: PostCardProps) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
          <Image
            src={post.frontmatter.coverImage || "/placeholder.svg"}
            alt={post.frontmatter.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div>
        <div className="text-sm text-muted-foreground mb-2">
          {format(new Date(post.frontmatter.date), "MMMM d, yyyy")}
          {post.frontmatter.readingTime && (
            <>
              <span className="mx-2">•</span>
              <span>{post.frontmatter.readingTime} min read</span>
            </>
          )}
        </div>
        <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{post.frontmatter.excerpt}</p>
        <Button asChild variant="link" className="p-0 h-auto font-medium">
          <Link href={`/blog/${post.slug}`}>
            Read more <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  )
}
