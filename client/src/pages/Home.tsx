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
import { Star } from "lucide-react";
import VersionSwitcher from "@/components/VersionSwitcher";

export default function Home() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-white">
      <VersionSwitcher />
      <div className="pt-16">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">
                <span className="text-blue-600">Sideline</span>
                <span className="text-gray-900"> Score</span>
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
          Published on {currentDate} by <span className="font-semibold">Sideline Score</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          This Legal Platform Lets You Win Money on Sports From Any State
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          You made $500 doing <em>what</em>? Here's how sports fans are turning their predictions into cash. Legally, in all 50 states.
        </p>

        {/* Hero Image - Trading Interface */}
        <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/images/trading-interface-mockup.png" 
            alt="Prediction trading app interface" 
            className="w-full"
          />
        </div>

        {/* Opening Paragraphs */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            If you follow sports, you probably have strong opinions about what's going to happen next. Which team takes the championship. Who wins MVP. Which player hits the over.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Most people just argue about it online. But there's a growing group of people who are putting real money behind their predictions and winning.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            It's called <strong>sports prediction trading</strong>, and it's completely legal. A U.S.-regulated platform called <strong>Sideline Score</strong> lets you trade on sports outcomes. Championships, MVP races, playoff results. If it's happening in sports, you can trade it.
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
            Start Trading. It's Free
          </Button>
        </div>

        {/* How It Works Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          How Does It Work?
        </h2>

        {/* Profit Calculation Visual */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-md bg-gray-50 p-6">
          <img 
            src="/images/profit-calculation-visual.png" 
            alt="How prediction market profits work" 
            className="w-full"
          />
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Sign Up (Takes 60 Seconds)</h3>
              <p className="text-gray-700">Create your account on Sideline Score. No credit card required to start. Just basic info and you're in.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Pick a Sports Outcome</h3>
              <p className="text-gray-700">Browse live markets. "Will the Lakers win the championship?" "Will LeBron score over 25 points?" Pick what you have an opinion on.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Buy Shares at Current Price</h3>
              <p className="text-gray-700">Shares are priced based on probability. If the market shows 35¢, that means 35% chance. Buy 100 shares for $35. If you're right, they pay $100.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Watch the Price Move in Real-Time</h3>
              <p className="text-gray-700">As the game progresses or news breaks, the price changes. Your position goes up or down based on how the odds shift.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Cash Out Anytime (Or Wait)</h3>
              <p className="text-gray-700"><strong>You're not locked in.</strong> See the price jump to 80¢? Sell now and lock in profit. Want to wait for the full $1? Hold until the event ends. Your choice.</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            <strong>Key difference from traditional betting:</strong> You can exit your position anytime. The price moves based on probability. It's not gambling, it's trading on information. Cash out when you want, whether you're up or down.
          </p>
        </div>

        {/* Visual Example */}
        <div className="bg-gray-50 rounded-lg p-8 mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Real Example:</h3>
          <div className="space-y-4 text-gray-700">
            <p><strong>Market:</strong> "Will the Lakers win the NBA Championship?"</p>
            <p><strong>Your prediction:</strong> Yes</p>
            <p><strong>Current price:</strong> 35¢ per share (meaning the market thinks there's a 35% chance)</p>
            <p><strong>You buy:</strong> 100 shares for $35</p>
            <p><strong>Outcome:</strong> Lakers win the championship</p>
            <p className="text-green-600 font-bold"><strong>Your payout:</strong> $100 (profit: $65)</p>
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
            <strong>2. You're not betting against the house.</strong> The platform doesn't take the other side of your trade. They just run the marketplace. Other users are on the other side, which means the prices reflect real collective intelligence, not casino odds.
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
            Get Started Now. It's Free
          </Button>
        </div>

        {/* Success Image */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/images/person-winning-phone.png" 
            alt="Person celebrating trading win" 
            className="w-full"
          />
        </div>

        {/* Testimonials Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          What People Are Saying
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Thousands of people are already using prediction markets to put their knowledge to work.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Card className="p-6 border-gray-200 bg-white">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                  H
                </div>
              </div>
              <div>
                <div className="font-bold text-gray-900">Highroller</div>
                <div className="text-sm text-gray-500">Ireland • Jan 2026</div>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              "Best place for online gambling. 100% safe and fast transfers. In terms of trustworthiness and having money secure and paid out this is the best. Also they have 0% commission, prices are the best in the world!"
            </p>
          </Card>

          <Card className="p-6 border-gray-200 bg-white">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                  D
                </div>
              </div>
              <div>
                <div className="font-bold text-gray-900">David</div>
                <div className="text-sm text-gray-500">Peru • Nov 2024</div>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              "It's so far the best prediction market I have used. The 0% fees to trade make it the best betting site I have used from around 30 different sites including Betfair, Bet365, Pinnacle. 10/10"
            </p>
          </Card>

          <Card className="p-6 border-gray-200 bg-white">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                  R
                </div>
              </div>
              <div>
                <div className="font-bold text-gray-900">Richard</div>
                <div className="text-sm text-gray-500">Canada • Jul 2024</div>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              "I use it to supplement my income, it provides great incentives and ways to make cash. Placing predictions on things I think will happen. Great platform."
            </p>
          </Card>

          <Card className="p-6 border-gray-200 bg-white">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                  E
                </div>
              </div>
              <div>
                <div className="font-bold text-gray-900">Euan</div>
                <div className="text-sm text-gray-500">Australia • Jan 2025</div>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              "There's literally nothing untrustworthy with this site. I enjoy using this site and it has rewarded me very well!"
            </p>
          </Card>
        </div>

        {/* What Can You Trade Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What Can You Trade On?
        </h2>

        {/* Market Categories Visual */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-md">
          <img 
            src="/images/market-categories-visual.png" 
            alt="Prediction market categories" 
            className="w-full"
          />
        </div>

        <div className="prose prose-lg max-w-none mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>NBA:</strong> Championship winners, MVP predictions, playoff outcomes, player prop bets, season win totals
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>NFL:</strong> Super Bowl winner, division champions, MVP races, player performance props, game outcomes
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>MLB:</strong> World Series winner, playoff matchups, MVP predictions, season records, individual stats
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Other Sports:</strong> NHL, soccer, tennis, golf, UFC, and more. If it's a major sporting event, you can trade it.
          </p>
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
            <strong>What if I'm wrong?</strong> You lose what you paid for the shares. But that's why you can trade out early. Cut your losses or lock in profits before the event resolves.
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
            Copyright © {new Date().getFullYear()} Sideline Score
          </p>
        </div>
      </article>
      </div>
    </div>
  );
}
