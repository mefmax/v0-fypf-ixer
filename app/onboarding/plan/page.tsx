import { PlanPreview } from "@/components/onboarding/plan-preview"

export default function PlanPreviewPage() {
  // In a real app, these would come from the previous onboarding step
  const selectedGoals = [
    { id: "more-educational", icon: "🎓", title: "More educational content" },
    { id: "less-doomscroll", icon: "🧹", title: "Less low-value content" },
    { id: "grow-creator", icon: "🚀", title: "Grow my creator account" },
  ]

  return <PlanPreview selectedGoals={selectedGoals} />
}
