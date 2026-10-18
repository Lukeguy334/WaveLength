// Minecraft Drinking Game - challenges and rules
// Used by: minecraft-drinking.html
//
// HOW TO ADD YOUR OWN (scroll to the bottom of this file, "YOUR OWN" section):
//
//   rule('Short label', 'Full rule text.');
//     Rule wheel. Always just sips. The short label is what shows on the wheel
//     (keep it under about 28 characters), the full text shows on the card.
//
//   challenge(fromDay, toDay, level, 'Short label', 'Full challenge text.');
//     Challenge wheel. It can only come up from turn `fromDay` through turn
//     `toDay` (one turn = one Minecraft day; turn 1 is the first day). Use 99
//     for "any time from fromDay on". Leave the punishment out of the text, it
//     is added automatically from the level:
//         level 1 = 8 second chug     (very easy challenges only)
//         level 2 = finish your drink
//         level 3 = shotgun a drink
//         level 4 = take a shot
//     Harder challenge = bigger punishment.
//     Optional 6th argument, any of:
//         { avoid: true }  "don't do X" challenge. Whoever breaks it drinks, in both modes.
//         { group: true }  the whole table is judged together, in both modes.
//
// Keep text plain ASCII (straight quotes, no fancy dashes) so the file stays safe to host.

(function () {
  var CH = [], RU = [];
  function challenge(from, to, level, short, text, opts) {
    var c = { from: from, to: to, level: level, short: short, text: text };
    if (opts) { for (var k in opts) { c[k] = opts[k]; } }
    CH.push(c);
  }
  function rule(short, text) { RU.push({ short: short, text: text }); }

  // ================= CHALLENGES =================
  // ---- Day 1: getting set up ----
  challenge(1, 1, 1, 'Build a shelter', 'Build a shelter (a house, a hut, or a dug-in hideout with a door).');
  challenge(1, 1, 1, 'Full wood tools', 'Craft a full set of wooden tools: pickaxe, axe, shovel, and sword.');
  challenge(1, 1, 1, 'Full stone tools', 'Craft a full set of stone tools: pickaxe, axe, shovel, and sword.');
  challenge(1, 2, 1, 'Craft a furnace', 'Craft a furnace and smelt something in it.');
  challenge(1, 2, 1, 'Collect coal', 'Find coal and carry at least 8 pieces.');
  challenge(1, 2, 1, 'Stock a chest', 'Craft a chest and store at least 20 items in it.');
  challenge(1, 2, 1, 'Get cobblestone', 'Carry at least 64 cobblestone.');
  challenge(1, 2, 1, 'Enter a cave', 'Find a cave and walk at least 30 blocks into it.');
  challenge(1, 2, 2, 'Craft a bed', 'Craft a bed.');
  challenge(1, 3, 2, 'Cooked food stash', 'Carry at least 10 pieces of cooked food.');
  challenge(1, 99, 1, 'Group meet-up', 'All players must be within 20 blocks of each other at the end of the day.', { group: true });

  // ---- Day 2: iron age ----
  challenge(2, 2, 2, 'All iron tools', 'Craft all iron tools: pickaxe, axe, shovel, and sword.');
  challenge(2, 3, 2, 'Smelt 10 iron', 'Smelt at least 10 iron ingots.');
  challenge(2, 3, 2, 'Craft a shield', 'Craft a shield.');
  challenge(2, 3, 1, 'Water bucket', 'Craft a bucket and fill it with water.');
  challenge(2, 4, 2, 'Find lapis lazuli', 'Find lapis lazuli.');
  challenge(2, 4, 2, 'Find redstone', 'Find redstone.');
  challenge(2, 6, 2, 'Tame an animal', 'Tame a wolf, cat, or horse.');
  challenge(2, 6, 2, 'Go fishing', 'Craft a fishing rod and catch something.');
  challenge(2, 7, 2, 'Reach bedrock', 'Dig down until you reach bedrock (watch for lava).');

  // ---- Day 3: armor up ----
  challenge(3, 3, 3, 'Full iron armor', 'Craft a full set of iron armor and wear it.');
  challenge(3, 4, 2, '3 pieces of iron', 'Wear at least 3 pieces of iron armor.');
  challenge(3, 6, 2, 'Craft a bow', 'Craft a bow and have at least 10 arrows.');
  challenge(3, 8, 2, 'Find a mineshaft', 'Find an abandoned mineshaft.');
  challenge(3, 10, 3, 'Kill a creeper', 'Kill a creeper before it explodes.');

  // ---- Days 4-5: diamonds ----
  challenge(4, 5, 3, 'Find a diamond', 'Find at least one diamond.');
  challenge(4, 6, 3, 'Diamond pickaxe', 'Craft a diamond pickaxe.');
  challenge(4, 6, 3, 'Diamond sword', 'Craft a diamond sword.');
  challenge(4, 9, 3, 'Build a portal', 'Build and light a Nether portal.');
  challenge(4, 10, 2, 'Enchant something', 'Enchant an item, or find an enchanted item.');
  challenge(5, 8, 3, 'Mine obsidian', 'Mine at least 10 obsidian.');
  challenge(4, 99, 2, 'Trade with a villager', 'Trade with a villager.');

  // ---- Days 6+: the Nether and beyond ----
  challenge(6, 12, 4, 'Enter the Nether', 'Get to the Nether.');
  challenge(6, 14, 3, '3 diamond armor', 'Wear at least 3 pieces of diamond armor.');
  challenge(6, 14, 3, 'Enderman pearl', 'Kill an Enderman and pick up its ender pearl.');
  challenge(6, 99, 3, 'Build a farm', 'Set up a working farm (crops or animals).');
  challenge(7, 14, 3, 'Brew a potion', 'Brew any potion.');
  challenge(8, 16, 4, 'Nether fortress', 'Find a Nether fortress.');
  challenge(8, 16, 4, '3 blaze rods', 'Collect at least 3 blaze rods.');
  challenge(8, 99, 3, 'Enchanted diamond', 'Wear an enchanted diamond armor piece or hold an enchanted diamond tool.');
  challenge(9, 99, 4, 'Full diamond armor', 'Wear a full set of diamond armor.');
  challenge(9, 99, 4, 'Eyes of ender', 'Craft at least 2 eyes of ender.');
  challenge(12, 99, 4, 'Find a stronghold', 'Find a stronghold.');
  challenge(14, 99, 4, 'Reach the End', 'Get to the End dimension.');

  // ---- Any time: exploring and group challenges ----
  challenge(2, 99, 3, 'Find a village', 'Find a village.');
  challenge(2, 99, 3, 'Find a ruined portal', 'Find a ruined portal.');
  challenge(3, 99, 3, 'Find a temple', 'Find a desert temple, jungle temple, or igloo.');
  challenge(3, 99, 3, 'Ocean structure', 'Find a shipwreck, ocean ruin, or ocean monument.');
  challenge(4, 99, 3, 'Pillager outpost', 'Find a pillager outpost.');
  challenge(2, 99, 2, 'Sleep in a bed', 'Sleep in a bed through the night.');
  challenge(3, 99, 2, 'Spread out', 'You and all other players must be at least 1,000 blocks away from each other at the end of this day.', { group: true });
  challenge(2, 99, 3, 'No damage', 'Do not take any damage this day.', { avoid: true });
  challenge(3, 99, 3, 'Do not die', 'Do not die this day.', { avoid: true });

  // ================= RULES =================
  // Always just sips. These are totally random, they do not get harder.
  rule('Say "Block"', 'Every time you say the word "Block", take a sip.');
  rule('Take damage', 'Every time you take damage, take a sip.');
  rule('Eat food', 'Every time you eat in game, take a sip.');
  rule('New structure', 'Every time you find a new structure, take a long sip (about 3 seconds).');
  rule('Creeper hiss', 'Every time you hear a creeper hiss, take a sip.');
  rule('Open a chest', 'Every time you open a chest, take a sip.');
  rule('Kill a mob', 'Every time you kill a mob, take a sip.');
  rule('Mine an ore', 'Every time you mine any ore, take a sip.');
  rule('Place a torch', 'Every time you place a torch, take a sip.');
  rule('Crafting table', 'Every time you open a crafting table, take a sip.');
  rule('Sneak', 'Every time you sneak, take a sip.');
  rule('Villager "hrmm"', 'Every time you hear a villager grunt, take a sip.');
  rule('You die', 'Every time you die, take a sip.');
  rule('See lava', 'Every time you see lava, take a sip.');
  rule('Swimming', 'Every time you swim, take a sip.');
  rule('Boats and carts', 'Every time you ride a boat, minecart, or animal, take a sip.');
  rule('Break a tool', 'Every time a tool or armor piece breaks, take a sip.');
  rule('Check coordinates', 'Every time you check your coordinates, take a sip.');
  rule('Where am I?', 'Every time anyone says "where am I" or "where are you", take a sip.');
  rule('Say "Minecraft"', 'Every time anyone says the word "Minecraft", take a sip.');
  rule('Say "Diamond"', 'Every time anyone says the word "diamond", take a sip.');
  rule('Zombie groan', 'Every time you hear a zombie groan, take a sip.');
  rule('Skeleton shoots', 'Every time a skeleton shoots at you, take a sip.');
  rule('Fall damage', 'Every time you fall and take fall damage, take a sip.');
  rule('Light a fire', 'Every time you place fire, lava, or a flint and steel, take a sip.');
  rule('Use a furnace', 'Every time you put something in a furnace, take a sip.');
  rule('Equip armor', 'Every time you put on a piece of armor, take a sip.');
  rule('Drop an item', 'Every time you drop an item on purpose, take a sip.');
  rule('Place a bucket', 'Every time you place or pick up water or lava with a bucket, take a sip.');
  rule('Enderman stare', 'Every time you see an Enderman, take a sip.');
  rule('Sleep or respawn', 'Every time anyone sleeps in a bed or respawns, take a sip.');
  rule('Say "Okay"', 'Every time you say "okay", take a sip.');
  rule('Read coordinates', 'Every time anyone reads out coordinates, take a sip.');
  rule('Chop a tree', 'Every time you chop down a whole tree, take a sip.');
  rule('Hit a pet', 'Every time you hit or hurt an animal, take a sip.');
  rule('Slip in water', 'Every time you fall into water, take a sip.');
  rule('Cave in the dark', 'Every time you say "it is too dark", take a sip.');
  rule('Lose something', 'Every time you lose an item to lava, void, or a creeper, take a sip.');
  rule('Count 3 hearts', 'Every time you drop to 3 hearts or fewer, take a sip.');

  // ================= YOUR OWN (add below) =================
  // rule('Say "Redstone"', 'Every time anyone says "redstone", take a sip.');
  // challenge(5, 99, 2, 'Build a bridge', 'Build a bridge at least 20 blocks long.');

  window.MC_DRINK = {
    punishments: { 1: '8 second chug', 2: 'finish your drink', 3: 'shotgun a drink', 4: 'take a shot' },
    challenges: CH,
    rules: RU
  };
})();
