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
      <div className="w-full md:w-[500px] md:bg-[#1E293B]/50 md:backdrop-blur-sm md:rounded-2xl md:border md:border-[#2DA8A8]/20 md:p-8 flex flex-col gap-6">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Logo */}
          <h1 className="text-[28px] font-bold text-white">
            <span className="mr-2">🎬</span>FYPFixer
          </h1>

          {/* Main Tagline - animated */}
          <p
            className="text-[18px] md:text-[20px] font-bold text-[#FF6B35] tracking-[1px] animate-in fade-in zoom-in-[1.02] duration-[600ms] delay-200"
            style={{ textShadow: "0 0 20px rgba(255,107,53,0.3)" }}
          >
            Own Your FYP
          </p>

          <p className="text-[14px] text-white">
            Take control of your TikTok algorithm. Create personalized content strategy plans.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[rgba(32,136,136,0.08)] border border-[#2DA8A8]/30 text-center animate-in fade-in duration-300 delay-500">
          <p className="text-[13px] text-[#94A3B8]">
            <span className="text-[#2DA8A8] font-medium">🔒 Secure Sign-In</span>
            <br />
            We use official OAuth from TikTok, Google, and Apple.
            <br />
            Your login credentials are never stored on our servers.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col gap-4">
          {/* Primary TikTok Button */}
          <button
            onClick={() => handleOAuthClick("tiktok")}
            disabled={isLoading !== null}
            className="w-full h-[56px] rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#E65100] text-white text-[16px] font-bold 
              transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,107,53,0.4)]
              focus:outline-2 focus:outline-[#2DA8A8] focus:outline-offset-2
              disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
              animate-in fade-in duration-300 delay-700"
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
            <button
              onClick={() => handleOAuthClick("google")}
              disabled={isLoading !== null}
              className="flex-1 h-[56px] rounded-lg bg-[#4285F4]/10 border border-[#4285F4]/50 text-[#4285F4] text-[14px] font-bold
                transition-all duration-200 hover:bg-[#4285F4]/20
                focus:outline-2 focus:outline-[#2DA8A8] focus:outline-offset-2
                disabled:opacity-70 disabled:cursor-not-allowed
                animate-in fade-in duration-300 delay-[800ms]"
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
                <>Google</>
              )}
            </button>

            <button
              onClick={() => handleOAuthClick("apple")}
              disabled={isLoading !== null}
              className="flex-1 h-[56px] rounded-lg bg-[#A2AAAD]/10 border border-[#A2AAAD]/50 text-[#A2AAAD] text-[14px] font-bold
                transition-all duration-200 hover:bg-[#A2AAAD]/20
                focus:outline-2 focus:outline-[#2DA8A8] focus:outline-offset-2
                disabled:opacity-70 disabled:cursor-not-allowed
                animate-in fade-in duration-300 delay-[900ms]"
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
                <>Apple</>
              )}
            </button>
          </div>
        </div>

        <div
          role="contentinfo"
          className="p-4 rounded-lg bg-[rgba(32,136,136,0.08)] border border-[#2DA8A8]/30 
            animate-in fade-in duration-[400ms] delay-[1000ms]"
        >
          <p className="text-[12px] text-[#94A3B8] leading-relaxed mb-3">
            <span className="font-semibold text-[#F8FAFC]">⚠️ Important Disclaimer & Legal Notice</span>
          </p>

          <p className="text-[12px] text-[#94A3B8] leading-relaxed mb-2">
            <span className="font-medium text-[#F8FAFC]">FYPFixer is NOT:</span>
          </p>
          <ul className="text-[12px] text-[#94A3B8] leading-relaxed mb-3 list-disc list-inside pl-1">
            <li>Affiliated with TikTok, Inc., Google, or Apple</li>
            <li>Endorsed by or partnered with any of the above</li>
            <li>Capable of automating, hacking, or manipulating the TikTok algorithm</li>
            <li>Able to guarantee any specific outcomes or account growth</li>
          </ul>

          <p className="text-[12px] text-[#94A3B8] leading-relaxed mb-2">
            <span className="font-medium text-[#F8FAFC]">What FYPFixer DOES:</span>
          </p>
          <ul className="text-[12px] text-[#94A3B8] leading-relaxed mb-3 list-disc list-inside pl-1">
            <li>Help you create step-by-step action plans for your TikTok strategy</li>
            <li>Organize personalized growth recommendations</li>
          </ul>

          <p className="text-[12px] text-[#94A3B8] leading-relaxed mb-2">
            <span className="font-medium text-[#F8FAFC]">What YOU Must Do:</span>
          </p>
          <ul className="text-[12px] text-[#94A3B8] leading-relaxed mb-3 list-disc list-inside pl-1">
            <li>Execute all TikTok actions manually and personally</li>
            <li>Take full responsibility for your account and all actions</li>
            <li>Comply with TikTok&apos;s Terms of Service and Community Guidelines</li>
            <li>Not use automated tools, bots, or third-party integrations that violate TikTok&apos;s policies</li>
          </ul>

          <p className="text-[12px] text-[#94A3B8] leading-relaxed mb-2">
            <span className="font-medium text-[#F8FAFC]">Your Data & Security:</span>
          </p>
          <ul className="text-[12px] text-[#94A3B8] leading-relaxed mb-3 list-disc list-inside pl-1">
            <li>We use official OAuth (TikTok Sign-In, Google, Apple) — no passwords stored</li>
            <li>Your TikTok credentials are managed directly by TikTok, not FYPFixer</li>
            <li>We never automate posts, likes, follows, or other TikTok actions on your behalf</li>
          </ul>

          <p className="text-[12px] text-[#94A3B8] leading-relaxed">
            By signing in, you agree to our{" "}
            <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2DA8A8] hover:underline focus:outline-2 focus:outline-[#2DA8A8] focus:outline-offset-2 rounded"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2DA8A8] hover:underline focus:outline-2 focus:outline-[#2DA8A8] focus:outline-offset-2 rounded"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="text-center animate-in fade-in duration-300 delay-[1100ms]">
          <p className="text-[12px] text-[#94A3B8] mb-1">📋 Legal & Support</p>
          <div className="flex items-center justify-center gap-2 text-[12px] flex-wrap">
            <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2DA8A8] hover:underline focus:outline-2 focus:outline-[#2DA8A8] focus:outline-offset-2 rounded"
            >
              Terms of Service
            </a>
            <span className="text-[#94A3B8]">•</span>
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2DA8A8] hover:underline focus:outline-2 focus:outline-[#2DA8A8] focus:outline-offset-2 rounded"
            >
              Privacy Policy
            </a>
            <span className="text-[#94A3B8]">•</span>
            <a
              href="/support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2DA8A8] hover:underline focus:outline-2 focus:outline-[#2DA8A8] focus:outline-offset-2 rounded"
            >
              Contact Support
            </a>
          </div>
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
