/**
 * Design Philosophy: Long-form Conversion Funnel
 * - Multi-section layout with progressive disclosure
 * - Black and white base with blue CTAs
 * - Detailed copy addressing objections and building trust
 * - Multiple conversion points throughout
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/hero-funnel-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) brightness(0.4)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-0" />
        
        <div className="relative z-10 container max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Be Right.
            <br />
            Get Paid.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Trade on your knowledge of the world. Elections, markets, sports—turn your predictions into profit.
          </p>
          
          <div className="mb-10">
            <div className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-xl mb-3">
              Welcome Offer: $10 Bonus
            </div>
            <p className="text-sm text-gray-400">When you trade $10+</p>
          </div>

          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-16 py-8 rounded-full transition-all duration-300 hover:scale-105 mb-12"
            onClick={() => window.location.href = 'https://polymarket.com'}
          >
            Start Trading Now
          </Button>

          <div className="flex justify-center gap-4 items-center flex-wrap">
            <a 
              href="https://play.google.com/store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-14"
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
                className="h-14"
              />
            </a>
          </div>
        </div>
      </section>

      {/* What Is This Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            What Is Sideline Score?
          </h2>
          <div className="text-lg md:text-xl text-gray-300 space-y-6 leading-relaxed">
            <p>
              <strong className="text-white">Sideline Score</strong> is a U.S.-regulated prediction market where real-world events become tradable. Think of it as a marketplace for opinions—where being right pays off.
            </p>
            <p>
              Elections, inflation rates, interest rates, sports outcomes, and more. If it's happening in the world, you can trade on it. Buy shares in the outcome you believe will happen. If you're right, you profit. If you're wrong, you learn.
            </p>
            <p className="text-white font-semibold">
              It's not gambling. It's informed prediction backed by real money.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-950">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How It Works
          </h2>
          
          <div className="mb-16">
            <img 
              src="/images/how-it-works-visual.png" 
              alt="How it works" 
              className="w-full max-w-4xl mx-auto rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 p-8">
              <div className="text-blue-500 text-5xl font-bold mb-4">1</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Pick Your Market</h3>
              <p className="text-gray-300">
                Browse markets on elections, economics, sports, and more. Choose an event you have knowledge or insight about.
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-8">
              <div className="text-blue-500 text-5xl font-bold mb-4">2</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Buy Shares</h3>
              <p className="text-gray-300">
                Purchase shares in the outcome you believe will happen. Shares are priced based on probability. Lower probability = higher potential return.
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-8">
              <div className="text-blue-500 text-5xl font-bold mb-4">3</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Cash Out</h3>
              <p className="text-gray-300">
                When the event resolves, winning shares pay $1 each. Sell early to lock in profits or cut losses. Withdraw anytime.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-20 bg-black">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            What Can You Trade?
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Hundreds of markets across politics, economics, sports, crypto, and culture. If it's newsworthy, it's tradable.
          </p>

          <div className="mb-12">
            <img 
              src="/images/markets-grid-bg.png" 
              alt="Market categories" 
              className="w-full rounded-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-xl font-bold mb-2">Elections & Politics</h4>
                <p className="text-gray-400">Presidential races, congressional outcomes, policy decisions</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-xl font-bold mb-2">Economics & Finance</h4>
                <p className="text-gray-400">Inflation rates, interest rate decisions, GDP forecasts</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-xl font-bold mb-2">Sports & Entertainment</h4>
                <p className="text-gray-400">Championship winners, MVP predictions, box office results</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-xl font-bold mb-2">Crypto & Tech</h4>
                <p className="text-gray-400">Bitcoin price targets, tech company milestones, product launches</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trade Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Trade Predictions?
          </h2>

          <div className="space-y-8">
            <Card className="bg-gray-900 border-gray-800 p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Put Your Knowledge to Work</h3>
              <p className="text-gray-300 text-lg">
                You already follow the news. You already have opinions. Now you can profit from being right. Turn your insights into income.
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">U.S.-Regulated & Transparent</h3>
              <p className="text-gray-300 text-lg">
                Sideline Score operates under U.S. regulatory oversight. All markets are transparent, with real-time pricing based on collective predictions.
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Instant Liquidity</h3>
              <p className="text-gray-300 text-lg">
                Buy and sell shares anytime. Lock in profits early or exit positions that aren't working. Withdraw funds whenever you want.
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Learn & Earn</h3>
              <p className="text-gray-300 text-lg">
                Even when you're wrong, you learn. Prediction markets force you to think critically, weigh evidence, and refine your worldview—all while having skin in the game.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-black">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Start Winning?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Get $10 bonus when you trade $10 or more. Join thousands of traders putting their knowledge to work.
          </p>

          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-16 py-8 rounded-full transition-all duration-300 hover:scale-105 mb-12"
            onClick={() => window.location.href = 'https://polymarket.com'}
          >
            Claim Your $10 Bonus
          </Button>

          <div className="flex justify-center gap-4 items-center flex-wrap mb-12">
            <a 
              href="https://play.google.com/store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-14"
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
                className="h-14"
              />
            </a>
          </div>

          <div className="flex justify-center gap-8 text-sm text-gray-500 mb-8">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Trading involves risk and may not be appropriate for all. Members risk losing their cost to enter any transaction, including fees. You should carefully consider whether trading is appropriate for you in light of your investment experience and financial resources. Any trading decisions you make are solely your responsibility and at your own risk. Information is provided for convenience only on an "AS IS" basis. Past performance is not necessarily indicative of future results. Sideline Score is an information markets platform. Not available in all jurisdictions. Please check your local regulations.
          </p>
        </div>
      </section>
    </div>
  );
}
