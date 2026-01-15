/**
 * V3: "Insider Secret" Angle
 * Psychological triggers: Conspiracy, exclusive access, forbidden knowledge
 * Image strategy: Minimal images, focus on text urgency
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import VersionSwitcher from "@/components/VersionSwitcher";

export default function V3() {
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
          Wall Street Doesn't Want You To Know About This. Here's Why.
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          There's a legal loophole that lets regular people profit from the same information Wall Street uses. And they're not happy about it.
        </p>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            You know how sharp bettors make millions predicting sports outcomes? They have access to prediction markets. Places where you can literally buy and sell the outcome of sporting events.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            For years, this was only available to institutional investors. Big money. Connected people. But a regulatory change opened it up to everyone. And now? Regular people are making serious money.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>The platform is called Polymarket.</strong> It's U.S. regulated. Completely legal. And it's the same type of market that sharp sports bettors have been using for years.
          </p>
        </div>

        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why They Don't Want You To Know</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            When regular sports fans have access to the same tools as sharp bettors, the edge disappears. The information advantage that made pros millions? Gone.
          </p>
          <p className="text-gray-700 leading-relaxed">
            That's why you won't see this advertised on ESPN. That's why traditional sportsbooks don't want you to know about it. <strong>Because once everyone knows, the advantage is over.</strong>
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-10 text-center">
          <div className="mb-4">
            <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-lg">
              Get $10 Bonus When You Start
            </span>
          </div>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 py-6 rounded-full"
            onClick={() => window.location.href = 'https://polymarket.com'}
          >
            Get Access Before It's Too Late
          </Button>
          <p className="text-sm text-gray-600 mt-3">Limited time offer. No credit card required.</p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          How It Works (The Complete Process)
        </h2>

        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Sign Up (60 Seconds)</h3>
              <p className="text-gray-700">Create your account. No credit card required. Basic info and you're in.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Pick a Sports Outcome</h3>
              <p className="text-gray-700">Bucks vs Nuggets tonight? Buy shares of "Bucks win." Warriors to win the championship? Buy those shares. Each market is a specific outcome.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Buy Shares (Priced by Probability)</h3>
              <p className="text-gray-700">Bucks down at halftime? Shares drop to 35¢. Buy 100 shares for $35. They win? Each share pays $1. That's $100 total, $65 profit.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Watch Price Move in Real-Time</h3>
              <p className="text-gray-700">As the odds change, so does your position. Game momentum shifts? The price shifts. Your position goes up or down.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Cash Out Anytime</h3>
              <p className="text-gray-700"><strong>You're not locked in.</strong> Bucks take the lead? Price jumps to 70¢. Sell now for $35 profit. Or hold until final buzzer for the full $65 if they win. Your call.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-10">
          <p className="text-gray-800 leading-relaxed">
            <strong>The insider advantage:</strong> You can exit anytime. Traditional sportsbooks lock you in until the game ends. Prediction markets let you cash out when the odds shift in your favor.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Here's What You Can Trade On
        </h2>

        <div className="prose prose-lg max-w-none mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>NBA:</strong> Championship winners, MVP predictions, playoff outcomes, player props. The same markets sharp bettors use.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>NFL:</strong> Super Bowl winner, division champions, MVP races, player performance, game outcomes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>MLB:</strong> World Series winner, playoff matchups, MVP predictions, season records, individual stats.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Other Sports:</strong> NHL, soccer, tennis, golf, UFC. If it's a major sporting event, you can trade it.
          </p>
        </div>

        <div className="bg-gray-100 border-l-4 border-blue-600 p-6 mb-10">
          <p className="text-lg text-gray-800 italic">
            "I've been trading prediction markets for 3 years. Made more money than my day job. The crazy part? Most people still don't know this exists."
          </p>
          <p className="text-sm text-gray-600 mt-2">— Active trader, verified user</p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          How It Actually Works
        </h2>

        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Create Your Account</h3>
              <p className="text-gray-700">Sign up on Sideline Score in under 60 seconds. No credit card needed to start browsing markets.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Choose a Sports Event</h3>
              <p className="text-gray-700">"Will the Lakers win the NBA Championship?" "Will LeBron score 30+ points?" Pick any live sports market you have an opinion on.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Buy Shares at Current Price</h3>
              <p className="text-gray-700">Shares are priced by probability. 35¢ means 35% chance. Buy 100 shares for $35. If you're right, they pay $100. That's $65 profit.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Price Moves in Real-Time</h3>
              <p className="text-gray-700">As new information comes in, the price changes. Your position value goes up or down based on shifting probabilities.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Cash Out Anytime</h3>
              <p className="text-gray-700"><strong>You're not locked in.</strong> Price jumps to 70¢? Sell and lock in profit. Want to wait for $1? Hold until the event ends. Your choice.</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
          <p className="text-gray-800 leading-relaxed">
            <strong>The insider edge:</strong> You can exit before the event ends. Traditional betting locks you in. Prediction markets let you cash out when the odds shift in your favor.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Real People, Real Results
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          These are verified reviews from actual users.
        </p>

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

        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-8 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">The Window Is Closing</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Right now, most people don't know this exists. That's the edge. But every day, more people find out. More competition. Tighter spreads. Less opportunity.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>The people who got in early are up thousands.</strong> The people reading this today still have time. The people who wait? They'll wish they hadn't.
          </p>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-10 mb-10 text-center">
          <h3 className="text-3xl font-bold mb-4">Get In While You Still Can</h3>
          <p className="text-xl text-blue-100 mb-6">
            $10 bonus when you start. Takes 60 seconds to sign up. No credit card required.
          </p>
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-blue-600 font-bold text-xl px-16 py-8 rounded-full mb-6"
            onClick={() => window.location.href = 'https://polymarket.com'}
          >
            Start Trading Now
          </Button>
          <div className="text-sm text-blue-100 space-y-1">
            <p>✓ U.S. regulated and legal in all 50 states</p>
            <p>✓ Withdraw anytime, no lockup periods</p>
            <p>✓ Zero trading fees</p>
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
