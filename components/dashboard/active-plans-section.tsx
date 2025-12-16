import { PlanCard } from "./plan-card"

const activePlans = [
  {
    emoji: "💪",
    title: "Fitness",
    progress: 43,
    daysCompleted: 3,
    totalDays: 7,
    stepsToday: 2,
    isActive: true,
  },
  {
    emoji: "🧠",
    title: "Mindset",
    progress: 28,
    daysCompleted: 2,
    totalDays: 7,
    stepsToday: 3,
    isActive: true,
  },
  {
    emoji: "📚",
    title: "Skills",
    progress: 0,
    daysCompleted: 0,
    totalDays: 7,
    stepsToday: 0,
    isActive: false,
  },
]

export function ActivePlansSection() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-bold text-white">My active plans</h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {activePlans.map((plan) => (
          <PlanCard key={plan.title} {...plan} />
        ))}
      </div>
    </div>
  )
}
