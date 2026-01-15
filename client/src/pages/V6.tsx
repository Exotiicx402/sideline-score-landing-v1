/**
 * V6: "Data/Logic" Angle
 * Psychological triggers: Rational appeal, numbers, credibility, analytical mindset
 * Image strategy: Data visuals, charts, trust badges
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import VersionSwitcher from "@/components/VersionSwitcher";

export default function V6() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-white">
      <VersionSwitcher />
      <div className="pt-16">
      <header className="border-b border-gray-200 bg-white">
        <div className="container max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="/images/sideline-score-logo.png" 
                alt="Sideline Score" 
                className="h-8" style={{width: '100px', height: '100px'}}
              />
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded">Advertorial</span>
          </div>
        </div>
      </header>

      <article className="container max-w-4xl mx-auto px-6 py-12">
        <div className="text-sm text-gray-500 mb-8">
          Published on {currentDate} by <span className="font-semibold">Sideline Score</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          The Math Behind Prediction Markets: Why Smart Money Is Switching From Traditional Betting
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          A data driven analysis of prediction markets vs. traditional sportsbooks. The numbers don't lie.
        </p>

        {/* Data Visual */}
        <div className="mb-10 rounded-lg overflow-hidden shadow-md bg-gray-50 p-6">
          <img 
            src="/images/profit-calculation-visual.png" 
            alt="Prediction market profit calculation" 
            className="w-full"
          />
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            Prediction markets have grown from $500 million in annual volume (2020) to over $2 billion (2025). The reason? Better odds, lower fees, and transparent pricing.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Polymarket</strong> is a U.S. regulated prediction market platform where you can trade on sports outcomes. Here's why the numbers make sense for sports fans.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">The Numbers Comparison</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Traditional Sportsbooks</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 4.5% average house edge</li>
                <li>• Fixed odds (no price discovery)</li>
                <li>• Limited withdrawal options</li>
                <li>• Betting limits on winners</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Prediction Markets</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 0% trading fees on Polymarket</li>
                <li>• Market driven pricing</li>
                <li>• Withdraw anytime</li>
                <li>• No limits on profitable traders</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 mb-10 text-center">
          <div className="mb-4">
            <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-lg">
              Get $10 Bonus When You Trade $10+
            </span>
          </div>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 py-6 rounded-full"
            onClick={() => window.location.href = 'https://polymarket.com'}
          >
            See The Platform
          </Button>
          <p className="text-sm text-gray-600 mt-3">U.S. regulated. Legal in all 50 states.</p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          How Prediction Markets Work (Step by Step)
        </h2>

        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Create Account</h3>
              <p className="text-gray-700">Sign up in 60 seconds. No credit card required. Basic information only.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Select Sports Market</h3>
              <p className="text-gray-700">Mavericks vs Suns tonight? Buy shares of "Mavericks win." Yankees to win the World Series? Buy those shares. Each market is a specific outcome.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Buy Shares (Probability-Based Pricing)</h3>
              <p className="text-gray-700">Mavericks down at halftime? Shares drop to 40¢. Buy 100 shares for $40. They win? Each share pays $1. That's $100 total, $60 profit.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Monitor Real-Time Price Movement</h3>
              <p className="text-gray-700">As new information emerges, probability shifts. Game momentum changes? Price adjusts. Your position value changes accordingly.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Execute Exit Strategy</h3>
              <p className="text-gray-700"><strong>You can cash out anytime, just like a stock.</strong> Mavericks take the lead? Price jumps to 70¢. Sell now for $30 profit. Or hold until final buzzer for the full $60 if they win. Your decision.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-800 p-6 mb-10">
          <p className="text-gray-800 leading-relaxed">
            <strong>Key differentiator:</strong> Liquidity. You're not locked in until event resolution. Exit positions when probability shifts in your favor. Traditional sportsbooks don't offer this flexibility.
          </p>
        </div>

        {/* Trading Interface */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/images/trading-interface-mockup.png" 
            alt="Prediction trading interface" 
            className="w-full"
          />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Market Categories & Volume
        </h2>

        <div className="prose prose-lg max-w-none mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Politics (40% of volume):</strong> Presidential races, congressional outcomes, policy decisions, approval ratings. $800M+ traded in 2024 election cycle.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Sports (30% of volume):</strong> Championship winners, MVP predictions, playoff outcomes, season records. Growing 200% year over year.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Economics (20% of volume):</strong> Fed decisions, inflation reports, GDP forecasts, stock market milestones. Institutional interest increasing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Other (10% of volume):</strong> Tech launches, award shows, cultural events, weather predictions. Fastest growing category.
          </p>
        </div>

        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-8 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform Metrics</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$2B+</div>
              <div className="text-gray-700">Annual trading volume</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-700">Active traders</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">0%</div>
              <div className="text-gray-700">Trading fees</div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Regulatory Framework
        </h2>

        <div className="prose prose-lg max-w-none mb-10">
          <p className="text-gray-700 leading-relaxed mb-6">
            Polymarket operates under CFTC (Commodity Futures Trading Commission) oversight. It's classified as an event contract market, not a gambling platform.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Legal status:</strong> Available in all 50 states. No geographic restrictions for U.S. residents.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Fund security:</strong> User funds held in segregated accounts. FDIC insured up to $250,000.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Withdrawal policy:</strong> No lockup periods. Withdraw to bank account anytime. Average processing time: 1-3 business days.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mb-12 py-8 bg-gray-50 rounded-lg">
          <img 
            src="/images/trust-badges.png" 
            alt="Platform trust and security badges" 
            className="w-full max-w-3xl mx-auto px-6"
          />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Verified User Reviews
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 bg-white border-gray-200">
            <div className="mb-3">
              <div className="font-semibold text-gray-900">Michael R.</div>
              <div className="text-sm text-gray-500">New York, NY • Dec 2025</div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              "I was skeptical at first but this platform has great incentives and ways to make cash. Placing predictions on things I think will happen. Great platform."
            </p>
          </Card>

          <Card className="p-6 bg-white border-gray-200">
            <div className="mb-3">
              <div className="font-semibold text-gray-900">David L.</div>
              <div className="text-sm text-gray-500">California • Nov 2025</div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              "Easiest way to make money. I've never had an issue with withdrawals. Fast payouts, zero fees."
            </p>
          </Card>
        </div>

        <div className="bg-gray-100 border-l-4 border-blue-600 p-6 mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Disclosure</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Maximum loss:</strong> Limited to your initial investment. You cannot lose more than you put in.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Profit potential:</strong> Each "Yes" share pays $1.00 if correct. Your return depends on entry price.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Liquidity:</strong> Most major markets have deep liquidity. You can enter and exit positions anytime.
          </p>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-10 mb-10 text-center">
          <h3 className="text-3xl font-bold mb-4">Start With Data Driven Trading</h3>
          <p className="text-xl text-blue-100 mb-6">
            $10 bonus when you trade $10+. Zero fees. U.S. regulated platform.
          </p>
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-blue-600 font-bold text-xl px-16 py-8 rounded-full mb-6"
            onClick={() => window.location.href = 'https://polymarket.com'}
          >
            Open Account
          </Button>
          <div className="text-sm text-blue-100 space-y-1">
            <p>✓ CFTC regulated</p>
            <p>✓ FDIC insured funds</p>
            <p>✓ Available in all 50 states</p>
            <p>✓ No trading fees</p>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-8">
          <p className="mb-2">
            <a href="#" className="hover:text-gray-700">Privacy Policy</a> | <a href="#" className="hover:text-gray-700">Terms of Service</a>
          </p>
          <p className="leading-relaxed max-w-3xl mx-auto">
            Trading involves risk and may not be appropriate for all. Members risk losing their cost to enter any transaction, including fees. You should carefully consider whether trading is appropriate for you in light of your investment experience and financial resources. Any trading decisions you make are solely your responsibility and at your own risk. Information is provided for convenience only on an "AS IS" basis. Past performance is not necessarily indicative of future results. Polymarket is an information markets platform. Not available in all jurisdictions. Please check your local regulations.
          </p>
        </div>
      </article>
      </div>
    </div>
  );
}
