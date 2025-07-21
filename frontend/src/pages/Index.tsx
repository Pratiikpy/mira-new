import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { getImagePath } from "@/lib/utils";

const Index = () => {
  const gridCards = [
    {
      title: "quest winners",
      description: "Champions of each weekly quest",
      background: "winners_bg.jpg",
      link: "/quest-winners"
    },
    {
      title: "og creators",
      description: "The legends who built our community",
      background: "creators_bg.jpg",
      link: "/og-creators"
    },
    {
      title: "viral moments",
      description: "Most epic tweets and celebrations",
      background: "viral_bg.jpg",
      link: "/viral-moments"
    },
    {
      title: "meme gallery",
      description: "Funniest community creations",
      background: "memes_bg.jpg",
      link: "/meme-gallery"
    },
    {
      title: "weekly timeline",
      description: "Complete 10-week journey",
      background: "timeline_bg.jpg",
      link: "/weekly-timeline"
    },
    {
      title: "community stats",
      description: "Numbers that tell our story",
      background: "stats_bg.jpg",
      link: "/community-stats"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="container mx-auto px-4 pt-12 pb-8 text-center">
        <div className="mb-8">
          <img 
            src={getImagePath('mira_logo.png')} 
            alt="Mira Logo" 
            className="h-16 mx-auto mb-6"
          />
          <h1 className="text-6xl font-bold mb-4">
            <span className="mira-text-gradient">THE REALM OF MIRA</span>
          </h1>
          <h2 className="text-3xl font-semibold text-foreground mb-6">
            Voice of the Realm Archives
          </h2>
          <div className="flex items-center justify-center space-x-4 text-lg text-muted-foreground mb-2">
            <span className="px-4 py-2 bg-secondary rounded-full font-medium">10 Weeks</span>
            <span className="px-4 py-2 bg-secondary rounded-full font-medium">$15,000 USDC</span>
            <span className="px-4 py-2 bg-secondary rounded-full font-medium">Legendary Creators</span>
          </div>
        </div>
      </header>

      {/* Main Grid Section */}
      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {gridCards.map((card, index) => (
            <Link key={index} to={card.link}>
              <Card className="mira-card group cursor-pointer h-80 overflow-hidden">
                <CardContent className="p-0 h-full relative">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${getImagePath(card.background)})` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Veri Mascot */}
                  <div className="absolute top-4 right-4 w-16 h-16 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <img 
                      src={getImagePath('veri_mascot.png')} 
                      alt="Veri Mascot" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-4 group-hover:text-white transition-colors duration-300">
                      {card.description}
                    </p>
                    <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom Archive Link */}
        <div className="text-center">
          <Link 
            to="/community-stats" 
            className="inline-flex items-center text-lg text-primary hover:text-primary/80 transition-colors duration-300 group"
          >
            <span>visit the complete archives to explore more</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-border">
        <p className="text-muted-foreground">
          powered by <span className="text-primary font-medium">Mira Community</span> ❤️
        </p>
      </footer>
    </div>
  );
};

export default Index;
