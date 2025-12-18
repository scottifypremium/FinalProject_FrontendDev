"use client"

export default function CategoryFilter({ categories, selected, onSelect }) {
  const categoryLabels = {
    all: "All Products",
    microphones: "Microphones",
    speakers: "Speakers",
    amplifiers: "Amplifiers",
    cds: "CDs",
    karaoke: "Karaoke"
  }

  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`block w-full text-left px-4 py-2 rounded-lg transition-colors font-medium ${
            selected === category ?"bg-amber-500 text-slate-900" : "bg-slate-800 text-white hover:bg-slate-700"
          }`}
        >
          {categoryLabels[category]}
        </button>
      ))}
    </div>
  )
}
