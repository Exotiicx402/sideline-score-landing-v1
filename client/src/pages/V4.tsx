/**
 * V4: "Regret Avoidance" Angle
 * Psychological triggers: FOMO, missed opportunity, temporal scarcity
 * Image strategy: Success imagery, people winning
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import VersionSwitcher from "@/components/VersionSwitcher";

export default function V4() {
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
          Remember When You Could've Bought Bitcoin at $100? This Is Your Second Chance.
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          In 6 months, everyone will know about this. Right now? You're early. Don't make the same mistake twice.
        </p>

        {/* Success Image */}
        <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/images/person-winning-phone.png" 
            alt="Person celebrating trading win" 
            className="w-full"
          />
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            You've been here before. You heard about Bitcoin when it was cheap. You thought about buying Tesla stock early. You saw the opportunity and did nothing.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            And now? You kick yourself every time you see the price. <strong>This is that moment again.</strong> Except this time, you can actually do something about it.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            There's a legal platform called <strong>Polymarket</strong> where you can win money on sports outcomes. It's U.S. regulated. Completely legal. And right now, most sports fans don't know it exists.
          </p>
        </div>

        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-8 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't Be The Person Who Waited</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Six months ago, a small group of people discovered this platform. They're up thousands of dollars. They got in when nobody knew about it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Three months ago, more people found out. They're doing well too. Still early enough to matter.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Today is your turn.</strong> In another 6 months, this will be mainstream. The edge will be gone. And you'll be kicking yourself again.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 mb-10 text-center">
          <div className="mb-4">
            <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-lg">
              Get $10 Free Upon Sign Up
            </span>
          </div>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 py-6 rounded-full"
            onClick={() => window.location.href = 'https://polymarket.com'}
          >
            Don't Wait. Start Now.
          </Button>
          <p className="text-sm text-gray-600 mt-3">Takes 60 seconds. No credit card required.</p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          How It Works (The Complete Process)
        </h2>

        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Sign Up (60 Seconds)</h3>
              <p className="text-gray-700">Create your Sideline Score account. No credit card required. Just basic info.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Pick a Sports Outcome</h3>
              <p className="text-gray-700">Celtics vs 76ers tonight? Buy shares of "Celtics win." Chiefs to win the Super Bowl? Buy those shares. Each market is a specific outcome you can trade.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Buy Shares (Priced by Probability)</h3>
              <p className="text-gray-700">Celtics down at halftime? Shares drop to 30¢. Buy 100 shares for $30. They win? Each share pays $1. That's $100 total, $70 profit.</p>
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
              <p className="text-gray-700"><strong>You're not locked in.</strong> Celtics take the lead? Price jumps to 65¢. Sell now for $35 profit. Or hold until final buzzer for the full $70 if they win. Your call.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-10">
          <p className="text-gray-800 leading-relaxed">
            <strong>The key advantage:</strong> You can exit anytime. Traditional sportsbooks lock you in until the game ends. Prediction markets let you cash out when the odds shift.
          </p>
        </div>

        <div className="mb-12 rounded-lg overflow-hidden shadow-lg max-w-md mx-auto">
          <img 
            src="/images/trading-interface-mockup.png" 
            alt="Prediction trading app interface" 
            className="w-full"
          />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Here's What Happens If You Wait
        </h2>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Week 1:</strong> You think about it. You tell yourself you'll sign up later. You don't.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Month 1:</strong> You see more articles about prediction markets. You think "I should've done that." You still don't.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Month 6:</strong> It's everywhere. Your friends are talking about it. The early adopters are cashing out big wins. And you? You're the person who knew about it and did nothing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Don't let that be you.</strong>
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          People Who Got In Early
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

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">The Honest Truth</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most people who see this will do nothing. They'll think about it. They'll save the link. They'll tell themselves they'll do it later.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            And in 6 months, when everyone's talking about prediction markets, they'll remember this moment. They'll remember they had the chance to get in early. And they'll regret it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Don't be that person.</strong>
          </p>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-10 mb-10 text-center">
          <h3 className="text-3xl font-bold mb-4">This Is Your Moment</h3>
          <p className="text-xl text-blue-100 mb-6">
            $10 free upon sign up. No trading required. Takes 60 seconds. You'll either do it now or regret it later.
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
