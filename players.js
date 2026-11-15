/* =====================================================
   Vortex Tier — PLAYER DATA
   60 Fictional Java PvP Players
   Generated for Vortex Tier
====================================================== */

const GAME_MODES = [
  "vanilla", "uhc", "pot", "sword",
  "axe", "nethpot", "diamond-smp", "mace"
];

const PLAYER_DATA = [
  ["ShadowBD", "vanilla:HT4,uhc:LT4,sword:HT5,mace:LT4"],
  ["NightFuryX", "pot:LT4,axe:HT5,nethpot:LT5"],
  ["BD_Killer", "vanilla:LT4,axe:LT4,mace:HT5"],
  ["VoidWalker", "uhc:HT5,pot:LT5,sword:LT4"],
  ["DarkHunter", "vanilla:HT5,diamond-smp:LT4,mace:LT4"],
  ["Its_Raiden", "sword:HT4,axe:LT5,uhc:LT5"],
  ["FrostBD", "pot:HT5,nethpot:LT4,mace:HT5"],
  ["XenoCraft", "vanilla:LT5,uhc:LT4,axe:HT5"],
  ["RageStorm", "sword:LT4,pot:LT5,diamond-smp:HT5"],
  ["BlazeKiller", "vanilla:HT4,mace:HT5,axe:LT4"],
  ["ProRusher", "uhc:LT5,sword:HT5,nethpot:LT4"],
  ["ToxicBlade", "pot:LT4,vanilla:LT5,mace:LT5"],
  ["BD_Destroyer", "axe:HT4,uhc:HT5,sword:LT5"],
  ["IcePhantom", "diamond-smp:LT4,pot:HT5,mace:HT5"],
  ["Its_Nova", "vanilla:LT4,sword:LT4,axe:HT5"],
  ["VenomXBD", "nethpot:HT5,uhc:LT5,pot:LT4"],
  ["CrazyFighter", "mace:LT4,vanilla:HT5,diamond-smp:LT5"],
  ["DragonBD", "sword:HT4,pot:LT5,axe:LT4"],
  ["SilentKiller", "uhc:HT5,nethpot:LT5,mace:HT4"],
  ["ZeroxPlayz", "vanilla:LT5,diamond-smp:HT5,sword:LT5"],
  ["DemonSlayer", "axe:LT4,pot:HT5,uhc:LT4"],
  ["BD_Ravager", "mace:HT5,sword:LT4,nethpot:LT5"],
  ["ShadowNinja", "vanilla:HT4,axe:HT5,diamond-smp:LT4"],
  ["AlphaRusher", "pot:LT4,uhc:HT5,sword:HT5"],
  ["KillerInstinct", "nethpot:LT4,mace:LT5,vanilla:LT5"],
  ["StormBreaker", "axe:HT4,sword:LT5,uhc:LT4"],
  ["DarkNovaBD", "diamond-smp:HT5,pot:LT4,mace:HT5"],
  ["Its_Blizzard", "vanilla:LT4,nethpot:HT5,axe:LT5"],
  ["GhostRiderBD", "sword:HT5,uhc:LT4,mace:LT4"],
  ["PixelWarrior", "pot:HT4,diamond-smp:LT5,axe:HT5"],
  ["RuthlessBD", "vanilla:HT5,sword:LT4,uhc:LT5"],
  ["AeroFighter", "mace:HT4,pot:LT5,nethpot:LT4"],
  ["DeathShadow", "axe:LT4,diamond-smp:HT5,vanilla:LT5"],
  ["BD_Spartan", "sword:HT4,uhc:LT5,pot:LT4"],
  ["CyberWolf", "nethpot:HT5,mace:LT4,axe:HT5"],
  ["MysticBD", "vanilla:LT4,diamond-smp:LT4,sword:LT5"],
  ["FireStormX", "pot:HT5,uhc:LT4,mace:LT5"],
  ["LegendRusher", "axe:HT4,nethpot:LT5,vanilla:HT5"],
  ["ZeroMercy", "sword:LT4,diamond-smp:HT5,uhc:HT5"],
  ["BD_Overlord", "mace:HT4,axe:LT4,pot:LT5"],
  ["PhantomXBD", "vanilla:HT5,sword:HT5,nethpot:LT4"],
  ["IceDragonX", "uhc:HT4,diamond-smp:LT5,mace:HT5"],
  ["RoguePlayer", "pot:LT4,axe:HT5,vanilla:LT5"],
  ["ThunderBD", "sword:HT4,nethpot:HT5,uhc:LT4"],
  ["KarmaKiller", "mace:LT4,diamond-smp:HT5,pot:HT5"],
  ["Its_Vortex", "vanilla:HT4,axe:LT5,sword:LT4"],
  ["SavageBD", "uhc:HT5,pot:HT4,nethpot:LT5"],
  ["DarkReaper", "diamond-smp:LT4,mace:HT5,vanilla:LT5"],
  ["WolfSlayer", "axe:HT4,sword:LT5,pot:LT4"],
  ["BD_Executor", "nethpot:HT5,uhc:LT4,mace:LT4"],
  ["HyperNova", "vanilla:LT4,sword:HT5,diamond-smp:HT5"],
  ["TornadoBD", "pot:HT4,axe:LT5,uhc:HT5"],
  ["CrimsonX", "mace:HT4,nethpot:LT5,sword:LT4"],
  ["RageQuitBD", "vanilla:HT5,diamond-smp:LT4,axe:HT5"],
  ["FallenAngel", "uhc:HT4,pot:LT5,sword:HT5"],
  ["BD_Warrior", "mace:LT4,vanilla:LT5,nethpot:HT5"],
  ["ToxicShadow", "axe:HT4,diamond-smp:HT5,uhc:LT5"],
  ["EnderRusher", "sword:LT4,pot:HT4,mace:HT5"],
  ["NovaKiller", "vanilla:HT5,uhc:LT4,axe:LT5"],
  ["FinalStrikeBD", "diamond-smp:HT5,nethpot:LT4,sword:HT5"]
];

const TIER_POINTS = {
  HT4: 20,
  LT4: 15,
  HT5: 10,
  LT5: 5
};

const MCRANKED_PLAYERS = PLAYER_DATA
  .map(([name, ranking], index) => {
    const results = {};

    GAME_MODES.forEach(mode => {
      results[mode] = {
        tier: "",
        points: ""
      };
    });

    ranking.split(",").forEach(entry => {
      const [mode, tier] = entry.split(":");

      results[mode] = {
        tier,
        points: TIER_POINTS[tier]
      };
    });

    const totalPoints = Object.values(results)
      .reduce((sum, result) => sum + (Number(result.points) || 0), 0);

    return {
      id: 1795000000000 + index,
      name,
      region: "AS",
      skinUrl: "",
      namemc: "",
      results,
      uuid: "",
      country: "Bangladesh",
      countryCode: "BD",
      flag: "🇧🇩",
      title: "",
      verified: false,
      premium: false,
      tester: false,
      team: "",
      favoriteKit: "",
      bio: "",
      badges: [],
      achievements: [],
      totalPoints,
      position: 0
    };
  })
  .sort((a, b) => b.totalPoints - a.totalPoints)
  .map((player, index) => ({
    ...player,
    position: index + 1
  }));
