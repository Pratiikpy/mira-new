import { ArrowLeft, Trophy, Medal, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getImagePath } from "@/lib/utils";

const QuestWinners = () => {
  const weeklyWinners = [
    {
      week: 1,
      title: "Visualize the Future",
      winner: {
        name: "WEB3KING10",
        twitter: "@WEB3KING10",
        submission: "Mira Mission Infographic showing AI reliability",
        prize: "$150 USDC",
        pfp: "WEB3KING10_pfp.png"
      }
    },
    {
      week: 2,
      title: "Mascot Design",
      notable: {
        name: "Miss J",
        twitter: "@Jennychuks7_71",
        submission: "Sherlock Holmes inspired Mira robot detective",
        pfp: "Jennychuks7_71_pfp.png"
      }
    },
    {
      week: 3,
      title: "Creative Storytelling",
      notable: {
        name: "BTTB Viva",
        twitter: "@vivalavida61ltc",
        submission: "AI gone rogue due to hallucinations video",
        pfp: "vivalavida61ltc_pfp.png"
      }
    },
    {
      week: 4,
      title: "Hallucination Showdown",
      winners: [
        { place: "1st", name: "Shayne", twitter: "@shayneRFRM", pfp: "shayneRFRM_pfp.png", prize: "$150 USDC" },
        { place: "2nd", name: "Prateek Tripathi", twitter: "@prateekhh", pfp: "prateekhh_pfp.png", prize: "$100 USDC" },
        { place: "3rd", name: "MNSQ", twitter: "@MNSQu", pfp: "MNSQu_pfp.png", prize: "$50 USDC" }
      ],
      runnersUp: [
        "onchaingodson", "greenhandwe", "LamChanThong", "vivalavida61ltc", "TheAvatarHQ", 
        "Jennychuks7_71", "vishleshak89", "long43442", "ponzenomic", "hgkim5055"
      ]
    },
    {
      week: 5,
      title: "Prove You Right Challenge",
      notable: {
        name: "MNSQ",
        twitter: "@MNSQu",
        submission: "DID YOU KNOW? MIRA EDITION using proveyouright.vercel.app",
        pfp: "MNSQu_pfp.png"
      }
    },
    {
      week: 6,
      title: "Consensus for 5-Year-Olds",
      winners: [
        { place: "1st", name: "BTTB Viva", twitter: "@vivalavida61ltc", pfp: "vivalavida61ltc_pfp.png", prize: "$150 USDC" },
        { place: "2nd", name: "Paola", twitter: "@Paola1371385", pfp: "Paola1371385_pfp.png", prize: "$100 USDC" },
        { place: "3rd", name: "Prateek Tripathi", twitter: "@prateekhh", pfp: "prateekhh_pfp.png", prize: "$50 USDC" }
      ],
      runnersUp: [
        "Jennychuks", "ritik_pandey999", "kesoonho", "ponzenomic", "CheesyBun0211", 
        "cerd_x", "Corrina101Young", "tingyan2678", "TheAvatarHQ", "hyeok8911"
      ]
    },
    {
      week: 7,
      title: "Veri Mascot Designs",
      winners: [
        { place: "1st", name: "zzuuyy8188", twitter: "@zzuuyy8188", pfp: "zzuuyy8188_pfp.png", prize: "$150 USDC" },
        { place: "2nd", name: "718crncy", twitter: "@718crncy", pfp: "718crncy_pfp.png", prize: "$100 USDC" },
        { place: "3rd", name: "Vandyim1", twitter: "@Vandyim1", pfp: "Vandyim1_pfp.png", prize: "$50 USDC" }
      ],
      runnersUp: [
        "wnektk333", "yourpassword_is", "70nathan_", "wlgns5388", "MJbosexy", 
        "akhmedovh07", "lisbongg", "NFT99807", "MOONSEO_", "pddprof"
      ]
    },
    {
      week: 8,
      title: "AI Hallucination Journalism",
      notables: [
        { name: "Paola", twitter: "@Paola1371385", submission: "Supergirl investigative journalism video", pfp: "Paola1371385_pfp.png" },
        { name: "TheAvatarHQ", twitter: "@TheAvatarHQ", submission: "5 true stories AI hallucinations news report", pfp: "TheAvatarHQ_pfp.png" }
      ]
    },
    {
      week: 9,
      title: "New Member Onboarding",
      featured: {
        name: "Prateek Tripathi",
        twitter: "@prateekhh",
        submission: "Ultimate onboarding portal - Mira Realm Gateway",
        pfp: "prateekhh_pfp.png"
      }
    }
  ];

  const getPlaceIcon = (place: string) => {
    switch(place) {
      case "1st": return <Trophy className="h-5 w-5 text-yellow-500" />;
      case "2nd": return <Medal className="h-5 w-5 text-gray-400" />;
      case "3rd": return <Award className="h-5 w-5 text-amber-600" />;
      default: return null;
    }
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
          <h1 className="text-5xl font-bold mira-text-gradient mb-2">Quest Champions</h1>
          <p className="text-muted-foreground text-lg">Celebrating the heroes of each weekly challenge</p>
        </div>

        {/* Weekly Breakdown */}
        <div className="space-y-8">
          {weeklyWinners.map((week) => (
            <Card key={week.week} className="mira-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-primary font-space-mono">WEEK {week.week}</span>
                  <span className="text-foreground">{week.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {week.winner ? (
                  // Single winner format (Week 1)
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-primary overflow-hidden">
                      <img 
                        src={getImagePath(week.winner.pfp)} 
                        alt={week.winner.name}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling!.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full hidden items-center justify-center text-lg font-bold text-primary">
                        {week.winner.name.slice(0, 2).toUpperCase()}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Trophy className="h-5 w-5 text-yellow-500" />
                        <h3 className="font-semibold text-lg">{week.winner.name}</h3>
                        <span className="text-primary text-sm">{week.winner.twitter}</span>
                      </div>
                      <p className="text-muted-foreground mb-1">{week.winner.submission}</p>
                      <span className="text-sm font-semibold text-primary">{week.winner.prize}</span>
                    </div>
                  </div>
                ) : week.notable ? (
                  // Notable submission format (Week 2, 3, 5)
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-accent/10 to-secondary/10">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-primary overflow-hidden">
                      <img 
                        src={getImagePath(week.notable.pfp)} 
                        alt={week.notable.name}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling!.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full hidden items-center justify-center text-lg font-bold text-primary">
                        {week.notable.name.slice(0, 2).toUpperCase()}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-lg">{week.notable.name}</h3>
                        <span className="text-primary text-sm">{week.notable.twitter}</span>
                      </div>
                      <p className="text-muted-foreground">{week.notable.submission}</p>
                    </div>
                  </div>
                ) : week.featured ? (
                  // Featured submission format (Week 9)
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-primary overflow-hidden">
                      <img 
                        src={getImagePath(week.featured.pfp)} 
                        alt={week.featured.name}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling!.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full hidden items-center justify-center text-lg font-bold text-primary">
                        {week.featured.name.slice(0, 2).toUpperCase()}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Trophy className="h-5 w-5 text-blue-500" />
                        <h3 className="font-semibold text-lg">{week.featured.name}</h3>
                        <span className="text-primary text-sm">{week.featured.twitter}</span>
                      </div>
                      <p className="text-muted-foreground">{week.featured.submission}</p>
                    </div>
                  </div>
                ) : week.notables ? (
                  // Multiple notables format (Week 8)
                  <div className="space-y-3">
                    {week.notables.map((notable, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/50">
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-primary overflow-hidden">
                          <img 
                            src={getImagePath(notable.pfp)} 
                            alt={notable.name}
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling!.style.display = 'flex';
                            }}
                          />
                          <div className="w-full h-full hidden items-center justify-center text-sm font-bold text-primary">
                            {notable.name.slice(0, 2).toUpperCase()}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Award className="h-4 w-4 text-primary" />
                            <span className="font-semibold">{notable.name}</span>
                            <span className="text-primary text-sm">{notable.twitter}</span>
                          </div>
                          <p className="text-muted-foreground text-sm">{notable.submission}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Multiple winners format
                  <div className="space-y-4">
                    {week.winners && (
                      <div className="space-y-3">
                        {week.winners.map((winner, index) => (
                          <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/50">
                            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-primary overflow-hidden">
                              <img 
                                src={getImagePath(winner.pfp)} 
                                alt={winner.name}
                                className="w-full h-full object-cover rounded-full"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  e.currentTarget.nextElementSibling!.style.display = 'flex';
                                }}
                              />
                              <div className="w-full h-full hidden items-center justify-center text-sm font-bold text-primary">
                                {winner.name.slice(0, 2).toUpperCase()}
                              </div>
                            </div>
                            <div className="flex-1 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                {getPlaceIcon(winner.place)}
                                <span className="font-semibold">{winner.name}</span>
                                <span className="text-primary text-sm">{winner.twitter}</span>
                              </div>
                              {winner.prize && (
                                <span className="text-sm font-semibold text-green-600">{winner.prize}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {week.runnersUp && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-muted-foreground mb-2">Runners-up:</h4>
                        <div className="flex flex-wrap gap-2">
                          {week.runnersUp.map((runner, index) => (
                            <span key={index} className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                              @{runner}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestWinners;