import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"

interface RecommendedCategoryCardProps {
  emoji: string
  name: string
}

export function RecommendedCategoryCard({ emoji, name }: RecommendedCategoryCardProps) {
  return (
    <Card className="group flex flex-col items-center border-slate-700 bg-slate-900/60 p-4 text-center transition-all duration-200 hover:border-teal-500/30 hover:bg-slate-800/60">
      <span className="mb-2 text-2xl">{emoji}</span>
      <p className="mb-3 text-sm font-medium text-white">{name}</p>
      <Button
        size="sm"
        variant="outline"
        className="gap-1 border-slate-600 bg-transparent text-xs text-slate-300 hover:border-teal-500/50 hover:bg-teal-500/10 hover:text-teal-300"
      >
        <Plus className="h-3 w-3" />
        Add
      </Button>
    </Card>
  )
}
