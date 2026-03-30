"use client"

import * as React from "react"
import { Play } from "lucide-react"

type VideoThumbnailProps = {
  src: string
  posterSrc?: string
  title: string
  className?: string
}

export function VideoThumbnail({ src, posterSrc, title, className }: VideoThumbnailProps) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null)
  const [posterUrl, setPosterUrl] = React.useState<string | null>(null)
  const posterUrlRef = React.useRef<string | null>(null)

  React.useEffect(() => {
    if (posterSrc) return
    if (posterUrlRef.current) {
      URL.revokeObjectURL(posterUrlRef.current)
      posterUrlRef.current = null
    }
    setPosterUrl(null)

    const videoEl = videoRef.current
    if (!videoEl) return

    let cancelled = false

    const captureFrame = async () => {
      if (!videoEl.videoWidth || !videoEl.videoHeight) return

      const canvas = document.createElement("canvas")
      canvas.width = videoEl.videoWidth
      canvas.height = videoEl.videoHeight

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height)

      const blob: Blob | null = await new Promise((resolve) =>
        canvas.toBlob(resolve, "image/jpeg", 0.82)
      )

      if (cancelled || !blob) return

      const nextUrl = URL.createObjectURL(blob)
      if (posterUrlRef.current) URL.revokeObjectURL(posterUrlRef.current)
      posterUrlRef.current = nextUrl
      setPosterUrl(nextUrl)
    }

    const onLoadedData = () => {
      if (cancelled) return
      const duration = Number.isFinite(videoEl.duration) ? videoEl.duration : 0
      const seekTo = duration > 0 ? Math.min(0.1, Math.max(0, duration / 10)) : 0

      try {
        videoEl.currentTime = seekTo
      } catch {
        void captureFrame()
      }
    }

    const onSeeked = () => {
      void captureFrame()
    }

    videoEl.addEventListener("loadeddata", onLoadedData)
    videoEl.addEventListener("seeked", onSeeked)

    // Trigger load
    videoEl.load()

    return () => {
      cancelled = true
      videoEl.removeEventListener("loadeddata", onLoadedData)
      videoEl.removeEventListener("seeked", onSeeked)
      if (posterUrlRef.current) {
        URL.revokeObjectURL(posterUrlRef.current)
        posterUrlRef.current = null
      }
    }
    // Intentionally exclude posterUrl from deps; we manage cleanup manually.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, posterSrc])

  const effectivePoster = posterSrc ?? posterUrl

  return (
    <div className={"relative aspect-video overflow-hidden bg-secondary/30 " + (className ?? "")}> 
      {effectivePoster ? (
        <>
          <img
            src={effectivePoster}
            alt={title}
            className="absolute inset-0 h-full w-full object-contain object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-40 transition-opacity" />
        </>
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5" />
      )}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="inline-flex items-center justify-center rounded-full bg-background/70 p-2">
          <Play className="h-8 w-8 text-primary/50 group-hover:text-primary/70 transition-colors fill-current" />
        </div>
      </div>

      <video
        ref={videoRef}
        className="absolute inset-0 h-0 w-0 opacity-0"
        src={src}
        preload="auto"
        muted
        playsInline
        crossOrigin="anonymous"
      />
    </div>
  )
}
