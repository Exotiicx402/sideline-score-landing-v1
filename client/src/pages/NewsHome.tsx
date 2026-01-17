import { Link } from "wouter";
import { Card } from "@/components/ui/card";

export default function NewsHome() {
  const articles = [
    {
      id: "polymarket-advertorial",
      title: "This Legal Platform Lets You Win Money on Sports From Any State",
      excerpt: "You made $500 doing what? Here's how sports fans are turning their predictions into cash. Legally, in all 50 states.",
      image: "/images/sports-trading-interface.png",
      category: "Featured",
      author: "Sideline Score",
      date: "January 16, 2026",
      isAdvertorial: true
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
      category: "College Sports",
      author: "Rachel Kim",
      date: "January 13, 2026"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img 
                src="/images/sideline-score-logo.png" 
                alt="Sideline Score" 
                className="h-8" style={{width: '100px', height: '100px'}}
              />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">NBA</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">NFL</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">MLB</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">College</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Featured Article */}
        <section className="mb-12">
          <div className="relative">
            <Link href={`/article/${articles[0].id}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={articles[0].image} 
                      alt={articles[0].title}
                      className="w-full h-full object-cover"
                    />
                    {articles[0].isAdvertorial && (
                      <span className="absolute top-4 left-4 bg-gray-900 text-white text-xs px-3 py-1 rounded">
                        Advertorial
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col justify-center bg-white">
                    <span className="text-blue-600 font-semibold text-sm mb-2">
                      {articles[0].category}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3 hover:text-blue-600">
                      {articles[0].title}
                    </h2>
                    <p className="text-gray-700 text-lg mb-4">
                      {articles[0].excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span>{articles[0].author}</span>
                      <span>•</span>
                      <span>{articles[0].date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* Latest Stories */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Stories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <Link key={article.id} href={`/article/${article.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full bg-white">
                  <div className="relative h-48">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-6">
            <div>
              <h5 className="font-bold mb-3">Sports</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">NBA</a></li>
                <li><a href="#" className="hover:text-white">NFL</a></li>
                <li><a href="#" className="hover:text-white">MLB</a></li>
                <li><a href="#" className="hover:text-white">College</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-3">Company</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-3">Legal</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Advertise</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-3">Follow Us</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Facebook</a></li>
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
