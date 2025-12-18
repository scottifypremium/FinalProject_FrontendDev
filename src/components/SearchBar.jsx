"use client"

export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search products..."
        value={value || ""}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-smooth focus:scale-[1.02]"
      />
    </div>
  )
}
