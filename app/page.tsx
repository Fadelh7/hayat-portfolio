"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram, Facebook, Twitter, Mail, Phone, MapPin, Menu, X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const { toast } = useToast()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })
    ;(e.target as HTMLFormElement).reset()
  }

  const galleryImages = [
    {
      id: 1,
      src: "/gallery/artwork-1.jpg",
      alt: "Still life with blue polka dot cup, bottle, and citrus fruits",
      title: "Morning Light",
      medium: "Oil on Canvas",
      year: "2022",
      dimensions: "40 × 50 cm",
    },
    {
      id: 2,
      src: "/gallery/artwork-2.jpg",
      alt: "Portrait sketch of two figures on pink background",
      title: "Duality",
      medium: "Mixed Media",
      year: "2021",
      dimensions: "35 × 45 cm",
    },
    {
      id: 3,
      src: "/gallery/artwork-3.jpg",
      alt: "Three figures in expressive style",
      title: "Sisterhood",
      medium: "Acrylic on Canvas",
      year: "2023",
      dimensions: "60 × 70 cm",
    },
    {
      id: 4,
      src: "/gallery/artwork-4.jpg",
      alt: "Abstract geometric composition in black, white and blue",
      title: "Fragmented Reality",
      medium: "Acrylic on Canvas",
      year: "2022",
      dimensions: "50 × 60 cm",
    },
    {
      id: 5,
      src: "/gallery/artwork-5.jpg",
      alt: "Market scene with fruits and vegetables",
      title: "Lebanese Market",
      medium: "Oil on Canvas",
      year: "2021",
      dimensions: "45 × 55 cm",
    },
    {
      id: 6,
      src: "/gallery/artwork-6.jpg",
      alt: "Reclining figure in green with vibrant colors",
      title: "Afternoon Repose",
      medium: "Mixed Media",
      year: "2023",
      dimensions: "55 × 65 cm",
    },
    {
      id: 7,
      src: "/gallery/artwork-7.jpg",
      alt: "Portrait of two figures in soft colors",
      title: "Connection",
      medium: "Acrylic on Canvas",
      year: "2022",
      dimensions: "40 × 50 cm",
    },
    {
      id: 8,
      src: "/gallery/artwork-8.jpg",
      alt: "Three figures - two in dark suits and one with blonde hair",
      title: "The Meeting",
      medium: "Mixed Media",
      year: "2021",
      dimensions: "50 × 50 cm",
    },
    {
      id: 9,
      src: "/gallery/artwork-9.jpg",
      alt: "Portrait of two figures with dark and blonde hair",
      title: "Contrast",
      medium: "Acrylic on Canvas",
      year: "2023",
      dimensions: "40 × 60 cm",
    },
  ]

  const blogPosts = [
    {
      title: "Exploring the Intersection of Art and Feminism",
      date: "2023-04-15",
      excerpt: "How feminist perspectives have shaped my artistic journey and continue to influence my work.",
      coverImage: "/gallery/artwork-3.jpg",
      readingTime: "5",
    },
    {
      title: "The Power of Color in Visual Storytelling",
      date: "2023-03-22",
      excerpt: "Examining how color choices impact the emotional resonance and narrative of artwork.",
      coverImage: "/gallery/artwork-6.jpg",
      readingTime: "4",
    },
    {
      title: "Finding Inspiration in Everyday Life",
      date: "2023-02-10",
      excerpt: "How ordinary moments and objects can spark extraordinary artistic creations.",
      coverImage: "/gallery/artwork-1.jpg",
      readingTime: "3",
    },
  ]

  return (
    <>
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="font-serif text-xl font-bold text-primary">
              Hayat Zeineddeen
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Blog
              </button>
              <Button onClick={() => scrollToSection("contact")} variant="default" size="sm" className="rounded-full">
                Contact
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("blog")}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Blog
                </button>
                <Button onClick={() => scrollToSection("contact")} variant="default" size="sm" className="rounded-full w-full">
                  Contact
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="py-20 md:py-32">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
                Visual Artist & Storyteller
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Exploring themes of equality, women's rights, and social narratives through art
              </p>
              <Button onClick={() => scrollToSection("gallery")} size="lg" className="rounded-full">
                View Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/50">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl font-bold mb-12 text-center">About Me</h2>
              
          

              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                  <h3 className="font-serif text-2xl font-bold mb-4">Hayat Zeineddeen</h3>
                  <p className="text-muted-foreground mb-4">
                    Born and raised in Lebanon, I graduated from the Lebanese University, Faculty of Fine Arts & Architecture.
                    My artistic journey began at an early age, influenced by the rich cultural tapestry of my homeland.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Through my work, I explore themes of equality, women's rights, social narratives, and the beauty of
                    everyday life. My art is a reflection of my experiences and observations, a visual dialogue about the
                    world around us.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    I work primarily with painting, sculpture, and mixed media, constantly experimenting with different
                    techniques and materials to express my ideas and emotions.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-bold mb-6">Artist Statement</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      My work is deeply rooted in the exploration of human experience, with a particular focus on women's
                      narratives and social equality. I believe that art has the power to challenge perspectives, evoke
                      emotions, and inspire change.
                    </p>
                    <p>
                      Through my artistic practice, I seek to give voice to the unheard, to shed light on social issues, and to
                      celebrate the resilience and strength of the human spirit. Each piece is a story, a moment captured in
                      time, a reflection of our shared humanity.
                    </p>
                  </div>
                </div>

              
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20">
          <div className="container px-4 mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-12 text-center">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="font-serif text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-sm">{image.medium}</p>
                      <p className="text-sm">{image.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section
        <section id="blog" className="py-20 bg-muted/50">
          <div className="container px-4 mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-12 text-center">Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-background rounded-lg overflow-hidden shadow-md">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <time className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h3 className="font-serif text-xl font-bold mt-2 mb-3">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section> */}
        

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl font-bold mb-4 text-center">Contact Me</h2>
              <p className="text-muted-foreground text-center mb-12 text-lg max-w-2xl mx-auto">
                I'd love to hear from you. Whether you're interested in my work, have questions about commissions, or just want to say hello.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-muted-foreground">hayat@example.com</p>
                      </div>
                    </div>
                {  /*  <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-muted-foreground">+961 1 234 567</p>
                      </div>
                    </div>*/}
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Studio</h4>
                        <p className="text-muted-foreground">Beirut, Lebanon</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="font-serif text-2xl font-bold mb-6">Follow Me</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border rounded-md bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border rounded-md bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-2 border rounded-md bg-background"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full rounded-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Image Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={galleryImages[selectedImage - 1].src}
                  alt={galleryImages[selectedImage - 1].alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-2xl font-bold">{galleryImages[selectedImage - 1].title}</h3>
                <p className="text-muted-foreground">{galleryImages[selectedImage - 1].medium}</p>
                <p className="text-muted-foreground">{galleryImages[selectedImage - 1].year}</p>
                <p className="text-muted-foreground">{galleryImages[selectedImage - 1].dimensions}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
