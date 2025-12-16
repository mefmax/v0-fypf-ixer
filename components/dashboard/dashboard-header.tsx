import { Card } from "@/components/ui/card"

export function DashboardHeader() {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Left: Logo & Title */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎬</span>
          <span className="text-xl font-semibold text-white">FYPFixer</span>
        </div>
        <p className="mt-1 text-sm text-slate-400">Your daily personal growth companion</p>
      </div>

      {/* Right: Weekly Progress Badge */}
      <Card className="border-teal-500/30 bg-slate-900/80 px-4 py-3">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-sm font-medium text-white">Week 1 / 4 · Day 1 / 7</p>
            {/* Progress Bar */}
            <div className="mt-2 h-1.5 w-32 overflow-hidden rounded-full bg-slate-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-400"
                style={{ width: "14%" }}
              />
            </div>
          </div>
          <div className="border-l border-slate-700 pl-4">
            <p className="text-xs text-slate-500">Streak</p>
            <p className="text-sm font-medium text-teal-400">1 day</p>
          </div>
          <div className="border-l border-slate-700 pl-4">
            <p className="text-xs text-slate-500">XP</p>
            <p className="text-sm font-medium text-orange-400">0 XP</p>
          </div>
        </div>
      </Card>
    </header>
  )
}
