import { GoalsOnboarding } from "@/components/onboarding/goals-onboarding"

export default function OnboardingGoalsPage() {
  // In a real app, you'd get userName from auth context/session
  const userName = "Creator" // Set to null to hide personalized greeting

  return <GoalsOnboarding userName={userName} />
}
