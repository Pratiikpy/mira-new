import { ArrowLeft, Calendar, Trophy, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WeeklyTimeline = () => {
  const timelineData = [
    {
      week: 1,
      title: "Visualize the Future",
      description: "Community members created infographics about Mira's vision",
      prize: "$150 USDC",
      participants: 23,
      winner: "WEB3KING10",
      highlight: "First quest launched the campaign with amazing creativity"
    },
    {
      week: 2,
      title: "Community Building",
      description: "Focus on growing and engaging the Discord community",
      prize: "Community Rewards",
      participants: 45,
      winner: "Multiple Winners",
      highlight: "Discord membership grew by 40%"
    },
    {
      week: 3,
      title: "Content Creation Sprint",
      description: "Educational content about blockchain consensus mechanisms",
      prize: "$200 USDC",
      participants: 38,
      winner: "Top Contributors",
      highlight: "High-quality educational content produced"
    },
    {
      week: 4,
      title: "Hallucination Showdown",
      description: "Case studies on AI hallucinations and blockchain solutions",
      prize: "$500 USDC",
      participants: 67,
      winner: "@shayneRFRM",
      highlight: "Most technical and detailed submissions"
    },
    {
      week: 5,
      title: "Mira Lore Expansion",
      description: "Creative storytelling about the Mira universe",
      prize: "$300 USDC",
      participants: 41,
      winner: "Community Choice",
      highlight: "Amazing creative writing and world-building"
    },
    {
      week: 6,
      title: "Consensus for 5-Year-Olds",
      description: "Explain complex blockchain concepts in simple terms",
      prize: "$400 USDC",
      participants: 52,
      winner: "@vivalavida61ltc",
      highlight: "Best educational content for newcomers"
    },
    {
      week: 7,
      title: "Veri Mascot Designs",
      description: "Design contests for the official Mira mascot",
      prize: "$600 USDC",
      participants: 89,
      winner: "@zzuuyy8188",
      highlight: "Record participation with incredible designs"
    },
    {
      week: 8,
      title: "Community Showcase",
      description: "Highlighting community achievements and milestones",
      prize: "$350 USDC",
      participants: 34,
      winner: "Team Effort",
      highlight: "Celebrated community growth and bonds"
    },
    {
      week: 9,
      title: "Technical Deep Dive",
      description: "Advanced technical analysis and documentation",
      prize: "$450 USDC",
      participants: 29,
      winner: "Research Team",
      highlight: "High-quality technical documentation"
    },
    {
      week: 10,
      title: "Grand Finale",
      description: "Campaign culmination with final challenges",
      prize: "$1000 USDC",
      participants: 156,
      winner: "All Participants",
      highlight: "Epic conclusion to an amazing journey"
    }
  ];

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
          <h1 className="text-5xl font-bold mira-text-gradient mb-2">Weekly Timeline</h1>
          <p className="text-muted-foreground text-lg">Complete 10-week journey through the Mira realm</p>
        </div>

        {/* Campaign Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="mira-card text-center">
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-2">10</div>
              <p className="text-muted-foreground">Total Weeks</p>
            </CardContent>
          </Card>
          
          <Card className="mira-card text-center">
            <CardContent className="p-6">
              <Trophy className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-2">$15K</div>
              <p className="text-muted-foreground">Total Prizes</p>
            </CardContent>
          </Card>
          
          <Card className="mira-card text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-2">600+</div>
              <p className="text-muted-foreground">Total Participants</p>
            </CardContent>
          </Card>
          
          <Card className="mira-card text-center">
            <CardContent className="p-6">
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
          
          <div className="space-y-8">
            {timelineData.map((week, index) => (
              <div key={week.week} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                <Card className={`ml-0 md:ml-20 mira-card ${index % 2 === 0 ? 'md:mr-20' : ''}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-space-mono">
                          WEEK {week.week}
                        </span>
                        <span>{week.title}</span>
                      </div>
                      <span className="text-primary font-semibold">{week.prize}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{week.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-primary">{week.participants}</div>
                        <div className="text-sm text-muted-foreground">Participants</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-primary">{week.winner}</div>
                        <div className="text-sm text-muted-foreground">Winner</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-primary">⭐</div>
                        <div className="text-sm text-muted-foreground">Completed</div>
                      </div>
                    </div>
                    
                    <div className="bg-secondary/50 rounded-lg p-3">
                      <p className="text-sm italic">"{week.highlight}"</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Campaign Impact */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Campaign Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="mira-card">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold text-lg mb-2">Community Growth</h3>
                <p className="text-muted-foreground text-sm">Discord membership increased from 80K to 127K members</p>
              </CardContent>
            </Card>
            
            <Card className="mira-card">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">Over 200 unique submissions showcasing creativity</p>
              </CardContent>
            </Card>
            
            <Card className="mira-card">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-semibold text-lg mb-2">Collaboration</h3>
                <p className="text-muted-foreground text-sm">Fostered lasting connections within the community</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WeeklyTimeline;