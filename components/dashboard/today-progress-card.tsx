import { Card } from "@/components/ui/card"
import { Play, Clock, Flame, Zap } from "lucide-react"

const stats = [
  { icon: Play, label: "Videos watched", value: "0 / 4", showProgress: true },
  { icon: Clock, label: "Time spent", value: "0 min", showProgress: false },
  { icon: Flame, label: "Today's streak", value: "Day 1", showProgress: false },
  { icon: Zap, label: "XP earned", value: "0 XP", showProgress: false },
]

export function TodayProgressCard() {
  return (
    <Card className="border-teal-500/30 bg-slate-900/80 p-5 shadow-lg shadow-teal-500/5">
      <h2 className="mb-4 text-lg font-bold text-white">Your progress today</h2>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <div key={index} className="rounded-lg bg-slate-800/50 p-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/10">
                <stat.icon className="h-4 w-4 text-teal-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500">{stat.label}</p>
                <p className="text-sm font-semibold text-white">{stat.value}</p>
              </div>
            </div>
            {stat.showProgress && (
              <div className="mt-2">
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-700">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-teal-600 to-teal-500"
                    style={{ width: "0%" }}
                  />
                </div>
                <p className="mt-1 text-[10px] text-slate-500">0% of today's plan</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  )
}
