"use client"

import React from "react"

export default function VideoUploadPlaceholder() {
  const [file, setFile] = React.useState<File | null>(null)
  const videoRef = React.useRef<HTMLVideoElement | null>(null)

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const f = e.target.files?.[0]
    if (f) setFile(f)
  }

  const inputRef = React.useRef<HTMLInputElement | null>(null)

  return (
    <div className="relative h-64 rounded-2xl overflow-hidden shadow-soft bg-black/70">
      {file ? (
        <video
          ref={videoRef}
          controls
          className="w-full h-full object-cover"
          src={URL.createObjectURL(file)}
        />
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="absolute inset-0 flex flex-col items-center justify-center text-white/90 hover:text-white transition-colors"
        >
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg mb-3">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="text-navy">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="font-medium">Upload video (placeholder)</span>
          <span className="text-xs text-white/70 mt-1">MP4/WebM, preview only, not saved</span>
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        className="hidden"
        onChange={onChange}
      />
    </div>
  )
}
