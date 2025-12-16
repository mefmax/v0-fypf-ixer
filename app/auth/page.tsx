"use client"

import { useState } from "react"

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState<string | null>(null)

  const handleOAuthClick = (provider: string) => {
    setIsLoading(provider)
    // Simulate OAuth redirect - replace with actual OAuth logic
    setTimeout(() => setIsLoading(null), 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      {/* Auth Card */}
      <div className="w-full md:w-[420px] md:bg-[#1E293B]/50 md:backdrop-blur-sm md:rounded-2xl md:border md:border-[#2DA8A8]/20 md:p-8 flex flex-col gap-6">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Logo */}
          <h1 className="text-[28px] font-bold text-white">
            <span className="mr-2">🎬</span>FYPFixer
          </h1>

          {/* Main Tagline - animated */}
          <p
            className="text-[20px] md:text-[20px] text-[18px] font-bold text-[#FF6B35] tracking-[1px] animate-in fade-in zoom-in-[1.02] duration-[600ms] delay-200"
            style={{ textShadow: "0 0 20px rgba(255,107,53,0.3)" }}
          >
            ✨ Own Your FYP ✨
          </p>

          {/* Subheading */}
          <p className="text-[14px] text-white">
            Take control of your TikTok algorithm. Create personalized growth plans.
          </p>

          {/* Social Proof */}
          <p className="text-[13px] italic text-[#94A3B8]">Join 50K+ growers retraining their feed</p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col gap-4">
          {/* Primary TikTok Button - animated */}
          <button
            onClick={() => handleOAuthClick("tiktok")}
            disabled={isLoading !== null}
            className="w-full h-[56px] rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#E65100] text-white text-[16px] font-bold 
              transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,107,53,0.4)]
              focus:outline-2 focus:outline-[#2DA8A8] focus:outline-offset-2
              disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
              animate-in fade-in duration-300 delay-1000"
          >
            {isLoading === "tiktok" ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Connecting...
              </span>
            ) : (
              "🎵 Sign in with TikTok"
            )}
          </button>

          {/* Secondary Buttons Row */}
          <div className="flex flex-col md:flex-row gap-3">
            {/* Google Button */}
            <button
              onClick={() => handleOAuthClick("google")}
              disabled={isLoading !== null}
              className="flex-1 h-[56px] rounded-lg bg-[#2DA8A8]/10 border border-[#2DA8A8] text-[#2DA8A8] text-[14px] font-bold
                transition-all duration-200 hover:bg-[#2DA8A8]/20
                focus:outline-2 focus:outline-[#2DA8A8] focus:outline-offset-2
                disabled:opacity-70 disabled:cursor-not-allowed
                animate-in fade-in duration-300 delay-[1100ms]"
            >
              {isLoading === "google" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </span>
              ) : (
                <>Google 🔵</>
              )}
            </button>

            {/* Apple Button */}
            <button
              onClick={() => handleOAuthClick("apple")}
              disabled={isLoading !== null}
              className="flex-1 h-[56px] rounded-lg bg-[#2DA8A8]/10 border border-[#2DA8A8] text-[#2DA8A8] text-[14px] font-bold
                transition-all duration-200 hover:bg-[#2DA8A8]/20
                focus:outline-2 focus:outline-[#2DA8A8] focus:outline-offset-2
                disabled:opacity-70 disabled:cursor-not-allowed
                animate-in fade-in duration-300 delay-[1200ms]"
            >
              {isLoading === "apple" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </span>
              ) : (
                <>Apple 🍎</>
              )}
            </button>
          </div>
        </div>

        {/* Legal Disclaimer - animated */}
        <div
          role="contentinfo"
          className="p-4 rounded-lg bg-[rgba(32,136,136,0.08)] border border-[#2DA8A8]/30 
            animate-in fade-in duration-[400ms] delay-[1400ms]"
        >
          <p className="text-[12px] text-[#94A3B8] italic leading-relaxed">
            ⚖️ <span className="font-medium">Disclaimer:</span> FYPFixer is a planning tool. We help you create
            step-by-step action plans to retrain your TikTok algorithm. All actions on TikTok are performed by you
            personally. We do not automate, execute, or perform any TikTok actions on your behalf. You are fully
            responsible for your account and all actions taken. Use responsibly and follow TikTok&apos;s Terms of
            Service.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-[12px] text-[#94A3B8]">
            Already have an account?{" "}
            <button className="text-[#FF6B35] hover:underline focus:outline-2 focus:outline-[#2DA8A8] focus:outline-offset-2 rounded">
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
