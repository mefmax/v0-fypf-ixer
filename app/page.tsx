"use client"

import { useState } from "react"
import { CategoryPickerModal } from "@/components/category-picker-modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      {selectedCategory ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-100 mb-4">Your 30-Day {selectedCategory} Plan is Ready! 🎯</h1>
          <button
            onClick={() => {
              setSelectedCategory(null)
              setIsModalOpen(true)
            }}
            className="px-6 py-2 rounded-lg bg-slate-800 text-slate-100 hover:bg-slate-700 transition-colors"
          >
            Choose Another Category
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:scale-105 transition-transform"
        >
          Choose Your Focus
        </button>
      )}

      <CategoryPickerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={(category) => setSelectedCategory(category)}
      />
    </main>
  )
}
