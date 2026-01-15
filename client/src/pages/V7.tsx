/**
 * V7: "Highest Converting" (My Best Prediction)
 * Psychological triggers: Loss aversion + Scarcity + Social proof + Ego + Authority
 * Strategy: Combines the most powerful elements from behavioral economics
 * Image strategy: Strategic placement for maximum impact
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import VersionSwitcher from "@/components/VersionSwitcher";

export default function V7() {
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
          You Called The Election. You Predicted The Super Bowl Winner. You Made $0. They Made Thousands.
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          50,000+ people are turning their predictions into profit. While you're still just talking about it. Here's what they know.
        </p>

        <div className="bg-red-50 border-2 border-red-400 rounded-lg p-8 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">The Uncomfortable Truth</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            You've been right about sports outcomes dozens of times. You called the championship winner. You knew which team would win. You predicted the MVP before anyone else.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>And you made exactly $0 from being right.</strong> Meanwhile, thousands of people who knew the same information you did? They're cashing out hundreds, sometimes thousands of dollars.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/images/person-winning-phone.png" 
            alt="Person celebrating trading win" 
            className="w-full"
          />
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            There's a U.S. regulated platform called <strong>Polymarket</strong> where you can win money on sports outcomes. It's completely legal. Zero fees. Available in all 50 states.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Over 50,000 people are using it right now.</strong> Your friends might already be on it. They're just not telling you because the edge disappears when everyone knows.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-10 text-center">
          <div className="mb-4">
            <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-lg">
              Limited Time: Get $10 Bonus When You Start
            </span>
          </div>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 py-6 rounded-full"
            onClick={() => window.location.href = 'https://polymarket.com'}
          >
            Stop Watching. Start Winning.
          </Button>
          <p className="text-sm text-gray-600 mt-3">Join 50,000+ traders. Takes 60 seconds.</p>
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
              <p className="text-gray-700">NBA championships. NFL winners. MVP races. Player props. Browse live sports markets and choose what you have an opinion on.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Buy Shares (Priced by Probability)</h3>
              <p className="text-gray-700">Market shows 35¢? That's a 35% chance. Buy 100 shares for $35. If you're right, they pay $100. That's $65 profit.</p>
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
              <p className="text-gray-700"><strong>You're not locked in.</strong> Price jumps to 68¢? Sell and take profit. Want to wait for the full $1? Hold until the event ends. Your call.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-10">
          <p className="text-gray-800 leading-relaxed">
            <strong>The key advantage:</strong> You can exit anytime. Traditional sportsbooks lock you in until the game ends. Prediction markets let you cash out when the odds shift in your favor. It's not gambling. It's trading on information you already have.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Smart People Are Switching
        </h2>

        <div className="prose prose-lg max-w-none mb-10">
          <p className="text-gray-700 leading-relaxed mb-6">
            Traditional sportsbooks have a 4.5% house edge. They limit winners. They control the odds. <strong>Prediction markets are different.</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Zero trading fees. Market driven pricing. No limits on profitable traders. You're not locked in. The price moves based on probability. As the odds shift, so does your position.
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

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">The Window Is Closing</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Six months ago, only a few thousand people knew about this. They had a massive edge. They made serious money.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Today, 50,000+ people are using it. The edge is smaller but still real. You can still win.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Six months from now?</strong> Everyone will know. The opportunity will be gone. And you'll be the person who knew about it and did nothing.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What You Can Trade On
        </h2>

        <div className="prose prose-lg max-w-none mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Elections:</strong> Presidential races, congressional outcomes, state results. The same markets political insiders use.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Sports:</strong> Championships, MVP predictions, playoff outcomes. Where sharp money goes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Economics:</strong> Fed decisions, inflation reports, GDP forecasts. Trade the news before it moves markets.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Everything Else:</strong> Tech launches, award shows, cultural events. If it's newsworthy, you can trade it.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Real People Making Real Money
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          These are verified reviews from actual users. They got in early. You still can.
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

          <Card className="p-6 bg-white border-gray-200">
            <div className="mb-3">
              <div className="font-semibold text-gray-900">Sarah K.</div>
              <div className="text-sm text-gray-500">Texas • Jan 2026</div>
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

          <Card className="p-6 bg-white border-gray-200">
            <div className="mb-3">
              <div className="font-semibold text-gray-900">James M.</div>
              <div className="text-sm text-gray-500">Florida • Dec 2025</div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              "Been using this for months. Made consistent profits. Withdrawals are instant. This is the real deal."
            </p>
          </Card>
        </div>

        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-8 mb-10 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">By The Numbers</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-700">Active traders</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">$2B+</div>
              <div className="text-gray-700">Traded this year</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">0%</div>
              <div className="text-gray-700">Trading fees</div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          How It Works (Takes 2 Minutes To Learn)
        </h2>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>1. Pick an event.</strong> Will the Fed cut rates? Will Team X win? You already have opinions on this stuff.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>2. Buy shares.</strong> If you think something will happen, buy "Yes" shares at the current price.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>3. Win money.</strong> If you're right, each share pays $1. Your profit is $1 minus what you paid.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>4. Sell anytime.</strong> Don't want to wait? Sell before the event resolves. Lock in profits or cut losses. Your call.
          </p>
        </div>

        <div className="bg-gray-100 border-l-4 border-blue-600 p-6 mb-10">
          <p className="text-lg text-gray-800 italic mb-4">
            "I've been right about major events my whole life. Never made a dollar from it. Found this platform 6 months ago. I've made more money than I did at my day job last quarter."
          </p>
          <p className="text-sm text-gray-600">— Active trader, verified user</p>
        </div>

        <div className="bg-red-50 border-2 border-red-400 rounded-lg p-8 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't Be The Person Who Waited</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            You've been here before. You heard about Bitcoin early. You saw Tesla when it was cheap. You knew about the opportunity and you did nothing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>This is that moment again.</strong> Except this time, it takes 60 seconds to start. No excuses. No waiting.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The people who got in 6 months ago are up thousands. The people reading this today still have time. The people who wait? They'll regret it.
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

        <div className="bg-blue-600 text-white rounded-lg p-10 mb-10 text-center">
          <h3 className="text-3xl font-bold mb-4">You're Already Smarter Than Most People</h3>
          <p className="text-xl text-blue-100 mb-6">
            You've been right about major events. You just haven't been paid for it. That changes today. $10 bonus when you start.
          </p>
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-blue-600 font-bold text-xl px-16 py-8 rounded-full mb-6"
            onClick={() => window.location.href = 'https://polymarket.com'}
          >
            Start Winning Now
          </Button>
          <div className="text-sm text-blue-100 space-y-1">
            <p>✓ U.S. regulated and legal in all 50 states</p>
            <p>✓ Zero trading fees</p>
            <p>✓ Withdraw anytime, no lockup periods</p>
            <p>✓ Join 50,000+ traders</p>
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
