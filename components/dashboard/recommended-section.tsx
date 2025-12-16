import { RecommendedCategoryCard } from "./recommended-category-card"

const recommendedCategories = [
  { emoji: "💰", name: "Finance" },
  { emoji: "✅", name: "Habits" },
  { emoji: "⚡", name: "Productivity" },
  { emoji: "😴", name: "Sleep" },
  { emoji: "🔥", name: "Motivation" },
]

export function RecommendedSection() {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-bold text-white">Recommended for you</h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {recommendedCategories.map((category) => (
          <RecommendedCategoryCard key={category.name} {...category} />
        ))}
      </div>
    </div>
  )
}
