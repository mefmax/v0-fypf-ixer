"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Check, Clock, Calendar, Shield, Layers } from "lucide-react"

interface Goal {
  id: string
  icon: string
  title: string
}

interface PlanPreviewProps {
  selectedGoals: Goal[]
}

interface ChecklistItem {
  id: string
  icon: string
  title: string
  description: string
  duration: string
}

const checklistItems: ChecklistItem[] = [
  {
    id: "clean-up",
    icon: "🧹",
    title: "Clean up 5 low-value videos",
    description: "Use 'Not interested' on 5 videos that don't match your goals today.",
    duration: "~3 min",
  },
  {
    id: "save-videos",
    icon: "📥",
    title: "Save 3 great videos",
    description: "Save or favorite 3 high-quality videos that fit your target topics.",
    duration: "~3 min",
  },
  {
    id: "follow-creators",
    icon: "➕",
    title: "Follow 2–3 creators you want more of",
    description: "Follow a few creators whose content you'd love to see daily.",
    duration: "~2 min",
  },
  {
    id: "take-break",
    icon: "⏱️",
    title: "Take a 5-minute break",
    description: "After finishing these steps, close TikTok for at least 5 minutes.",
    duration: "5 min",
  },
]

const weekStats = [
  { icon: Clock, label: "Daily time", value: "10–15 min" },
  { icon: Calendar, label: "Days this week", value: "7 days" },
  { icon: Shield, label: "Manual actions only", value: "No automation, no bots" },
  { icon: Layers, label: "Content focus", value: "Education · Mindset" },
]

export function PlanPreview({ selectedGoals }: PlanPreviewProps) {
  const [completedItems, setCompletedItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setCompletedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-[960px] px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎬</span>
            <span className="text-xl font-semibold text-white">FYPFixer</span>
          </div>
          <span className="text-sm font-medium text-teal-400">Week 1 · Day 1</span>
        </header>

        {/* Welcome & Summary */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl">Your personalized FYP plan is ready</h1>
          <p className="mb-6 text-lg text-slate-300">Here's what Week 1 looks like based on your goals.</p>

          {/* Goal Chips */}
          <div className="flex flex-wrap justify-center gap-2">
            {selectedGoals.map((goal) => (
              <span
                key={goal.id}
                className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1.5 text-sm text-teal-300"
              >
                <span>{goal.icon}</span>
                <span>{goal.title}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Main Plan Card */}
        <Card className="mb-8 border-teal-500/30 bg-slate-900/80 p-6 shadow-lg shadow-teal-500/5">
          {/* Card Header */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-teal-400">Week 1 overview</p>
              <h2 className="text-xl font-bold text-white sm:text-2xl">Focus: Reset your FYP baseline</h2>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center gap-3 rounded-lg bg-slate-800/50 px-4 py-3">
              <div className="relative h-12 w-12">
                <svg className="h-12 w-12 -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-700"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-teal-500"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="0, 100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                  0%
                </span>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-white">0% complete</p>
                <p className="text-xs text-slate-400">Day 1 of 7</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {weekStats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3 rounded-lg bg-slate-800/50 px-4 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10">
                  <stat.icon className="h-4 w-4 text-teal-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                  <p className="text-sm font-medium text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-slate-300">
            This week you'll gently retrain your FYP by making small, consistent manual actions each day. No automation,
            no hacks — just better signals to TikTok.
          </p>
        </Card>

        {/* Today's Checklist Card */}
        <Card className="mb-8 border-slate-700 bg-slate-900/60 p-6">
          <div className="mb-5">
            <h3 className="text-lg font-bold text-white">Today's checklist</h3>
            <p className="text-sm text-slate-400">Complete these simple steps to start retraining your FYP.</p>
          </div>

          <div className="space-y-3">
            {checklistItems.map((item) => {
              const isCompleted = completedItems.includes(item.id)

              return (
                <button
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={cn(
                    "group flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200 min-h-[72px] cursor-pointer",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900",
                    isCompleted
                      ? "border-teal-500/40 bg-teal-500/10"
                      : "border-slate-700 bg-slate-800/30 hover:border-teal-500/50 hover:bg-slate-800/60 hover:-translate-y-0.5 hover:shadow-md hover:shadow-teal-500/10 active:translate-y-0 active:bg-slate-800/80",
                  )}
                >
                  {/* Check Circle */}
                  <div
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200",
                      isCompleted ? "border-teal-500 bg-teal-500" : "border-slate-600 group-hover:border-teal-500/50",
                    )}
                  >
                    {isCompleted && <Check className="h-3.5 w-3.5 text-slate-900" />}
                  </div>

                  {/* Icon */}
                  <span className={cn("text-xl transition-opacity", isCompleted && "opacity-70")}>{item.icon}</span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4
                      className={cn(
                        "font-medium transition-all text-[15px]",
                        isCompleted ? "text-slate-300 opacity-80" : "text-white",
                      )}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={cn(
                        "text-sm transition-all leading-relaxed",
                        isCompleted ? "text-slate-500 opacity-80" : "text-slate-400",
                      )}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    {isCompleted && (
                      <span className="rounded-full border border-teal-500/50 bg-teal-500/10 px-2 py-0.5 text-xs font-medium text-teal-400">
                        Done
                      </span>
                    )}
                    <span className={cn("rounded-full px-2.5 py-1 text-xs font-medium", "bg-slate-800 text-slate-300")}>
                      {item.duration}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </Card>

        {/* Actions */}
        <div className="flex flex-col items-center gap-3">
          <Button
            size="lg"
            className="w-full bg-orange-500 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 hover:shadow-orange-500/40 sm:w-auto sm:min-w-[240px]"
          >
            Start Day 1 now
          </Button>

          <p className="mt-2 mb-4 max-w-md text-center text-xs text-slate-500">
            FYPFixer only creates manual action plans. All TikTok actions are performed by you, on your device, using
            official apps.
          </p>

          <div className="text-center">
            <button className="text-sm text-slate-400 underline-offset-2 hover:text-slate-300 hover:underline">
              View full 7-day plan
            </button>
            <p className="mt-1 text-xs text-slate-500">See what's coming next before you start.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
