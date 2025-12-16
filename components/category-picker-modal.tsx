"use client"

import { useState } from "react"
import { X } from "lucide-react"

const categories = [
  { name: "Fitness", emoji: "💪" },
  { name: "Mindset", emoji: "🧠" },
  { name: "Skills", emoji: "📚" },
  { name: "Habits", emoji: "⚡" },
  { name: "Productivity", emoji: "🚀" },
  { name: "Health", emoji: "❤️" },
  { name: "Finance", emoji: "💰" },
  { name: "Relationships", emoji: "❤️‍🔥" },
  { name: "Creativity", emoji: "🎨" },
  { name: "Sleep", emoji: "😴" },
  { name: "Motivation", emoji: "🔥" },
  { name: "Language", emoji: "🇺🇸" },
]

interface CategoryPickerModalProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (category: string) => void
}

export function CategoryPickerModal({ isOpen, onClose, onSelect }: CategoryPickerModalProps) {
  const [selected, setSelected] = useState<string>("Mindset")

  if (!isOpen) return null

  const handleSelect = (categoryName: string) => {
    setSelected(categoryName)
  }

  const handleStart = () => {
    onSelect(selected)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <div className="relative w-full max-w-lg bg-slate-900 rounded-xl shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-xl font-bold text-slate-100">Choose Your Focus</h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-800 transition-colors">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {categories.map((category) => {
              const isSelected = selected === category.name
              return (
                <button
                  key={category.name}
                  onClick={() => handleSelect(category.name)}
                  className={`
                    p-6 rounded-lg bg-slate-800 border-2 transition-all duration-150 ease-out
                    flex flex-col items-center justify-center gap-2 cursor-pointer
                    ${
                      isSelected
                        ? "border-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.3)]"
                        : "border-slate-700 hover:border-teal-300 hover:scale-105"
                    }
                  `}
                >
                  <span className="text-3xl">{category.emoji}</span>
                  <span className="text-slate-100 font-semibold text-sm text-center">{category.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 p-4 border-t border-slate-700 bg-slate-900">
          <button
            onClick={handleStart}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold 
              hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-150"
          >
            Start 30-Day Plan
          </button>
        </div>
      </div>
    </div>
  )
}
