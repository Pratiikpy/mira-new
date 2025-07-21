// src/assets/images.ts
// Vercel-compatible image path resolver

// Map of image name aliases to actual file names that exist
export const imageMapping: Record<string, string> = {
  // Existing images with exact matches
  'mira_logo': 'mira_logo.png',
  'mira_logo.png': 'mira_logo.png',
  
  // Veri mascot - use logo as fallback since mascot is missing
  'veri_mascot': 'mira_logo.png',
  'veri_mascot.png': 'mira_logo.png',
  
  // Background images mapped to existing viral content
  'winners_bg.jpg': 'community_awards_graphic.jpeg',
  'creators_bg.jpg': 'viral_campaign_launch.jpeg', 
  'viral_bg.jpg': 'viral_gmira_meme.jpeg',
  'memes_bg.jpg': 'viral_veri_tour.jpeg',
  'timeline_bg.jpg': 'yapper_leaderboard_announcement.jpeg',
  'stats_bg.jpg': 'viral_iykyk_teaser.png',
  
  // Map viral moment images to existing files
  'viral_launch_tweet.png': 'viral_campaign_launch.jpeg',
  'viral_gmira_meme.png': 'viral_gmira_meme.jpeg',
  'viral_veri_tour.png': 'viral_veri_tour.jpeg', 
  'viral_iykyk_tweet.png': 'viral_iykyk_teaser.png',
  'yapper_leaderboard_launch.png': 'yapper_leaderboard_announcement.jpeg',
  'sherman_awards_thread.png': 'community_awards_graphic.jpeg',
  
  // Meme images mapped to existing viral content
  'veri_busy_meme.png': 'viral_veri_tour.jpeg',
  'veri_adventures_meme.png': 'viral_gmira_meme.jpeg',
  'gmira_energy_meme.png': 'viral_gmira_meme.jpeg',
  'consensus_simple_meme.png': 'community_awards_graphic.jpeg',
  'teddy_bear_meme.png': 'viral_iykyk_teaser.png',
  'quest_life_meme.png': 'viral_campaign_launch.jpeg',
  'yapping_legends_meme.png': 'yapper_leaderboard_announcement.jpeg',
  
  // New meme images from gallery folder
  'By OG memer.jpeg': 'By OG memer.jpeg',
  'Team efforts.jpeg': 'Team efforts.jpeg',
  'art by @myttle_web3.jpeg': 'art by @myttle_web3.jpeg',
  'meme by @Ojha_shivam_005.jpeg': 'meme by @Ojha_shivam_005.jpeg',
  'meme by @khodwshm.jpeg': 'meme by @khodwshm.jpeg',
  'meme by Vandyim1.png': 'meme by Vandyim1.png',
  'post by community.jpeg': 'post by community.jpeg',
  
  // Direct mappings for existing files
  'community_awards_graphic.jpeg': 'community_awards_graphic.jpeg',
  'viral_campaign_launch.jpeg': 'viral_campaign_launch.jpeg',
  'viral_gmira_meme.jpeg': 'viral_gmira_meme.jpeg',
  'viral_iykyk_teaser.png': 'viral_iykyk_teaser.png',
  'viral_veri_tour.jpeg': 'viral_veri_tour.jpeg',
  'yapper_leaderboard_announcement.jpeg': 'yapper_leaderboard_announcement.jpeg',
  
  // Profile Pictures - Map all existing pfp images
  // Core Team
  'karan_pfp.png': 'karan_pfp.jpg',
  'karan_pfp.jpg': 'karan_pfp.jpg',
  'stone_pfp.png': 'stone_pfp.jpg', 
  'stone_pfp.jpg': 'stone_pfp.jpg',
  'shonik_pfp.png': 'shonik_pfp.jpg',
  'shonik_pfp.jpg': 'shonik_pfp.jpg',
  'shlok_pfp.png': 'shlok_pfp.jpg',
  'shlok_pfp.jpg': 'shlok_pfp.jpg',
  'hapchap_pfp.png': 'hapchap_pfp.jpg',
  'hapchap_pfp.jpg': 'hapchap_pfp.jpg',
  
  // Quest Champions
  'prateekhh_pfp.png': 'prateekhh_pfp.jpg',
  'prateekhh_pfp.jpg': 'prateekhh_pfp.jpg',
  'shayneRFRM_pfp.png': 'shayneRFRM_pfp.jpg',
  'shayneRFRM_pfp.jpg': 'shayneRFRM_pfp.jpg',
  'vivalavida61ltc_pfp.png': 'vivalavida61ltc_pfp.jpg',
  'vivalavida61ltc_pfp.jpg': 'vivalavida61ltc_pfp.jpg',
  'Vandyim1_pfp.png': 'Vandyim1_pfp.jpg',
  'Vandyim1_pfp.jpg': 'Vandyim1_pfp.jpg',
  'zzuuyy8188_pfp.png': 'zzuuyy8188_pfp.jpg',
  'zzuuyy8188_pfp.jpg': 'zzuuyy8188_pfp.jpg',
  
  // Community Legends
  'MNSQu_pfp.png': 'MNSQu_pfp..jpg',
  'MNSQu_pfp.jpg': 'MNSQu_pfp..jpg',
  'evancrypt_pfp.png': 'evancrypt_pfp.jpg',
  'evancrypt_pfp.jpg': 'evancrypt_pfp.jpg',
  'Jennychuks7_71_pfp.png': 'Jennychuks7_71_pfp.jpeg',
  'Jennychuks7_71_pfp.jpeg': 'Jennychuks7_71_pfp.jpeg',
  'Paola1371385_pfp.png': 'Paola1371385_pfp.jpg',
  'Paola1371385_pfp.jpg': 'Paola1371385_pfp.jpg',
  'TheAvatarHQ_pfp.png': 'TheAvatarHQ_pfp.jpg',
  'TheAvatarHQ_pfp.jpg': 'TheAvatarHQ_pfp.jpg',
  'shermansensei_pfp.png': 'shermansensei_pfp.jpg',
  'shermansensei_pfp.jpg': 'shermansensei_pfp.jpg',
  
  // Additional Contributors
  'Ebubechi_GMI_pfp.png': 'Ebubechi_GMI_pfp.jpg',
  'Ebubechi_GMI_pfp.jpg': 'Ebubechi_GMI_pfp.jpg',
  'WEB3KING10_pfp.png': 'WEB3KING10_pfp.jpg',
  'WEB3KING10_pfp.jpg': 'WEB3KING10_pfp.jpg',
  'zkreum_pfp.png': 'zkreum_pfp.jpg',
  'zkreum_pfp.jpg': 'zkreum_pfp.jpg',
  'hyeok8911_pfp.png': 'hyeok8911_pfp.jpg',
  'hyeok8911_pfp.jpg': 'hyeok8911_pfp.jpg',
  'BolajiAkinleye1_pfp.png': 'BolajiAkinleye1_pfp.jpg',
  'BolajiAkinleye1_pfp.jpg': 'BolajiAkinleye1_pfp.jpg',
  'dorong_x_pfp.png': 'dorong_x_pfp.jpg',
  'dorong_x_pfp.jpg': 'dorong_x_pfp.jpg',
  'cheff_eth_pfp.png': 'cheff_eth_pfp.jpg',
  'cheff_eth_pfp.jpg': 'cheff_eth_pfp.jpg',
  'pulkit126129_pfp.png': 'pulkit126129_pfp.jpg',
  'pulkit126129_pfp.jpg': 'pulkit126129_pfp.jpg',
  '718crncy_pfp.png': '718crncy_pfp.jpg',
  '718crncy_pfp.jpg': '718crncy_pfp.jpg',
  
  // Additional pfp images that might be referenced elsewhere
  '70nathan__pfp.jpg': '70nathan__pfp.jpg',
  'CheesyBun0211_pfp.jpg': 'CheesyBun0211_pfp.jpg',
  'Corrina101Young_pfp.jpg': 'Corrina101Young_pfp.jpg',
  'LamChanThong_pfp.jpg': 'LamChanThong_pfp.jpg',
  'MJbosexy_pfp.jpg': 'MJbosexy_pfp.jpg',
  'MOONSEO__pfp.jpg': 'MOONSEO__pfp.jpg',
  'NFT99807_pfp.jpg': 'NFT99807_pfp.jpg',
  'akhmedovh07_pfp.jpg': 'akhmedovh07_pfp.jpg',
  'cerd_x_pfp.jpg': 'cerd_x_pfp.jpg',
  'greenhandwe_pfp.jpg': 'greenhandwe_pfp.jpg',
  'hgkim5055_pfp.jpg': 'hgkim5055_pfp.jpg',
  'kesoonho_pfp.jpg': 'kesoonho_pfp.jpg',
  'lisbongg_pfp.jpg': 'lisbongg_pfp.jpg',
  'long43442_pfp.jpg': 'long43442_pfp.jpg',
  'onchaingodson_pfp.jpeg': 'onchaingodson_pfp.jpeg',
  'ponzenomic_pfp.jpg': 'ponzenomic_pfp.jpg',
  'ritik_pandey999_pfp.jpg': 'ritik_pandey999_pfp.jpg',
  'tingyan2678_pfp.jpg': 'tingyan2678_pfp.jpg',
  'vishleshak89_pfp.jpg': 'vishleshak89_pfp.jpg',
  'wlgns5388_pfp.png': 'wlgns5388_pfp.png',
  'wnektk333_pfp.jpg': 'wnektk333_pfp.jpg',
  'yourpassword_is_pfp.png': 'yourpassword_is_pfp.png',
};

export function getImagePath(imageName: string): string {
  // Check if we have a mapped version of this image
  const mappedImage = imageMapping[imageName];
  if (mappedImage) {
    return `/mira-images/${mappedImage}`;
  }
  
  // Check if image exists by name (fallback for existing images like profile pics)
  return `/mira-images/${imageName}`;
} 