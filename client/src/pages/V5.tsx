/**
 * V5: "Social Proof Overload" Angle
 * Psychological triggers: Bandwagon effect, social validation, herd mentality
 * Image strategy: Heavy testimonials, minimal other images
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import VersionSwitcher from "@/components/VersionSwitcher";

export default function V5() {
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
          50,000+ People Are Making Money on This Platform. Here's What They Know That You Don't.
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          While you're scrolling, thousands of people are turning their opinions into cash. Legally. Here's how they're doing it.
        </p>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-8 mb-10 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Join 50,000+ Active Traders</h3>
          <p className="text-lg text-gray-700 mb-6">
            Over $2 billion traded on prediction markets this year. Your friends are already doing this.
          </p>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 py-6 rounded-full"
            onClick={() => window.location.href = 'https://polymarket.com'}
          >
            See What Everyone's Talking About
          </Button>
          <p className="text-sm text-gray-600 mt-3">Get $10 bonus when you start. Takes 60 seconds.</p>
        </div>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            There's a platform called <strong>Sideline Score</strong> where sports fans are winning money on game outcomes, championships, and player props. It's U.S. regulated. Completely legal. And it's exploding in popularity. Here's exactly how it works:
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Sign Up in 60 Seconds</h3>
              <p className="text-gray-700">Create your account. No credit card required. Just basic info and you're in.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Pick a Sports Outcome</h3>
              <p className="text-gray-700">NBA championships. NFL winners. MVP races. Player props. Browse live markets and pick what you have an opinion on.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Buy Shares (Priced by Probability)</h3>
              <p className="text-gray-700">If the market shows 45¢, that's a 45% chance. Buy 100 shares for $45. If you're right, they pay $100. That's $55 profit.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Watch the Price Move</h3>
              <p className="text-gray-700">As the odds shift, so does your position. Game momentum changes? The price changes. Your position goes up or down in real-time.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Cash Out Anytime</h3>
              <p className="text-gray-700"><strong>You're not locked in.</strong> Price jumps to 75¢? Sell and lock in profit. Want to wait for the full $1? Hold until the event ends. Your choice.</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12">
          <p className="text-gray-800 leading-relaxed">
            <strong>Why everyone's switching:</strong> You can exit your position anytime. Traditional sportsbooks lock you in. Prediction markets let you cash out when the odds move in your favor.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Here's What Real Users Are Saying
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          These are verified reviews from people just like you.
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

        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-8 mb-10 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Everyone's Switching To Prediction Markets</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-700">Active traders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">$2B+</div>
              <div className="text-gray-700">Traded this year</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">4.8★</div>
              <div className="text-gray-700">Average rating</div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What You Can Trade On
        </h2>

        <div className="prose prose-lg max-w-none mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Elections:</strong> Thousands of traders are making money on presidential races, congressional outcomes, and policy decisions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Sports:</strong> Championship winners, MVP predictions, playoff outcomes. The smart money is already here.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Economics:</strong> Fed decisions, inflation reports, GDP forecasts. Trade the same markets Wall Street watches.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Everything Else:</strong> Tech launches, award shows, cultural events. If it's newsworthy, people are trading it.
          </p>
        </div>

        <div className="bg-gray-100 border-l-4 border-blue-600 p-6 mb-10">
          <p className="text-lg text-gray-800 italic mb-4">
            "I told my friends about this 3 months ago. They didn't believe me. Now they're all using it and wish they'd started sooner."
          </p>
          <p className="text-sm text-gray-600">— Active trader since 2024</p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          How It Works (It's Simple)
        </h2>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>1. Pick an event.</strong> Will the Fed cut rates? Will Team X win the championship? You decide.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>2. Buy shares.</strong> If you think something will happen, buy "Yes" shares. Think it won't? Buy "No" shares.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>3. Win money.</strong> If you're right, each share pays $1. If you're wrong, you lose what you paid. But here's the key: <strong>you can cash out anytime, just like a stock.</strong> The price moves based on probability. As new information comes in, the odds shift. You're not locked in. <strong>Cash out whenever you want.</strong>
          </p>
        </div>

        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-8 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Everyone's Asking The Same Questions</h3>
          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-semibold mb-2">Is this legal?</p>
              <p>Yes. Sideline Score is U.S. regulated and operates in all 50 states. Over 50,000 people are using it right now.</p>
            </div>
            <div>
              <p className="font-semibold mb-2">How do I get my money out?</p>
              <p>Anytime you want. Thousands of users withdraw every day. Fast payouts, zero fees.</p>
            </div>
            <div>
              <p className="font-semibold mb-2">What if I'm wrong?</p>
              <p>You lose what you paid for the shares. But you can sell early to lock in profits or cut losses. Just like everyone else is doing.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          More People Joining Every Day
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 bg-white border-gray-200">
            <div className="mb-3">
              <div className="font-semibold text-gray-900">Alex P.</div>
              <div className="text-sm text-gray-500">Illinois • Jan 2026</div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              "My coworker told me about this. I signed up and made $200 in my first week. Now I'm hooked."
            </p>
          </Card>

          <Card className="p-6 bg-white border-gray-200">
            <div className="mb-3">
              <div className="font-semibold text-gray-900">Jennifer T.</div>
              <div className="text-sm text-gray-500">Georgia • Dec 2025</div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              "Everyone in my friend group is using this now. We compare our trades and help each other out. It's actually fun."
            </p>
          </Card>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-10 mb-10 text-center">
          <h3 className="text-3xl font-bold mb-4">Join 50,000+ Traders Today</h3>
          <p className="text-xl text-blue-100 mb-6">
            Get $10 bonus when you start. Takes 60 seconds to sign up. See what everyone's talking about.
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
            <p>✓ 50,000+ active traders</p>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-8">
          <p className="mb-2">
            <a href="#" className="hover:text-gray-700">Privacy Policy</a> | <a href="#" className="hover:text-gray-700">Terms of Service</a>
          </p>
          <p className="leading-relaxed max-w-3xl mx-auto">
            Trading involves risk and may not be appropriate for all. Members risk losing their cost to enter any transaction, including fees. You should carefully consider whether trading is appropriate for you in light of your investment experience and financial resources. Any trading decisions you make are solely your responsibility and at your own risk. Information is provided for convenience only on an "AS IS" basis. Past performance is not necessarily indicative of future results. Sideline Score is an information markets platform. Not available in all jurisdictions. Please check your local regulations.
          </p>
        </div>
      </article>
      </div>
    </div>
  );
}
