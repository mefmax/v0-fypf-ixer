import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink, Check, SkipForward } from "lucide-react"

export function NextVideoCard() {
  return (
    <Card className="border-teal-500/30 bg-slate-900/80 p-5 shadow-lg shadow-teal-500/5">
      <div className="flex flex-col gap-5 lg:flex-row">
        {/* Video Thumbnail */}
        <div className="relative aspect-[9/16] w-full max-w-[180px] shrink-0 self-center overflow-hidden rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 lg:self-start">
          {/* Badge */}
          <div className="absolute left-2 top-2 rounded-full bg-slate-900/90 px-2 py-0.5 text-[10px] font-medium text-slate-300">
            Video 1 / 4 for today
          </div>
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/90 shadow-lg shadow-orange-500/30">
              <Play className="h-6 w-6 text-white" fill="white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col">
          <h3 className="text-lg font-bold text-white">Your next video</h3>
          <p className="mb-3 text-sm text-slate-400">Handpicked from your target topics</p>

          {/* Meta Info */}
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span>From: @creator_handle</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>Approx. length: 30–60 sec</span>
          </div>

          {/* Description */}
          <p className="mb-4 text-sm leading-relaxed text-slate-300">
            Short, high-signal content that matches your "More educational content" goal.
          </p>

          {/* Buttons */}
          <div className="mt-auto flex flex-wrap gap-2">
            <Button className="gap-2 bg-orange-500 font-semibold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600 hover:shadow-orange-500/40">
              <ExternalLink className="h-4 w-4" />
              Open in TikTok
            </Button>
            <Button
              variant="outline"
              className="gap-2 border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <Check className="h-4 w-4" />
              Mark as watched
            </Button>
            <Button variant="ghost" className="gap-2 text-slate-400 hover:bg-slate-800 hover:text-slate-300">
              <SkipForward className="h-4 w-4" />
              Skip
            </Button>
          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-[10px] text-slate-500">
            FYPFixer never automates actions. You open and interact with videos manually in the TikTok app.
          </p>
        </div>
      </div>
    </Card>
  )
}
