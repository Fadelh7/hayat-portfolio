import { getAllPosts, getPostBySlug } from "@/lib/mdx"
import { notFound } from "next/navigation"
import Image from "next/image"
import { MDXRemote } from "next-mdx-remote/rsc"
import { format } from "date-fns"
import SharePost from "@/components/share-post"
import type { Metadata } from "next"

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {}
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: "article",
      publishedTime: post.frontmatter.date,
      images: [
        {
          url: post.frontmatter.coverImage,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
    },
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container px-4 mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.frontmatter.title}</h1>
          <div className="flex items-center text-muted-foreground mb-6">
            <time dateTime={post.frontmatter.date}>{format(new Date(post.frontmatter.date), "MMMM d, yyyy")}</time>
            <span className="mx-2">•</span>
            <span>{post.frontmatter.readingTime} min read</span>
          </div>
        </div>

        <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
          <Image
            src={post.frontmatter.coverImage || "/placeholder.svg"}
            alt={post.frontmatter.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </div>

        <div className="mt-12 pt-6 border-t">
          <SharePost title={post.frontmatter.title} slug={post.slug} />
        </div>
      </div>
    </article>
  )
}
