import { useRoute } from "wouter";

export default function Article() {
  const [, params] = useRoute("/article/:id");
  const articleId = params?.id;

  // Article data
  const articles: Record<string, any> = {
    "nba-playoffs-preview": {
      title: "NBA Playoffs Preview: Can Anyone Stop the Celtics?",
      image: "/images/nba-playoffs.jpg",
      category: "NBA",
      author: "Mike Johnson",
      date: "January 16, 2026",
      content: `
        <p>The Boston Celtics have been the most dominant team in the NBA this season, posting a league-best 42-12 record heading into the All-Star break. With Jayson Tatum playing at an MVP level and a deep roster that can match up against anyone, Boston looks poised to capture Banner 19.</p>
        
        <p>But as we've seen time and time again in the NBA, regular season success doesn't always translate to playoff glory. Here are three teams that could pose serious threats to the Celtics' championship aspirations:</p>
        
        <h3>1. Milwaukee Bucks</h3>
        <p>Giannis Antetokounmpo and Damian Lillard have finally found their rhythm together, and the Bucks' defense has been elite over the past month. If they can stay healthy, Milwaukee has the star power to go toe-to-toe with Boston in a seven-game series.</p>
        
        <h3>2. Denver Nuggets</h3>
        <p>The defending champions aren't going anywhere. Nikola Jokic continues to put up historic numbers, and Jamal Murray has been lights out in clutch situations. Don't count out the Nuggets' championship experience.</p>
        
        <h3>3. Los Angeles Lakers</h3>
        <p>LeBron James and Anthony Davis have been on a tear lately, and the Lakers' recent trade deadline moves have given them much-needed depth. If they can secure home-court advantage, LA could be dangerous in the Western Conference playoffs.</p>
        
        <p>The road to the championship runs through Boston, but these three teams have what it takes to dethrone the Celtics. Buckle up for what should be an incredible postseason.</p>
      `
    },
    "nfl-draft-prospects": {
      title: "Top 10 NFL Draft Prospects to Watch This Spring",
      image: "/images/nfl-draft.jpg",
      category: "NFL",
      author: "Sarah Chen",
      date: "January 15, 2026",
      content: `
        <p>The 2026 NFL Draft is shaping up to be one of the most talent-rich classes in recent memory. From franchise quarterbacks to game-changing edge rushers, this year's crop of prospects has NFL scouts salivating.</p>
        
        <p>Here are the top 10 prospects generating the most buzz as we head into the spring evaluation period:</p>
        
        <h3>1. Caleb Williams, QB, USC</h3>
        <p>The Heisman Trophy winner has all the tools to be a franchise quarterback. Elite arm talent, exceptional mobility, and the ability to make plays off-script make Williams the consensus #1 pick.</p>
        
        <h3>2. Marvin Harrison Jr., WR, Ohio State</h3>
        <p>Following in his father's footsteps, Harrison Jr. has been unstoppable at the college level. His route running, hands, and football IQ are all NFL-ready.</p>
        
        <h3>3. Jalen Carter, DT, Georgia</h3>
        <p>A disruptive force in the middle of the defensive line, Carter has the potential to be a perennial Pro Bowler. His combination of size, strength, and quickness is rare.</p>
        
        <p>The rest of the top 10 includes several other blue-chip prospects who could transform NFL franchises. Stay tuned as we continue to track these players through the combine and pro days.</p>
      `
    },
    "mlb-spring-training": {
      title: "MLB Spring Training: 5 Storylines That Will Define 2026",
      image: "/images/mlb-spring.jpg",
      category: "MLB",
      author: "David Martinez",
      date: "January 15, 2026",
      content: `
        <p>Spring training is just around the corner, and baseball fans are eager to see how their favorite teams stack up heading into the 2026 season. From blockbuster trades to rookie phenoms, here are five storylines to watch:</p>
        
        <h3>1. Shohei Ohtani's Dodgers Debut</h3>
        <p>After signing the richest contract in sports history, all eyes will be on Ohtani as he suits up for the Dodgers. Can he replicate his two-way dominance in a new uniform?</p>
        
        <h3>2. Yankees' New-Look Lineup</h3>
        <p>New York made several big moves this offseason, completely revamping their lineup. How quickly can these new pieces gel together?</p>
        
        <h3>3. Braves' Dynasty Continues?</h3>
        <p>Atlanta is looking to win their third straight World Series. Their young core is entering their prime years, making them the team to beat once again.</p>
        
        <h3>4. Rookie Phenoms</h3>
        <p>Several top prospects are expected to make their MLB debuts this season. Keep an eye on these young stars who could change the landscape of the league.</p>
        
        <h3>5. Rule Changes Impact</h3>
        <p>MLB's latest rule adjustments will be tested in spring training. How will teams adapt their strategies to the new regulations?</p>
      `
    },
    "lakers-trade-rumors": {
      title: "Lakers Trade Deadline: Insider Intel on LA's Next Move",
      image: "/images/lakers-trade.jpg",
      category: "NBA",
      author: "Jessica Williams",
      date: "January 14, 2026",
      content: `
        <p>The Los Angeles Lakers are actively shopping for reinforcements ahead of the trade deadline, and sources say they're specifically targeting a defensive anchor to pair with Anthony Davis in the frontcourt.</p>
        
        <p>According to multiple league insiders, the Lakers have had exploratory conversations with several teams about the following players:</p>
        
        <h3>Target #1: Myles Turner, Indiana Pacers</h3>
        <p>Turner's rim protection and three-point shooting would be a perfect fit alongside Davis. The Pacers have been open to moving him for the right price.</p>
        
        <h3>Target #2: Jakob Poeltl, Toronto Raptors</h3>
        <p>A traditional center who excels at defending the paint and setting screens, Poeltl would give the Lakers a different dimension on both ends of the floor.</p>
        
        <h3>Target #3: John Collins, Utah Jazz</h3>
        <p>Collins brings versatility and athleticism that could unlock new offensive sets for the Lakers. His ability to stretch the floor would create more space for LeBron to operate.</p>
        
        <p>The Lakers have several trade assets at their disposal, including young players and future draft picks. Expect Rob Pelinka to be aggressive as the deadline approaches.</p>
      `
    },
    "super-bowl-odds": {
      title: "Super Bowl Odds Shift After Conference Championships",
      image: "/images/super-bowl.jpg",
      category: "NFL",
      author: "Tom Anderson",
      date: "January 14, 2026",
      content: `
        <p>The conference championship games delivered shocking upsets that have completely reshuffled the Super Bowl odds. Two underdogs punched their tickets to the big game, sending Vegas oddsmakers scrambling to adjust their lines.</p>
        
        <h3>AFC Championship Upset</h3>
        <p>The sixth-seeded Houston Texans stunned the top-seeded Kansas City Chiefs 27-24 in overtime, ending Kansas City's dynasty run. C.J. Stroud threw for 342 yards and three touchdowns, outdueling Patrick Mahomes in a thriller.</p>
        
        <h3>NFC Championship Shocker</h3>
        <p>The Detroit Lions finally broke through, defeating the San Francisco 49ers 31-28 to reach their first Super Bowl in franchise history. Jared Goff silenced his critics with a masterful performance, and the Lions' defense made key stops when it mattered most.</p>
        
        <h3>Updated Super Bowl Odds</h3>
        <p>Lions: -2.5 favorites<br/>Texans: +2.5 underdogs</p>
        
        <p>The betting public is split on this matchup. The Lions have home-field advantage and momentum, but the Texans have proven they can win in hostile environments. This should be one of the most entertaining Super Bowls in recent memory.</p>
      `
    },
    "march-madness-preview": {
      title: "March Madness 2026: Early Bracket Predictions",
      image: "/images/march-madness.jpg",
      category: "College Sports",
      author: "Rachel Kim",
      date: "January 13, 2026",
      content: `
        <p>It's never too early to start thinking about March Madness. With conference play heating up, we're getting a clearer picture of which teams will be dancing in March and which ones have legitimate Final Four potential.</p>
        
        <h3>Projected #1 Seeds</h3>
        <p><strong>UConn (East):</strong> The defending champions are rolling again, led by a balanced roster and elite coaching.<br/>
        <strong>Purdue (Midwest):</strong> Zach Edey is dominating the Big Ten and looks poised for another Player of the Year campaign.<br/>
        <strong>Houston (South):</strong> The Cougars' suffocating defense makes them a nightmare matchup for anyone.<br/>
        <strong>Arizona (West):</strong> The Wildcats have the most talented roster in the Pac-12 and are clicking at the right time.</p>
        
        <h3>Sleeper Teams to Watch</h3>
        <p>Don't sleep on teams like Marquette, Creighton, and Tennessee. These programs have the coaching, experience, and talent to make deep runs.</p>
        
        <h3>Cinderella Candidates</h3>
        <p>Keep an eye on mid-major powerhouses like San Diego State and Florida Atlantic. Both teams have proven they can compete with power conference schools.</p>
        
        <p>The beauty of March Madness is that anything can happen. Start filling out those brackets now, but be prepared for chaos!</p>
      `
    }
  };

  const article = articles[articleId || ""];

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <a href="/" className="text-blue-600 hover:underline">Return to Homepage</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/">
              <img 
                src="/images/sideline-score-logo.png" 
                alt="Sideline Score" 
                className="h-8 cursor-pointer" style={{width: '100px', height: '100px'}}
              />
            </a>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="container max-w-4xl mx-auto px-6 py-12">
        {/* Category Badge */}
        <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded mb-4">
          {article.category}
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {article.title}
        </h1>

        {/* Byline */}
        <div className="flex items-center gap-3 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <span className="font-medium">{article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-auto"
          />
        </div>

        {/* Article Body */}
        <div 
          className="prose prose-lg max-w-none text-gray-900"
          dangerouslySetInnerHTML={{ __html: article.content }}
          style={{
            color: '#111827'
          }}
        />

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to All Stories
          </a>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-500">
            © 2026 Sideline Score. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
