import { ArrowLeft, TrendingUp, Users, MessageCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CommunityStats = () => {
  const mainStats = [
    { label: "Total Quests", value: "10", icon: Award },
    { label: "Total Prize Pool", value: "$15,000", subtext: "USDC", icon: TrendingUp },
    { label: "Weekly Prizes", value: "$5,000", subtext: "USDC distributed", icon: Award },
    { label: "Main Crusade", value: "$10,000", subtext: "USDC", icon: TrendingUp },
    { label: "Total Submissions", value: "200+", icon: MessageCircle },
    { label: "Community Members", value: "127,000+", subtext: "Discord", icon: Users },
    { label: "Yapper Reward", value: "0.5%", subtext: "token supply", icon: Award },
    { label: "Funding Raised", value: "$9M", icon: TrendingUp },
    { label: "Users Powered", value: "4M+", icon: Users }
  ];

  const topYappers = [
    { rank: 1, name: "CryptoKing", messages: 2847, pfp: "A" },
    { rank: 2, name: "MiraEnthusiast", messages: 2156, pfp: "B" },
    { rank: 3, name: "BlockchainBob", messages: 1943, pfp: "C" },
    { rank: 4, name: "VeriLover", messages: 1782, pfp: "D" },
    { rank: 5, name: "ConsensusQueen", messages: 1654, pfp: "E" },
    { rank: 6, name: "DefiDave", messages: 1523, pfp: "F" },
    { rank: 7, name: "NFTNinja", messages: 1467, pfp: "G" },
    { rank: 8, name: "Web3Wizard", messages: 1389, pfp: "H" },
    { rank: 9, name: "TokenTitan", messages: 1298, pfp: "I" },
    { rank: 10, name: "CryptoChampion", messages: 1234, pfp: "J" }
  ];

  const getRankBadge = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return `#${rank}`;
  };

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
          <h1 className="text-5xl font-bold mira-text-gradient mb-2">Community Stats</h1>
          <p className="text-muted-foreground text-lg">Numbers that tell our incredible story</p>
        </div>

        {/* Main Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Campaign Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="mira-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <IconComponent className="h-8 w-8 text-primary" />
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary font-space-mono">
                          {stat.value}
                        </div>
                        {stat.subtext && (
                          <div className="text-sm text-muted-foreground">{stat.subtext}</div>
                        )}
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground">{stat.label}</h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Top Yappers Leaderboard */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Top Yappers Leaderboard</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top 3 Podium */}
            <Card className="mira-card">
              <CardHeader>
                <CardTitle>Hall of Fame</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topYappers.slice(0, 3).map((yapper) => (
                    <div key={yapper.rank} className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10">
                      <div className="text-2xl">{getRankBadge(yapper.rank)}</div>
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-primary">
                        {yapper.pfp}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{yapper.name}</h3>
                        <p className="text-sm text-muted-foreground">{yapper.messages.toLocaleString()} messages</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rest of Top 10 */}
            <Card className="mira-card">
              <CardHeader>
                <CardTitle>Top Contributors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topYappers.slice(3).map((yapper) => (
                    <div key={yapper.rank} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-semibold text-muted-foreground w-8">#{yapper.rank}</span>
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                          {yapper.pfp}
                        </div>
                        <span className="font-medium">{yapper.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{yapper.messages.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Metrics */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">Platform Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="mira-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">📊</div>
                <div className="text-2xl font-bold text-primary mb-2">89%</div>
                <p className="text-muted-foreground">Engagement Rate</p>
              </CardContent>
            </Card>
            
            <Card className="mira-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">🌐</div>
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Countries Reached</p>
              </CardContent>
            </Card>
            
            <Card className="mira-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">⏱️</div>
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Community Activity</p>
              </CardContent>
            </Card>
            
            <Card className="mira-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">🎯</div>
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Goal Achievement</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunityStats;