/**
 * Design Philosophy: Financial Tech Noir
 * - Dark, sophisticated aesthetic with emerald green CTAs
 * - Full-screen immersive experience with layered depth
 * - Market chart graphics as decorative elements
 * - Space Grotesk for headlines, Inter for body
 */

import { Button } from "@/components/ui/button";

export default function OneShot() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/one-shot-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="max-w-2xl">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Sideline Score
            </h1>
          </div>

          {/* Headline */}
          <div className="mb-8">
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
              Be Right.
              <br />
              <span className="text-[#10b981]">Get Paid.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Trade on your knowledge of the world.
            </p>
          </div>

          {/* Welcome Offer Badge */}
          <div className="mb-8 inline-block">
            <div className="bg-[#f59e0b] text-[#0a0a0a] px-6 py-2 rounded-full font-bold text-lg">
              Welcome Offer: $10 Bonus
            </div>
            <p className="text-sm text-gray-400 mt-2">When you trade $10+</p>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
            A U.S.-regulated market where real-world events become tradable—elections, 
            inflation, interest rates. Be right about what happens next. Get paid.
          </p>

          {/* CTA Button with Glow Effect */}
          <div className="mb-8">
            <Button 
              size="lg"
              className="bg-[#10b981] hover:bg-[#059669] text-white font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = 'https://polymarket.com'}
            >
              Trade Now
            </Button>
          </div>

          {/* App Store Badges */}
          <div className="flex gap-4 items-center">
            <a 
              href="https://play.google.com/store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-12"
              />
            </a>
            <a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on the App Store" 
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Legal Text */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-[#0a0a0a] to-transparent py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-center gap-6 mb-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
          <p className="text-xs text-gray-600 text-center leading-relaxed max-w-4xl mx-auto">
            Trading involves risk and may not be appropriate for all. Members risk losing their cost to enter any transaction, 
            including fees. You should carefully consider whether trading is appropriate for you in light of your investment 
            experience and financial resources. Any trading decisions you make are solely your responsibility and at your own risk. 
            Information is provided for convenience only on an "AS IS" basis. Past performance is not necessarily indicative of 
            future results. Sideline Score is an information markets platform. Not available in all jurisdictions. Please check 
            your local regulations.
          </p>
        </div>
      </div>
    </div>
  );
}
