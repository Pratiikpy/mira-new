import { ArrowLeft, Laugh, Share2, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getImagePath } from "@/lib/utils";

const MemeGallery = () => {
  // Updated with new meme gallery images - force refresh
  const memes = [
    {
      id: 1,
      title: "By OG Memer",
      creator: "OG_memer",
      likes: 1876,
      category: "Community",
      image: "By OG memer.jpeg"
    },
    {
      id: 2,
      title: "Team Effort",
      creator: "team_builder",
      likes: 2234,
      category: "Community",
      image: "Team efforts.jpeg"
    },
    {
      id: 3,
      title: "Web3 Art",
      creator: "myttle_web3",
      likes: 1543,
      category: "Daily Grind",
      image: "art by @myttle_web3.jpeg"
    },
    {
      id: 4,
      title: "Shivam's Creation",
      creator: "Ojha_shivam_005",
      likes: 1321,
      category: "Mascot Love",
      image: "meme by @Ojha_shivam_005.jpeg"
    },
    {
      id: 5,
      title: "Khodwshm's Meme",
      creator: "khodwshm",
      likes: 1987,
      category: "Campaign Feels",
      image: "meme by @khodwshm.jpeg"
    },
    {
      id: 6,
      title: "Vandyim's Special",
      creator: "Vandyim1",
      likes: 2156,
      category: "Mascot Love",
      image: "meme by Vandyim1.png"
    },
    {
      id: 7,
      title: "Community Post",
      creator: "community_creator",
      likes: 1765,
      category: "Community",
      image: "post by community.jpeg"
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
                <div className="text-3xl font-bold text-primary mb-2">7</div>
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