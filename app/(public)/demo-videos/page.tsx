import { Header } from "@/components/new-header"
import { Footer } from "@/components/new-footer"
import { Play } from "lucide-react"
import { VideoThumbnail } from "@/components/video-thumbnail"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export const metadata = {
  title: 'Demo Videos | DigitalManager',
  description: 'Watch demo videos and tutorials for DigitalManager'
}

function cloudinaryPosterFromVideoUrl(videoUrl: string): string | undefined {
  try {
    const url = new URL(videoUrl)
    if (!url.hostname.endsWith("res.cloudinary.com")) return undefined

    const parts = url.pathname.split("/")
    const uploadIndex = parts.indexOf("upload")
    if (uploadIndex === -1) return undefined

    const next = [...parts]
    // Insert a simple transformation right after `/upload/`
    next.splice(uploadIndex + 1, 0, "so_0.1,f_jpg")
    const last = next[next.length - 1]
    next[next.length - 1] = last.replace(/\.[a-z0-9]+$/i, ".jpg")
    url.pathname = next.join("/")
    return url.toString()
  } catch {
    return undefined
  }
}

export default function DemoVideosPage() {
  const videos = [
    {
      title: "Creating Your First Invoice",
      src: "https://res.cloudinary.com/degwyhp5q/video/upload/v1774868289/Invoices_ith6xk.mp4",
    },
    {
      title: "Setting Up FBR Integration",
      src: "https://res.cloudinary.com/degwyhp5q/video/upload/v1774868263/FBR_Invoice_System_-_Google_Chrome_2026-03-25_14-30-35_tap6i0.mp4",
    },
    {
      title: "Generating Reports",
      src: "https://res.cloudinary.com/degwyhp5q/video/upload/v1774868642/reports_af13c9.mp4",
    },
    {
      title: "Tax Calculation Explained",
      src: "https://res.cloudinary.com/degwyhp5q/video/upload/v1774868701/Screen_Recording_2026-03-26_140324_xeerxz.mp4",
    },
    {
      title: "Advanced Features Tour",
      src: "https://res.cloudinary.com/degwyhp5q/video/upload/v1774868226/buyer_h6w8wg.mp4",
    },
    {
      title: "Managing Multiple Users",
      src: "https://res.cloudinary.com/degwyhp5q/video/upload/v1774868794/Users_ip81fo.mp4",
    },
  ]

  const resolvedVideos = videos.map((video) => ({
    ...video,
    posterSrc: cloudinaryPosterFromVideoUrl(video.src),
  }))

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-10 sm:py-12 bg-linear-to-b from-primary/8 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 text-center">
              Demo Videos
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground text-center max-w-2xl mx-auto">
              Learn how to use DigitalManager with our video tutorials
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-12 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Featured Video (placeholder panel) */}
            <div className="mb-10">
              <div className="bg-linear-to-br from-primary/10 to-primary/5 rounded-lg aspect-video flex items-center justify-center border border-primary/20 mb-3 cursor-pointer hover:border-primary/40 transition-colors">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-2">
                    <Play className="h-6 w-6 text-primary-foreground fill-current" />
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Featured Demo Video</p>
                </div>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-1">Getting Started with DigitalManager</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">Learn the basics in this 5-minute overview of the platform</p>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Video Tutorials</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {resolvedVideos.map((video, idx) => (
                <Dialog key={idx}>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="w-full text-left border border-border/40 rounded-lg overflow-hidden hover:border-primary/20 transition-colors group"
                    >
                      <VideoThumbnail src={video.src} posterSrc={video.posterSrc} title={video.title} />
                      <div className="p-3">
                        <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                          {video.title}
                        </h4>
                      </div>
                    </button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>{video.title}</DialogTitle>
                      <DialogDescription>Click play to watch the demo video.</DialogDescription>
                    </DialogHeader>
                    <div className="relative w-full aspect-video rounded-lg border border-border overflow-hidden bg-secondary/30">
                      <video
                        className="h-full w-full"
                        src={video.src}
                        controls
                        autoPlay
                        playsInline
                        preload="metadata"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
