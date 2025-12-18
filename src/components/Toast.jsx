"use client"

import { useEffect, useState } from "react"

export default function Toast({ message, isVisible, onClose }) {
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    if (isVisible) {
      setProgress(100)
      const duration = 3000 // 3 seconds
      const interval = 50 // Update every 50ms
      const decrement = (100 / duration) * interval

      const progressTimer = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev - decrement
          return newProgress <= 0 ? 0 : newProgress
        })
      }, interval)

      const dismissTimer = setTimeout(() => {
        onClose()
      }, duration)

      return () => {
        clearTimeout(dismissTimer)
        clearInterval(progressTimer)
      }
    } else {
      setProgress(100)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed top-20 right-4 z-50 animate-slide-in-right">
      <div className="bg-amber-500 text-slate-900 px-6 py-4 rounded-lg shadow-xl shadow-amber-500/30 flex items-center gap-3 min-w-[300px] max-w-md relative overflow-hidden">
        {/* Progress bar */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-slate-900/20 transition-all ease-linear"
          style={{ width: `${progress}%` }}
        />
        
        <div className="flex-shrink-0">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="font-semibold flex-1">{message}</p>
        <button
          onClick={onClose}
          className="flex-shrink-0 text-slate-900 hover:text-slate-700 transition-smooth hover:scale-110 active:scale-95"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

