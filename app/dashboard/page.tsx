"use client"

import { useState } from "react"
import { Play } from "lucide-react"

// Mock video data
const videos = [
  {
    id: 1,
    title: "5 Habits to Change Your Life",
    creator: "@growthcoach",
    reason: "High engagement, great for beginners looking to improve daily routines",
    thumbnail: "/motivational-speaker-coaching.jpg",
  },
  {
    id: 2,
    title: "Morning Routine That Actually Works",
    creator: "@productivitypro",
    reason: "Practical tips, highly rated by users interested in personal growth",
    thumbnail: "/morning-routine-productivity.png",
  },
  {
    id: 3,
    title: "The Power of Consistent Action",
    creator: "@mindsetmaster",
    reason: "Inspirational content with actionable steps for building better habits",
    thumbnail: "/motivation-consistency-success.jpg",
  },
]

export default function Dashboard() {
  const [completedVideos, setCompletedVideos] = useState<number[]>([])

  const toggleVideo = (id: number) => {
    setCompletedVideos((prev) => (prev.includes(id) ? prev.filter((videoId) => videoId !== id) : [...prev, id]))
  }

  const progress = (completedVideos.length / videos.length) * 100

  return (
    <main className="min-h-screen bg-[#0a0e27] pb-24">
      {/* Fixed Header */}
      <header className="sticky top-0 z-50 bg-[#0a0e27] shadow-[0px_2px_8px_rgba(0,0,0,0.3)] px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">FYPFixer</h1>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#208E9F] to-[#FF6B35] flex items-center justify-center text-white text-sm font-bold">
          U
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="px-4 pt-6 space-y-6">
        {/* Hero Section */}
        <section className="space-y-2">
          <h2 className="text-[28px] font-bold text-white leading-tight">Your 10-Minute FYP Plan</h2>
          <p className="text-sm text-[#B0B0B0]">3 videos curated for Personal Growth today</p>
          <p className="text-xs text-[#909090] italic">Not 40 minutes of scrolling</p>
        </section>

        {/* Anti-Pattern Card */}
        <div className="bg-[rgba(255,45,85,0.1)] border border-[rgba(255,45,85,0.3)] rounded-lg p-3">
          <div className="grid grid-cols-2 gap-4">
            {/* Left Column - TikTok */}
            <div className="space-y-1">
              <div className="text-2xl">❌</div>
              <div className="text-sm text-[#FF3B30] font-medium">TikTok</div>
              <div className="text-xs text-[#B0B0B0]">40 min/day</div>
              <div className="text-[10px] text-[#909090] line-through">for 10 min of value</div>
            </div>

            {/* Right Column - FYPFixer */}
            <div className="space-y-1">
              <div className="text-2xl">✅</div>
              <div className="text-sm text-[#34C759] font-medium">FYPFixer</div>
              <div className="text-xs text-[#B0B0B0]">10 min/day</div>
              <div className="text-[10px] text-[#34C759]">= 3.5h saved/week</div>
            </div>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,45,85,0.15)] rounded-xl p-4 space-y-3">
          {/* Header Row */}
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white">Daily Progress</h3>
            <span className="text-xs text-[#B0B0B0]">
              {completedVideos.length}/{videos.length} completed
            </span>
          </div>

          {/* Checkbox Row */}
          <div className="flex items-center gap-2">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                  completedVideos.includes(video.id)
                    ? "bg-gradient-to-br from-[#208E9F] to-[#34C759] border-[#34C759]"
                    : "border-white/40"
                }`}
              >
                {completedVideos.includes(video.id) && <span className="text-white text-sm">✓</span>}
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#208E9F] to-[#34C759] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Motivation Text */}
          <p className="text-xs text-[#B0B0B0]">
            {completedVideos.length === 0 && "Ready to start? Let's go! 💪"}
            {completedVideos.length > 0 &&
              completedVideos.length < videos.length &&
              "Keep going! You're doing great! 🔥"}
            {completedVideos.length === videos.length && "Amazing! You completed today's plan! 🎉"}
          </p>
        </div>

        {/* Video Cards */}
        <div className="space-y-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden shadow-[0px_4px_16px_rgba(0,0,0,0.2)]"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[9/16] max-h-[480px]">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                {/* Checkbox Overlay */}
                <button
                  onClick={() => toggleVideo(video.id)}
                  className={`absolute top-3 left-3 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                    completedVideos.includes(video.id)
                      ? "bg-gradient-to-br from-[#208E9F] to-[#34C759] border-[#34C759]"
                      : "bg-black/30 border-white backdrop-blur-sm"
                  }`}
                >
                  {completedVideos.includes(video.id) && <span className="text-white text-sm">✓</span>}
                </button>

                {/* Play Icon Overlay */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Content */}
              <div className="p-4 space-y-2">
                <h4 className="text-base font-bold text-white line-clamp-2">{video.title}</h4>
                <p className="text-xs text-[#B0B0B0]">{video.creator}</p>
                <p className="text-[11px] text-[#909090] italic line-clamp-2">{video.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Bottom Button */}
      <div className="fixed bottom-4 left-4 right-4 z-40">
        <button
          className="w-full h-14 bg-gradient-to-br from-[#FF6B35] to-[#FF9F0A] text-white text-base font-bold rounded-xl shadow-[0px_0px_16px_rgba(255,107,53,0.4)] hover:shadow-[0px_0px_24px_rgba(255,107,53,0.6)] transition-shadow active:scale-[0.98] transition-transform"
          onClick={() => window.open("https://tiktok.com", "_blank")}
        >
          🎬 Open in TikTok
        </button>
      </div>
    </main>
  )
}
