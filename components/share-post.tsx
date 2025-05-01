"use client"

import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface SharePostProps {
  title: string
  slug: string
}

export default function SharePost({ title, slug }: SharePostProps) {
  const { toast } = useToast()
  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
  const url = `${baseUrl}/blog/${slug}`

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
    toast({
      title: "Link copied!",
      description: "The link has been copied to your clipboard.",
      duration: 3000,
    })
  }

  return (
    <div>
      <h3 className="font-serif text-lg font-bold mb-4">Share this post</h3>
      <div className="flex flex-wrap gap-2">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <Button variant="outline" size="icon" className="rounded-full" onClick={handleCopyLink} aria-label="Copy link">
          <LinkIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
