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

      <article className="container max-w-4xl mx-auto px-6 py-12">
        <div className="text-sm text-gray-500 mb-8">
          Published on {currentDate} by <span className="font-semibold">TheMarketWatch</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Wall Street Doesn't Want You To Know About This. Here's Why.
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          There's a legal loophole that lets regular people profit from the same information Wall Street uses. And they're not happy about it.
        </p>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            You know how hedge funds make billions predicting elections, market moves, and major events? They have access to prediction markets. Places where you can literally buy and sell the outcome of real world events.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            For years, this was only available to institutional investors. Big money. Connected people. But a regulatory change opened it up to everyone. And now? Regular people are making serious money.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>The platform is called Sideline Score.</strong> It's U.S. regulated. Completely legal. And it's the same type of market that Wall Street has been using for decades.
          </p>
        </div>

        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why They Don't Want You To Know</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            When regular people have access to the same tools as institutional investors, the edge disappears. The information asymmetry that made Wall Street billions? Gone.
          </p>
          <p className="text-gray-700 leading-relaxed">
            That's why you won't see this advertised on CNBC. That's why your financial advisor won't tell you about it. <strong>Because once everyone knows, the advantage is over.</strong>
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
          Here's What You Can Trade On
        </h2>

        <div className="prose prose-lg max-w-none mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Elections:</strong> Presidential races, congressional outcomes, state level results. The same markets political consultants use.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Economics:</strong> Fed decisions, inflation reports, GDP numbers. The data that moves billions in institutional money.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Sports:</strong> Championship winners, MVP predictions, playoff outcomes. Where sharp bettors make real money.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Everything Else:</strong> Tech launches, award shows, cultural events. If it's newsworthy, you can trade it.
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

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            You pick an event. Let's say "Will the Fed cut rates in March?" You think yes. You buy shares at the current price (say, 65 cents per share).
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            If you're right, each share pays $1. You just made 35 cents per share. Scale that up, and the profits add up fast.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            If you're wrong, you lose what you paid. But here's the key: <strong>you can cash out anytime before the event resolves.</strong> The price moves based on probability as new information comes in. Lock in profits early. Cut losses if you change your mind. Just like trading stocks, you're not locked in until you choose to be.
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
            Trading involves risk and may not be appropriate for all. Members risk losing their cost to enter any transaction, including fees. You should carefully consider whether trading is appropriate for you in light of your investment experience and financial resources. Any trading decisions you make are solely your responsibility and at your own risk. Information is provided for convenience only on an "AS IS" basis. Past performance is not necessarily indicative of future results. Sideline Score is an information markets platform. Not available in all jurisdictions. Please check your local regulations.
          </p>
        </div>
      </article>
      </div>
    </div>
  );
}
