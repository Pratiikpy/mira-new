import { ArrowLeft, Laugh, Share2, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getImagePath } from "@/lib/utils";

const MemeGallery = () => {
  const memes = [
    {
      id: 1,
      title: "VERI Busy",
      creator: "@Vandyim1",
      likes: 1247,
      category: "Mascot Love",
      image: "veri_busy_meme.png"
    },
    {
      id: 2,
      title: "Veri Adventures",
      creator: "@crypto_memer",
      likes: 892,
      category: "Daily Grind",
      image: "veri_adventures_meme.png"
    },
    {
      id: 3,
      title: "GMIRA Energy",
      creator: "@mira_warrior",
      likes: 1456,
      category: "Campaign Feels",
      image: "gmira_energy_meme.png"
    },
    {
      id: 4,
      title: "Consensus Simplified",
      creator: "@blockchain_eli5",
      likes: 967,
      category: "Educational",
      image: "consensus_simple_meme.png"
    },
    {
      id: 5,
      title: "Teddy Bear Consensus",
      creator: "@cheff_eth",
      likes: 834,
      category: "Educational",
      image: "teddy_bear_meme.png",
      description: "Mira is like smart teddy bears checking banana claims"
    },
    {
      id: 6,
      title: "Quest Life",
      creator: "@web3_builder",
      likes: 734,
      category: "Community",
      image: "quest_life_meme.png"
    },
    {
      id: 7,
      title: "Yapping Legends",
      creator: "@discord_king",
      likes: 2103,
      category: "Community",
      image: "yapping_legends_meme.png"
    }
  ];

  const categories = ["All", "Mascot Love", "Daily Grind", "Campaign Feels", "Community", "Educational"];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4 hover:bg-secondary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-5xl font-bold mira-text-gradient mb-2">Meme Gallery</h1>
          <p className="text-muted-foreground text-lg">The funniest community creations from our realm</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="hover:bg-primary/10"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Memes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {memes.map((meme) => (
            <Card key={meme.id} className="mira-card overflow-hidden group">
              <CardContent className="p-0">
                {/* Meme Image */}
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={getImagePath(meme.image)}
                    alt={meme.title}
                    className="object-contain w-full h-full"
                  />
                </div>
                
                {/* Meme Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">by {meme.creator}</span>
                    <span className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                      {meme.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Laugh className="h-4 w-4" />
                      <span className="text-sm">{meme.likes.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Meme Stats */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">Meme Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="mira-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">247</div>
                <p className="text-muted-foreground">Total Memes Created</p>
              </CardContent>
            </Card>
            
            <Card className="mira-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">89K</div>
                <p className="text-muted-foreground">Total Laughs</p>
              </CardContent>
            </Card>
            
            <Card className="mira-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">156</div>
                <p className="text-muted-foreground">Meme Creators</p>
              </CardContent>
            </Card>
            
            <Card className="mira-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <p className="text-muted-foreground">Viral Hits</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MemeGallery;