/**
 * Design Philosophy: Escapist Magazine Homepage Style
 * - Clean magazine layout with featured hero article
 * - Grid-based article cards with category badges
 * - Professional typography and spacing
 * - Light gray background with white cards
 */

import { Link } from "wouter";

export default function NewsHome() {
  const articles = [
    {
      id: "sportsbook-lockout",
      title: "The $50,000 Lockout: Why Sportsbooks Freeze Your Bets During the Most Critical Moments",
      excerpt: "If you've ever tried to cash out a bet during a crucial play—only to see 'BETTING SUSPENDED' flash across your screen—you're not alone.",
      image: "/images/sports-trading-interface.png",
      category: "ADVERTORIAL",
      author: "Mike Patterson",
      date: "January 15, 2026",
      isAdvertorial: true,
      isFeatured: true
    },
    {
      id: "nba-playoffs-preview",
      title: "NBA Playoffs Preview: Can Anyone Stop the Celtics?",
      excerpt: "Boston looks unstoppable heading into the postseason, but these three teams could pose serious threats.",
      image: "/images/nba-playoffs.jpg",
      category: "NBA",
      author: "Mike Johnson",
      date: "January 16, 2026"
    },
    {
      id: "nfl-draft-prospects",
      title: "Top 10 NFL Draft Prospects to Watch This Spring",
      excerpt: "From quarterbacks to edge rushers, these college stars are generating serious buzz ahead of the 2026 NFL Draft.",
      image: "/images/nfl-draft.jpg",
      category: "NFL",
      author: "Sarah Chen",
      date: "January 15, 2026"
    },
    {
      id: "mlb-spring-training",
      title: "MLB Spring Training: 5 Storylines That Will Define 2026",
      excerpt: "From blockbuster trades to rookie phenoms, here's what to watch as teams report to Arizona and Florida.",
      image: "/images/mlb-spring.jpg",
      category: "MLB",
      author: "David Martinez",
      date: "January 15, 2026"
    },
    {
      id: "lakers-trade-rumors",
      title: "Lakers Trade Deadline: Insider Intel on LA's Next Move",
      excerpt: "Sources say the Lakers are actively shopping for a defensive anchor. Here are the top three targets.",
      image: "/images/lakers-trade.jpg",
      category: "NBA",
      author: "Jessica Williams",
      date: "January 14, 2026"
    },
    {
      id: "super-bowl-odds",
      title: "Super Bowl Odds Shift After Conference Championships",
      excerpt: "Vegas oddsmakers react to shocking upsets as two underdogs punch their tickets to the big game.",
      image: "/images/super-bowl.jpg",
      category: "NFL",
      author: "Tom Anderson",
      date: "January 14, 2026"
    },
    {
      id: "march-madness-preview",
      title: "March Madness 2026: Early Bracket Predictions",
      excerpt: "It's never too early to start filling out your bracket. Here are the teams to watch this tournament season.",
      image: "/images/march-madness.jpg",
      category: "COLLEGE",
      author: "Rachel Kim",
      date: "January 13, 2026"
    }
  ];

  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="cursor-pointer">
              <img 
                src="/images/sideline-score-logo.png" 
                alt="Sideline Score" 
                style={{width: '100px', height: '100px'}}
              />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-bold hover:text-blue-600 transition-colors uppercase">
                Home
              </Link>
              <a href="#" className="text-sm font-bold hover:text-blue-600 transition-colors uppercase">
                NBA
              </a>
              <a href="#" className="text-sm font-bold hover:text-blue-600 transition-colors uppercase">
                NFL
              </a>
              <a href="#" className="text-sm font-bold hover:text-blue-600 transition-colors uppercase">
                MLB
              </a>
              <a href="#" className="text-sm font-bold hover:text-blue-600 transition-colors uppercase">
                College
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Gaming News, Reviews & Features
          </h1>
        </div>

        {/* Featured Hero Article */}
        <section className="mb-12">
          <Link href={`/article/${featuredArticle.id}`} className="block">
              <div className="grid md:grid-cols-2 gap-0 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                {/* Left: Image */}
                <div className="relative h-64 md:h-96">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded uppercase">
                    {featuredArticle.category}
                  </span>
                </div>
                
                {/* Right: Content */}
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-blue-600 font-bold text-sm mb-3 uppercase">
                    Featured
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight hover:text-blue-600 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="font-semibold">{featuredArticle.author}</span>
                    <span>•</span>
                    <span>{featuredArticle.date}</span>
                  </div>
                </div>
              </div>
          </Link>
        </section>

        {/* News Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">News</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {regularArticles.slice(0, 3).map((article) => (
              <Link key={article.id} href={`/article/${article.id}`} className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="font-semibold">{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {regularArticles.slice(3).map((article) => (
              <Link key={article.id} href={`/article/${article.id}`} className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="font-semibold">{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-bold text-lg mb-4">Sports</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">NBA</a></li>
                <li><a href="#" className="hover:text-white transition-colors">NFL</a></li>
                <li><a href="#" className="hover:text-white transition-colors">MLB</a></li>
                <li><a href="#" className="hover:text-white transition-colors">College</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">Company</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">Legal</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Advertise</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-4">Follow Us</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            © 2026 Sideline Score. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
