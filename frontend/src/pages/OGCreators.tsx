import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getImagePath } from "@/lib/utils";

const OGCreators = () => {
  const teamMembers = [
    {
      name: "Karan Sirdesai",
      role: "Founder & Visionary",
      twitter: "@karansirdesai",
      pfp: "karan_pfp.png",
      bio: "CEO building the trust layer for AI"
    },
    {
      name: "Stone Gettings",
      role: "Growth Leader",
      twitter: "@stone_gettings",
      pfp: "stone_pfp.png",
      bio: "Head of Growth, community builder"
    },
    {
      name: "Shonik",
      role: "Operations Chief",
      twitter: "@Shonik14",
      pfp: "shonik_pfp.png",
      bio: "Chief of Staff, operations master"
    },
    {
      name: "Shlok",
      role: "Core Developer",
      twitter: "@shlokafc",
      pfp: "shlok_pfp.png",
      bio: "Core team member, tech builder"
    },
    {
      name: "HapChap",
      role: "Co-founder",
      twitter: "@hapchap88",
      pfp: "hapchap_pfp.png",
      bio: "Co-founder, product visionary"
    },
    {
      name: "Asha",
      role: "Core Team Member",
      twitter: "@aashatwt",
      pfp: "aasha_team_member_pfp.jpg",
      bio: "Community builder and growth specialist"
    }
  ];

  const questChampions = [
    {
      name: "Prateek Tripathi",
      twitter: "@prateekhh",
      achievements: "Week 4 & 6 Winner, Ultimate Onboarding Portal Creator",
      badge: "quest_champion_badge.png",
      pfp: "prateekhh_pfp.png",
      notableWork: "Mira Realm Gateway - Complete onboarding system"
    },
    {
      name: "Shayne",
      twitter: "@shayneRFRM",
      achievements: "Week 4 Champion, AI Hallucination Case Study Master",
      badge: "case_study_master_badge.png",
      pfp: "shayneRFRM_pfp.png",
      notableWork: "Combating Hallucinations in AI Agents article"
    },
    {
      name: "BTTB Viva",
      twitter: "@vivalavida61ltc",
      achievements: "Week 6 Champion, Kid-Friendly Consensus Explainer",
      badge: "educator_badge.png",
      pfp: "vivalavida61ltc_pfp.png",
      notableWork: "Consensus mechanism video for 5-year-olds"
    },
    {
      name: "Web3Kevin",
      twitter: "@Vandyim1",
      achievements: "Week 7 Top 3, Veri Meme Master",
      badge: "meme_master_badge.png",
      pfp: "Vandyim1_pfp.png",
      notableWork: "VERI busy creating memes collection"
    },
    {
      name: "zzuuyy8188",
      twitter: "@zzuuyy8188",
      achievements: "Week 7 Winner, Veri Design Champion",
      badge: "design_winner_badge.png",
      pfp: "zzuuyy8188_pfp.png",
      notableWork: "Winning Veri mascot designs"
    }
  ];

  const communityLegends = [
    {
      name: "MNSQ",
      twitter: "@MNSQu",
      achievements: "Week 4 Top 3, Consistent Creator",
      badge: "consistent_creator_badge.png",
      pfp: "MNSQu_pfp.png",
      notableWork: "DID YOU KNOW? MIRA EDITION thread"
    },
    {
      name: "Evan",
      twitter: "@evancrypt",
      achievements: "Top 10 Yapper, Educational Content Master",
      badge: "yapper_legend_badge.png",
      pfp: "evancrypt_pfp.png",
      notableWork: "AI verification ecosystem explanations"
    },
    {
      name: "Miss J",
      twitter: "@Jennychuks7_71",
      achievements: "Week 2 Sherlock Holmes Mascot Designer",
      badge: "mascot_designer_badge.png",
      pfp: "Jennychuks7_71_pfp.png",
      notableWork: "Sherlock Holmes inspired Mira robot detective"
    },
    {
      name: "Paola",
      twitter: "@Paola1371385",
      achievements: "Week 6 Runner-up, Creative Video Producer",
      badge: "video_creator_badge.png",
      pfp: "Paola1371385_pfp.png",
      notableWork: "Supergirl vs AI hallucinations video"
    },
    {
      name: "TheAvatarHQ",
      twitter: "@TheAvatarHQ",
      achievements: "AI News Report Creator, Multiple Quest Participant",
      badge: "news_reporter_badge.png",
      pfp: "TheAvatarHQ_pfp.png",
      notableWork: "3-minute AI hallucinations news report"
    },
    {
      name: "Sherman",
      twitter: "@shermansensei",
      achievements: "Epic Tribute Thread Creator, Community Awards Giver",
      badge: "tribute_master_badge.png",
      pfp: "shermansensei_pfp.png",
      notableWork: "Personal awards given to outstanding creators"
    }
  ];

  const additionalContributors = [
    { name: "Ebubechi GMI", twitter: "@Ebubechi_GMI", badge: "yapper_badge.png", pfp: "Ebubechi_GMI_pfp.png" },
    { name: "WEB3KING", twitter: "@WEB3KING10", badge: "infographic_master_badge.png", pfp: "WEB3KING10_pfp.png" },
    { name: "zkreum", twitter: "@zkreum", badge: "final_tribute_badge.png", pfp: "zkreum_pfp.png" },
    { name: "HYEOK", twitter: "@hyeok8911", badge: "family_educator_badge.png", pfp: "hyeok8911_pfp.png" },
    { name: "Bolaji", twitter: "@BolajiAkinleye1", badge: "3d_artist_badge.png", pfp: "BolajiAkinleye1_pfp.png" },
    { name: "Dorong", twitter: "@dorong_x", badge: "awareness_badge.png", pfp: "dorong_x_pfp.png" },
    { name: "cheff", twitter: "@cheff_eth", badge: "simple_explainer_badge.png", pfp: "cheff_eth_pfp.png" },
    { name: "pulkit126129", twitter: "@pulkit126129", badge: "community_badge.png", pfp: "pulkit126129_pfp.png" },
    { name: "718crncy", twitter: "@718crncy", badge: "runner_up_badge.png", pfp: "718crncy_pfp.png" }
  ];

  const shermanAwards = [
    { award: "Best Storytelling", winner: "@vivalavida61ltc", work: "Week 3 AI rogue video" },
    { award: "Best Visuals", winner: "@vivalavida61ltc", work: "Week 6 consensus video" },
    { award: "Most Unique", winner: "@Jennychuks7_71", work: "Week 2 Sherlock mascot" },
    { award: "Best Idea", winner: "@prateekhh", work: "Week 9 onboarding portal" },
    { award: "Best Writeup", winner: "@shayneRFRM", work: "Week 4 case study" },
    { award: "Most Insightful", winner: "@Paola1371385", work: "Week 8 journalism" },
    { award: "Funniest", winner: "@Vandyim1", work: "Week 7 Veri memes" }
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
          <h1 className="text-5xl font-bold mira-text-gradient mb-2">Mira Legends</h1>
          <p className="text-muted-foreground text-lg">The visionaries and champions who built our realm</p>
        </div>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="mira-card text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-primary overflow-hidden">
                    <img 
                      src={getImagePath(member.pfp)} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling!.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full hidden items-center justify-center text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground mb-2">{member.bio}</p>
                  <a 
                    href={`https://twitter.com/${member.twitter.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 text-sm"
                  >
                    {member.twitter}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quest Champions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Quest Champions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {questChampions.map((champion, index) => (
              <Card key={index} className="mira-card">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-primary overflow-hidden">
                      <img 
                        src={getImagePath(champion.pfp)} 
                        alt={champion.name}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling!.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full hidden items-center justify-center text-lg font-bold text-primary">
                        {champion.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{champion.name}</h3>
                    <a 
                      href={`https://twitter.com/${champion.twitter.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 text-sm flex items-center justify-center"
                    >
                      {champion.twitter}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{champion.achievements}</p>
                  <p className="text-xs text-muted-foreground italic mb-3">"{champion.notableWork}"</p>
                  <div className="flex justify-center">
                    <div className="w-8 h-8 rounded bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-primary text-xs">🏆</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Legends */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Community Legends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityLegends.map((legend, index) => (
              <Card key={index} className="mira-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-lg font-bold text-primary mr-4 overflow-hidden">
                      <img 
                        src={getImagePath(legend.pfp)} 
                        alt={legend.name}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling!.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full hidden items-center justify-center text-lg font-bold text-primary">
                        {legend.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{legend.name}</h3>
                      <a 
                        href={`https://twitter.com/${legend.twitter.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 text-sm flex items-center"
                      >
                        {legend.twitter}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{legend.achievements}</p>
                  <p className="text-xs text-muted-foreground italic mb-3">"{legend.notableWork}"</p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-xs">⭐</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sherman's Awards Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Sherman's Personal Awards</h2>
          <p className="text-muted-foreground mb-8">Special recognition given by @shermansensei to outstanding creators</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {shermanAwards.map((award, index) => (
              <Card key={index} className="mira-card">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🏅</div>
                    <h3 className="font-semibold text-sm mb-1 text-primary">{award.award}</h3>
                    <p className="text-sm font-medium">{award.winner}</p>
                    <p className="text-xs text-muted-foreground">{award.work}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Contributors */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">Additional Contributors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {additionalContributors.map((contributor, index) => (
              <Card key={index} className="mira-card text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-primary overflow-hidden">
                    <img 
                      src={getImagePath(contributor.pfp)} 
                      alt={contributor.name}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling!.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full hidden items-center justify-center text-sm font-bold text-primary">
                      {contributor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{contributor.name}</h3>
                  <a 
                    href={`https://twitter.com/${contributor.twitter.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-xs flex items-center justify-center"
                  >
                    {contributor.twitter}
                    <ExternalLink className="ml-1 h-2 w-2" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OGCreators;