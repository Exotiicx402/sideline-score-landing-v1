/**
 * Design Philosophy: Advertorial Blog Style
 * - White background, clean blog layout
 * - Article format with byline and date
 * - Conversational, story-driven copy
 * - Multiple CTAs embedded throughout
 * - Product screenshots and examples
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">
                <span className="text-blue-600">the</span>
                <span className="text-gray-900">market</span>
                <span className="text-blue-600">watch</span>
              </div>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded">Advertorial</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="container max-w-4xl mx-auto px-6 py-12">
        {/* Byline */}
        <div className="text-sm text-gray-500 mb-8">
          Published on {currentDate} by <span className="font-semibold">TheMarketWatch</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          This Legal Platform Lets You Win Money on Elections, Sports, and Markets—From Any State
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          You made $500 doing <em>what</em>? Here's how people are turning their opinions into cash—legally, in all 50 states.
        </p>

        {/* Opening Paragraphs */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            If you follow politics, sports, or markets, you probably have strong opinions about what's going to happen next. Who's winning the election. Which team takes the championship. Where interest rates are headed.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Most people just argue about it online. But there's a growing group of people who are putting real money behind their predictions—and winning.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            It's called <strong>prediction trading</strong>, and it's completely legal. A U.S.-regulated platform called <strong>Sideline Score</strong> lets you trade on real-world events like you'd trade stocks. Elections, inflation, sports outcomes—if it's happening, you can trade it.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-10 text-center">
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
            Start Trading — It's Free
          </Button>
        </div>

        {/* How It Works Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          How Does It Work?
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            It's surprisingly simple. You pick an event you have an opinion on—say, "Will inflation go up next month?" or "Will Team X win the championship?"—and you buy shares in the outcome you think will happen.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            If you're right, your shares pay out $1 each. If you're wrong, you lose what you paid. But here's the key: <strong>you can trade in and out anytime</strong>. See the momentum shifting? Cash out early. Think the market's wrong? Buy more.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            It's not gambling. It's trading on information, just like the stock market—except instead of company earnings, you're trading on real-world events you already follow.
          </p>
        </div>

        {/* Visual Example */}
        <div className="bg-gray-50 rounded-lg p-8 mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Real Example:</h3>
          <div className="space-y-4 text-gray-700">
            <p><strong>Market:</strong> "Will the Fed raise interest rates in March?"</p>
            <p><strong>Your prediction:</strong> Yes</p>
            <p><strong>Current price:</strong> 65¢ per share (meaning the market thinks there's a 65% chance)</p>
            <p><strong>You buy:</strong> 100 shares for $65</p>
            <p><strong>Outcome:</strong> The Fed raises rates</p>
            <p className="text-green-600 font-bold"><strong>Your payout:</strong> $100 (profit: $35)</p>
          </div>
        </div>

        {/* Why People Are Using This */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why This Is Blowing Up Right Now
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>1. It's actually legal.</strong> Sideline Score is U.S.-regulated and available in all 50 states. It's not a sportsbook, not a loophole. It's a federally approved prediction market.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>2. You're not betting against the house.</strong> The platform doesn't take the other side of your trade. They just run the marketplace. Other users are on the other side, which means the prices reflect real collective intelligence—not casino odds.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>3. You can trade on anything.</strong> Elections, economics, sports, pop culture, even the weather. If you follow it, you can trade it.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>4. Instant liquidity.</strong> You're not locked in until the event resolves. Trade in and out whenever you want. Cash out early if you change your mind.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="bg-gray-900 text-white rounded-lg p-8 mb-10 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Put Your Knowledge to Work?</h3>
          <p className="text-gray-300 mb-6">Join thousands of traders who are already winning.</p>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 py-6 rounded-full"
            onClick={() => window.location.href = 'https://polymarket.com'}
          >
            Get Started Now — It's Free
          </Button>
        </div>

        {/* What You Can Trade */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What Can You Trade On?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <Card className="p-6 border-gray-200">
            <h4 className="text-xl font-bold mb-3 text-gray-900">📊 Politics & Elections</h4>
            <p className="text-gray-600">Presidential races, congressional outcomes, policy decisions, approval ratings</p>
          </Card>

          <Card className="p-6 border-gray-200">
            <h4 className="text-xl font-bold mb-3 text-gray-900">💰 Economics & Markets</h4>
            <p className="text-gray-600">Inflation rates, Fed decisions, GDP forecasts, stock market milestones</p>
          </Card>

          <Card className="p-6 border-gray-200">
            <h4 className="text-xl font-bold mb-3 text-gray-900">🏆 Sports</h4>
            <p className="text-gray-600">Championship winners, MVP predictions, playoff outcomes, season records</p>
          </Card>

          <Card className="p-6 border-gray-200">
            <h4 className="text-xl font-bold mb-3 text-gray-900">🌐 Pop Culture & More</h4>
            <p className="text-gray-600">Box office results, award shows, tech launches, even weather events</p>
          </Card>
        </div>

        {/* The Part People Ask About */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          The Part Everyone Asks About
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Is this legal?</strong> Yes. Sideline Score is federally regulated and operates in all 50 states. It's not a sportsbook and not a workaround. It's a licensed prediction market platform.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>How do I get my money out?</strong> Anytime you want. Withdraw to your bank account whenever. No lockup periods, no waiting for events to resolve if you want to exit early.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>What if I'm wrong?</strong> You lose what you paid for the shares. But that's why you can trade out early—cut your losses or lock in profits before the event resolves.
          </p>
        </div>

        {/* Final CTA */}
        <div className="bg-blue-600 text-white rounded-lg p-10 mb-10 text-center">
          <h3 className="text-3xl font-bold mb-4">Start Winning Today</h3>
          <p className="text-xl text-blue-100 mb-6">
            Get $10 bonus when you trade $10 or more. Sign up in under a minute.
          </p>
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-blue-600 font-bold text-xl px-16 py-8 rounded-full mb-6"
            onClick={() => window.location.href = 'https://polymarket.com'}
          >
            Claim Your $10 Bonus
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

        {/* Footer */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex justify-center gap-8 text-sm text-gray-500 mb-6">
            <a href="#" className="hover:text-gray-700">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-700">Terms of Service</a>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed text-center max-w-3xl mx-auto">
            Trading involves risk and may not be appropriate for all. Members risk losing their cost to enter any transaction, including fees. You should carefully consider whether trading is appropriate for you in light of your investment experience and financial resources. Any trading decisions you make are solely your responsibility and at your own risk. Information is provided for convenience only on an "AS IS" basis. Past performance is not necessarily indicative of future results. Sideline Score is an information markets platform. Not available in all jurisdictions. Please check your local regulations.
          </p>
          <p className="text-xs text-gray-400 text-center mt-4">
            Copyright © {new Date().getFullYear()} TheMarketWatch
          </p>
        </div>
      </article>
    </div>
  );
}
