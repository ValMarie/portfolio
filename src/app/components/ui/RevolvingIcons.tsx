"use client"

import { Heart, Star, Zap, Shield, Globe, Rocket, Diamond, Crown } from "lucide-react"

export default function Component() {
  const icons = [
    { Icon: Heart, color: "text-red-500" },
    { Icon: Star, color: "text-yellow-500" },
    { Icon: Zap, color: "text-blue-500" },
    { Icon: Shield, color: "text-green-500" },
    { Icon: Globe, color: "text-purple-500" },
    { Icon: Rocket, color: "text-orange-500" },
    { Icon: Diamond, color: "text-pink-500" },
    { Icon: Crown, color: "text-indigo-500" },
  ]

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="relative">
        {/* Central Circle */}
        <div className="w-32 h-32 bg-white rounded-full shadow-2xl border-4 border-slate-200 flex items-center justify-center z-10 relative">
          <div className="text-slate-600 font-semibold text-lg">Center</div>
        </div>

        {/* Revolving Icons Container */}
        <div className="absolute inset-0 animate-spin">
          {icons.map((item, index) => {
            const { Icon, color } = item
            const angle = (360 / icons.length) * index
            const radius = 120 // Distance from center

            return (
              <div
                key={index}
                className="absolute w-12 h-12 bg-white rounded-full shadow-lg border-2 border-slate-200 flex items-center justify-center"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                }}
              >
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
            )
          })}
        </div>

        {/* Orbit Path (Visual Guide) */}
        <div className="absolute inset-0 w-64 h-64 border border-dashed border-slate-300 rounded-full opacity-30 -translate-x-16 -translate-y-16"></div>
      </div>
    </div>
  )
}
