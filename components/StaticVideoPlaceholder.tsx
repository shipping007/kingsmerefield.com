import React from "react"

/**
 * Static video placeholder that references a local file path.
 * Place your video at public/videos/about.mp4 (or change the src prop).
 * Optionally place a poster image at public/images/about/video-poster.jpg.
 */
export default function StaticVideoPlaceholder({
  src = "/videos/about.mp4",
  poster = "/images/about/video-poster.jpg",
  heightClass = "h-64",
}: {
  src?: string
  poster?: string
  heightClass?: string
}) {
  return (
    <div className={`relative ${heightClass} rounded-2xl overflow-hidden shadow-soft bg-black/70`}>
      {/* The <video> tag will try to play the local file if present. */}
      <video
        className="w-full h-full object-cover"
        controls
        preload="metadata"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Helper hint overlay (only visible if poster loads and user hasn't played) */}
      <div className="absolute left-3 bottom-3 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
        Replace with your file at {src}
      </div>
    </div>
  )
}
