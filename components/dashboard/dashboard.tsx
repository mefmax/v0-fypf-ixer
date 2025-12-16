"use client"

import { useState } from "react"
import { DashboardHeader } from "./dashboard-header"
import { TodayProgressCard } from "./today-progress-card"
import { NextVideoCard } from "./next-video-card"
import { TodayChecklist } from "./today-checklist"
import { ActivePlansSection } from "./active-plans-section"
import { RecommendedSection } from "./recommended-section"

export function Dashboard() {
  const [completedItems, setCompletedItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setCompletedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <DashboardHeader />

        {/* Main Content Grid */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            <TodayProgressCard />
            <NextVideoCard />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <TodayChecklist completedItems={completedItems} onToggleItem={toggleItem} />
            <ActivePlansSection />
          </div>
        </div>

        {/* Recommended Section - Full Width */}
        <RecommendedSection />

        {/* Footer Microcopy */}
        <div className="mt-10 pb-8 text-center">
          <p className="text-xs text-slate-500">
            You're always in control. FYPFixer only suggests manual actions — you decide what to do in TikTok.
          </p>
        </div>
      </div>
    </div>
  )
}
