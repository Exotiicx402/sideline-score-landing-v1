/**
 * Design Philosophy: Escapist Magazine Style Advertorial
 * - Magazine-style layout with sidebar
 * - Category badge, large featured image
 * - Clean typography with good spacing
 * - Related content sidebar
 * - Professional news outlet aesthetic
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function Home() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const relatedArticles = [
    {
      slug: "nba-playoffs",
      category: "NBA",
      title: "NBA Playoffs Preview: Dark Horse Teams to Watch",
      author: "Mike Johnson",
      image: "/images/nba-playoffs.jpg"
    },
    {
      slug: "nfl-draft",
      category: "NFL",
      title: "2026 NFL Draft: Top 10 Prospects Ranked",
      author: "Sarah Williams",
      image: "/images/nfl-draft.jpg"
    },
    {
      slug: "mlb-spring",
      category: "MLB",
      title: "MLB Spring Training: Breakout Players to Watch",
      author: "Tom Anderson",
      image: "/images/mlb-spring.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="cursor-pointer">
                <img 
                  src="/images/sideline-score-logo.png" 
                  alt="Sideline Score" 
                  style={{width: '100px', height: '100px'}}
                />
              </a>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/"><a className="text-sm font-semibold hover:text-blue-600">HOME</a></Link>
              <a href="#" className="text-sm font-semibold hover:text-blue-600">NBA</a>
              <a href="#" className="text-sm font-semibold hover:text-blue-600">NFL</a>
              <a href="#" className="text-sm font-sembold hover:text-blue-600">MLB</a>
              <a href="#" className="text-sm font-semibold hover:text-blue-600">COLLEGE</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article Content */}
          <article className="lg:col-span-2 bg-white rounded-lg shadow-sm p-8">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded uppercase">
                Advertorial
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              This Legal Platform Lets You Win Money on Sports From Any State
            </h1>

            {/* Byline */}
            <div className="flex items-center gap-3 mb-6 text-sm text-gray-600">
              <span className="font-semibold">Sideline Score</span>
              <span>|</span>
              <span>Last Updated On: {currentDate}</span>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src="/images/sports-trading-interface.png" 
                alt="Sports prediction trading app interface" 
                className="w-full"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                You made $500 doing <em>what</em>? Here's how sports fans are turning their predictions into cash. Legally, in all 50 states.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                If you follow sports, you probably have strong opinions about what's going to happen next. Which team wins tonight's game. Who takes the series. Which team comes back from behind.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Most people just argue about it online. But there's a growing group of people who are putting real money behind their predictions and winning.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                It's called <strong>sports prediction trading</strong>, and it's completely legal. A U.S.-regulated platform called <strong>Polymarket</strong> lets you trade on game outcomes. Lakers vs Heat. Celtics vs 76ers. Warriors vs Suns. Pick which team wins, buy shares, and cash out anytime.
              </p>

              {/* CTA 1 */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 my-8 text-center">
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
                  Start Trading. It's Free
                </Button>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
                How Does It Work?
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Sign Up (60 seconds)</h3>
                    <p className="text-gray-700">Create a free account on Polymarket. No credit card required to start.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Pick a Game</h3>
                    <p className="text-gray-700">Browse live markets. Lakers vs Heat. Celtics vs 76ers. Every major game has a market.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Buy Shares of a Team</h3>
                    <p className="text-gray-700">Shares are priced by probability. If Lakers have a 40% chance to win, shares cost 40¢ each. Buy 100 shares for $40.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Watch Price Move in Real-Time</h3>
                    <p className="text-gray-700">As the game unfolds, share prices change. Lakers take the lead? Price jumps to 70¢. You're up 75%.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      5
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cash Out Anytime</h3>
                    <p className="text-gray-700">Sell your shares whenever you want. Or hold until the game ends—if your team wins, shares pay $1 each.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
                Real Example:
              </h2>

              <div className="bg-gray-50 border-l-4 border-blue-600 p-6 mb-8">
                <p className="text-gray-900 mb-2"><strong>Market:</strong> Lakers vs Heat</p>
                <p className="text-gray-900 mb-2"><strong>Your prediction:</strong> Lakers</p>
                <p className="text-gray-900 mb-2"><strong>Current price:</strong> 35¢ per share (meaning the market thinks there's a 35% chance)</p>
                <p className="text-gray-900 mb-2"><strong>You buy:</strong> 100 shares for $35</p>
                <p className="text-gray-900 mb-2"><strong>Outcome:</strong> Lakers win the game</p>
                <p className="text-green-600 font-bold text-lg mt-4">Your payout: $100 (profit: $65)</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Unlike traditional sportsbooks that lock you in, Polymarket lets you exit anytime. See the momentum shifting? Sell early and lock in profits. Think your team will come back? Hold and maximize gains.
              </p>

              {/* CTA 2 */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 my-8 text-center">
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 py-6 rounded-full"
                  onClick={() => window.location.href = 'https://polymarket.com'}
                >
                  Get $10 Free to Start Trading
                </Button>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
                What Can You Trade On?
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Every major sports game with two teams has live markets:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>NBA:</strong> Lakers vs Heat, Celtics vs 76ers, Warriors vs Suns. Every major NBA game has live markets.</li>
                <li><strong>NFL:</strong> Chiefs vs Bills, Cowboys vs Eagles, 49ers vs Packers. Trade on every NFL matchup.</li>
                <li><strong>MLB:</strong> Yankees vs Red Sox, Dodgers vs Giants, Astros vs Rangers. Live markets for every game.</li>
                <li><strong>Other Sports:</strong> NHL, soccer, tennis, UFC, and more. If two teams are playing, you can trade it.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
                Why People Are Switching
              </h2>

              {/* Trust Badges */}
              <div className="my-8">
                <img 
                  src="/images/trust-badges-updated.png" 
                  alt="U.S. Regulated, Secure Platform, 1¢ Minimal Fees, Instant Withdrawals" 
                  className="w-full max-w-3xl mx-auto"
                />
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Traditional sportsbooks take a cut on every bet (called "juice" or "vig"). Polymarket charges just 1¢ per trade. You keep more of your winnings.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                And unlike sportsbooks that lock you in until the game ends, Polymarket lets you cash out anytime. The game's momentum shifts? Sell and secure your profit. No waiting until the final buzzer.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
                What People Are Saying
              </h2>

              <div className="space-y-6 mb-8">
                <Card className="p-6 bg-gray-50">
                  <p className="text-gray-700 italic mb-3">
                    "I bought Lakers shares at halftime when they were down. Sold when they took the lead in the 4th. Made $180 in 20 minutes. Way better than traditional betting with minimal 1¢ fee."
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">— Marcus T., Chicago</p>
                </Card>

                <Card className="p-6 bg-gray-50">
                  <p className="text-gray-700 italic mb-3">
                    "The ability to cash out early changed everything. I don't have to sweat until the final whistle anymore. I can lock in profits when I see them with minimal 1¢ fee."
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">— Jessica L., Miami</p>
                </Card>

                <Card className="p-6 bg-gray-50">
                  <p className="text-gray-700 italic mb-3">
                    "I've been using this for three months. Up $2,400. It's not gambling—it's trading on what I already know about sports."
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">— David R., Phoenix</p>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
                Getting Started
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Polymarket is offering new users $10 free upon sign up. No deposit required. No trading required. Just sign up and you get $10 to start.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                If you've ever argued about a game, you already have the knowledge. Now you can put it to work.
              </p>

              {/* Final CTA */}
              <div className="bg-blue-600 rounded-lg p-8 my-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start?</h3>
                <p className="text-lg mb-6 text-white">Get $10 free when you sign up today. No deposit required.</p>
                <Button 
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-12 py-6 rounded-full"
                  onClick={() => window.location.href = 'https://polymarket.com'}
                >
                  Claim Your $10 Free
                </Button>
              </div>

              <p className="text-sm text-gray-500 italic mt-8">
                <em>Sideline Score is supported by our audience. When you sign up through links on our site, we may earn a small affiliate commission.</em>
              </p>
            </div>
          </article>

          {/* Sidebar - Related Content */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Content</h3>
              <div className="space-y-4">
                {relatedArticles.map((article) => (
                  <Link key={article.slug} href={`/article/${article.slug}`}>
                    <a className="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <span className="inline-block bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded uppercase mb-2">
                          {article.category}
                        </span>
                        <h4 className="font-bold text-sm text-gray-900 mb-2 line-clamp-2">
                          {article.title}
                        </h4>
                        <p className="text-xs text-gray-600">{article.author}</p>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © 2026 Sideline Score. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
