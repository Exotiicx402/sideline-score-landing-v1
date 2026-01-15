/**
 * V2 Landing Page - Psychological Triggers Version
 * 
 * This version uses advanced psychological principles:
 * - Loss aversion (fear of missing out)
 * - Social proof (everyone else is doing it)
 * - Authority (smart money knows)
 * - Scarcity (limited time)
 * - Ego/Status (prove you're smarter)
 * - Reciprocity (free bonus)
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import VersionSwitcher from "@/components/VersionSwitcher";

export default function V2() {
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
      <header className="border-b border-gray-200 py-4">
        <div className="container max-w-4xl">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-blue-600">Sideline</span>
              <span className="text-gray-900">marketwatch</span>
            </h1>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
              Advertorial
            </span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="container max-w-4xl py-12">
        {/* Byline */}
        <div className="text-sm text-gray-500 mb-8">
          Published on {currentDate} by Sideline Score
        </div>

        {/* Headline - Loss Aversion Hook */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Everyone's Making Money On This. You're Not. Here's Why That's About To Change.
        </h1>

        {/* Subheadline - FOMO */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed italic">
          The people who saw this 6 months ago are up thousands. The people reading this today still have a window. The people who wait? They'll be kicking themselves in 3 months.
        </p>

        {/* Hero Image - Trading Interface */}
        <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/images/trading-interface-mockup.png" 
            alt="Prediction trading app interface" 
            className="w-full"
          />
        </div>

        {/* Opening - Pattern Interrupt */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            Let me guess. You knew the Lakers would win. You called the Super Bowl matchup. You predicted the MVP before anyone else. And what did you get for being right?
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Nothing. Maybe some likes on Twitter. Maybe you won an argument with your friend.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Meanwhile, there's a group of sports fans who made the exact same predictions you did. Except they put money on it. And they're cashing out right now.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            They're not smarter than you. They're not luckier. They just know about a platform you probably don't. Yet.
          </p>
        </div>

        {/* First CTA - Curiosity Gap */}
        <div className="my-12 text-center">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 py-6 rounded-full"
            onClick={() => window.location.href = 'https://polymarket.com'}
          >
            Show Me How This Works
          </Button>
          <p className="text-sm text-gray-500 mt-3">$10 bonus when you start. No credit card required.</p>
        </div>

        {/* The Reveal - Authority */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          It's Called Prediction Trading. And The Smart Money Has Been Doing It For Years.
        </h2>

        {/* Profit Calculation Visual */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-md bg-gray-50 p-6">
          <img 
            src="/images/profit-calculation-visual.png" 
            alt="How prediction market profits work" 
            className="w-full"
          />
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            You know how Wall Street traders make money on stocks? This is the same thing. Except instead of betting on companies, you're betting on sports outcomes. <strong>And just like stocks, you can cash out anytime.</strong>
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            NBA championships. Super Bowl winners. MVP races. Player props. Anything in sports, you can trade it. The price moves based on probability. As the odds shift, so does your position. <strong>You're not locked in. Cash out whenever you want.</strong>
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The platform is called <strong>Sideline Score</strong>. It's 100% legal. U.S. regulated. And it's been quietly growing while most people had no idea it existed.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Until now.
          </p>
        </div>

        {/* Social Proof - Testimonials */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Don't Take My Word For It
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          These are real people. Real reviews. Real money.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
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
              "It's so far the best prediction market I have used. The 0% fees to trade make it the best betting site I have used from around 30 different sites. 10/10"
            </p>
          </Card>
        </div>

        {/* Success Image */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/images/person-winning-phone.png" 
            alt="Person celebrating trading win" 
            className="w-full"
          />
        </div>

        {/* How It Works - Simplicity */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Here's How It Works (It's Stupidly Simple)
        </h2>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>1. Pick an event.</strong> Will Trump win? Will the Lakers make the playoffs? Will inflation go up?
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>2. Buy shares in what you think will happen.</strong> If you think "Yes," you buy Yes shares. If you think "No," you buy No shares. Each share costs between $0.01 and $0.99.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>3. If you're right, you get paid $1 per share.</strong> Bought 100 Yes shares at $0.60 each? That's $60. If Yes wins, you get $100. That's $40 profit.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>4. You can sell anytime.</strong> Don't want to wait? See the momentum shifting? Cash out early. You're in control.
          </p>
        </div>

        {/* Second CTA - Direct Response */}
        <div className="my-12 text-center">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 py-6 rounded-full"
            onClick={() => window.location.href = 'https://polymarket.com'}
          >
            Get My $10 Bonus Now
          </Button>
          <p className="text-sm text-gray-500 mt-3">Takes 60 seconds to start. Seriously.</p>
        </div>

        {/* The Real Kicker - Loss Aversion + Scarcity */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          The Window Is Closing Faster Than You Think
        </h2>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            Right now, most people don't know this exists. That's your edge.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            But every day, more people find out. More money flows in. The odds get tighter. The easy wins get harder to find.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The people who got in early made a killing on the 2024 election. The people who got in 6 months ago are up on everything from sports to economic data.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            You're not early. But you're not late. You're right in the sweet spot where there's still edge to be had.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Six months from now? This will be mainstream. Everyone will be doing it. And the easy money will be gone.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            So the question is: Do you want to be the person who got in when it still mattered? Or the person who heard about it too late?
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

        {/* Final CTA - Ego/Status */}
        <div className="my-12 text-center bg-blue-50 p-12 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            You're Already Smarter Than Most People
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            You see what's coming. You call it before it happens. Now it's time to get paid for being right.
          </p>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 py-6 rounded-full"
            onClick={() => window.location.href = 'https://polymarket.com'}
          >
            Start Trading Now. $10 Bonus Inside.
          </Button>
          <p className="text-sm text-gray-500 mt-4">Join thousands who are already winning.</p>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-xs text-gray-500 leading-relaxed">
          <p className="mb-2">
            Trading involves risk and may not be appropriate for all. Members risk losing their cost to enter any transaction, including fees. You should carefully consider whether trading is appropriate for you in light of your investment experience and financial resources. Any trading decisions you make are solely your responsibility and at your own risk. Information is provided for convenience only on an "AS IS" basis. Past performance is not necessarily indicative of future results. Sideline Score is an information markets platform. Not available in all jurisdictions. Please check your local regulations.
          </p>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-16">
        <div className="container max-w-4xl">
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">Privacy Policy</a>
            <a href="#" className="hover:text-gray-700">Terms of Service</a>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
