// Black Ops Zombies Drinking Game - challenges and rules
// Written to work in World at War, Black Ops 1, 2, and 3. If your map does not
// have something (no mystery box, no power switch, solo with nobody to revive),
// use the "Can't do this here" button on the page to spin a new challenge.
// Used by: zombies-drinking.html
//
// HOW TO ADD YOUR OWN (scroll to the bottom of this file, "YOUR OWN" section):
//
//   rule('Short label', 'Full rule text.');
//     Rule wheel. Always just sips. The short label is what shows on the wheel
//     (keep it under about 28 characters), the full text shows on the card.
//
//   challenge(fromTurn, toTurn, level, 'Short label', 'Full challenge text.');
//     Challenge wheel. It can only come up from turn `fromTurn` through turn
//     `toTurn`. One turn = 3 in-game rounds:
//         turn 1 = rounds 1-3, turn 2 = rounds 4-6, turn 3 = rounds 7-9, and so on.
//     Use 99 for "any time from fromTurn on". Leave the punishment out of the
//     text, it is added automatically from the level:
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
  // ---- Turn 1 (rounds 1-3): warming up ----
  challenge(1, 1, 1, 'Buy a wall weapon', 'Buy a weapon off the wall.');
  challenge(1, 1, 1, 'Open a door', 'Open at least one door or clear one piece of debris.');
  challenge(1, 2, 1, 'Headshot every round', 'Get at least 2 headshot kills in every round of this turn.');
  challenge(1, 2, 1, 'Knife a zombie', 'Get at least 1 knife kill in every round of this turn.');
  challenge(1, 3, 1, 'Rebuild barricades', 'Rebuild at least 5 boards on window barricades.');
  challenge(1, 3, 1, 'Grenade kill', 'Kill at least 1 zombie with a grenade.');
  challenge(1, 1, 2, 'Spin the box', 'Spin the mystery box at least once (spin again if your map has no box).');
  challenge(1, 1, 2, 'Pistol only', 'Only use your starting pistol and knife for every kill this turn.');
  challenge(1, 2, 2, 'Take no hits', 'Do not take a single hit from a zombie this turn.', { avoid: true });
  challenge(1, 5, 1, 'No empty guns', 'Do not run out of ammo in any weapon.', { avoid: true });
  challenge(1, 2, 1, 'Five body shots', 'Get 5 kills with body shots this turn.');
  challenge(1, 2, 1, 'Hip-fire kills', 'Get 5 kills without aiming down sights this turn.');
  challenge(1, 2, 1, 'One-mag challenge', 'Get 3 kills without reloading your current weapon.');
  challenge(1, 3, 1, 'Point builder', 'Earn at least 500 points from damaging and killing zombies this turn.');
  challenge(1, 3, 1, 'Use both guns', 'Get at least 3 kills with each of your equipped weapons this turn.');
  challenge(1, 2, 1, 'No weapon swaps', 'Do not switch weapons this turn.', { avoid: true });
  challenge(1, 3, 1, 'Keep moving', 'Get at least 10 kills while moving continuously around the map.');
  challenge(1, 3, 1, 'Double grenade', 'Throw at least 2 grenades this turn.');
  challenge(1, 3, 1, 'Save your points', 'End the turn with at least 1000 points.');
  challenge(1, 3, 1, 'No missed shots', 'Do not fire a shot that fails to hit a zombie this turn.', { avoid: true });

  // ---- Turn 2 (rounds 4-6): spending points ----
  challenge(2, 2, 2, 'Buy a shotgun or SMG', 'Buy a shotgun or SMG off the wall (spin again if there is none on your map).');
  challenge(2, 3, 2, 'Buy a perk', 'Buy a perk.');
  challenge(2, 3, 2, 'Turn on the power', 'Turn on the power (spin again if it is not needed on your map).');
  challenge(2, 3, 2, 'Spin the box twice', 'Spin the mystery box at least twice (spin again if your map has no box).');
  challenge(2, 3, 2, 'Explosive kills', 'Kill at least 3 zombies with grenades or other explosives this turn.');
  challenge(2, 4, 2, 'Ten headshots', 'Get at least 10 headshot kills this turn.');
  challenge(2, 4, 2, 'Open new areas', 'Open at least 2 new doors or areas.');
  challenge(2, 3, 2, 'Buy ammunition', 'Purchase ammunition for one of your weapons this turn.');
  challenge(2, 4, 2, 'Two gun types', 'Get at least 5 kills with each of two different weapon types this turn.');
  challenge(2, 4, 2, 'Power-up grab', 'Collect a power-up this turn (spin again if none appears).');
  challenge(2, 4, 2, 'Mystery upgrade', 'Get a weapon from the mystery box that is different from your current weapons (spin again if your map has no box).');
  challenge(2, 4, 2, 'Grenade cluster', 'Damage at least 5 zombies with a single grenade or explosive.');
  challenge(2, 4, 2, 'No perk purchases', 'Do not buy any perks this turn.', { avoid: true });
  challenge(2, 4, 2, 'Ten close kills', 'Get at least 10 kills while standing close enough to a zombie to use a melee attack.');
  challenge(2, 4, 2, 'Spend 1500 points', 'Spend at least 1500 points on weapons, ammunition, doors, or perks this turn.');
  challenge(2, 4, 2, 'Crawler keeper', 'Leave at least one crawler alive at the end of this turn.');
  challenge(2, 4, 2, 'Three power-ups', 'Collect at least 3 power-ups this turn (spin again if fewer than 3 appear).');
  
  // ---- Turn 3 (rounds 7-9): getting upgraded ----
  challenge(3, 3, 2, 'Pack a rifle', 'Pack-a-Punch a rifle or assault rifle (spin again if your map has no Pack-a-Punch yet).');
  challenge(3, 4, 2, 'Pack any weapon', 'Pack-a-Punch any weapon (spin again if your map has no Pack-a-Punch yet).');
  challenge(3, 4, 2, 'Three perks', 'Have at least 3 perks at the same time.');
  challenge(3, 6, 2, 'Wonder weapon', 'Pull a wonder weapon from the mystery box (spin again if your map has no box).');
  challenge(3, 10, 4, 'Explosives each round', 'Kill at least 3 zombies every round with explosives until the next turn.');
  challenge(3, 5, 2, 'Open 3 areas', 'Open at least 3 new doors or areas.');
  challenge(3, 5, 2, 'Box gamble', 'Get a weapon from the mystery box that you have never held during this match (spin again if your map has no box).');
  challenge(3, 5, 2, 'Twenty kills', 'Get at least 20 kills this turn.');
  challenge(3, 5, 2, 'Clean magazine', 'Get at least 5 kills with one magazine without taking a hit.');
  challenge(3, 5, 2, 'Point reserve', 'End the turn with at least 2000 points.');
  challenge(3, 5, 2, 'Explosive streak', 'Kill at least 5 zombies with explosives this turn.');
  challenge(3, 5, 2, 'No downs', 'Do not go down this turn.', { avoid: true });
  challenge(3, 5, 2, 'Two clean rounds', 'Take no hits during at least two complete rounds this turn.', { avoid: true });
  challenge(3, 5, 2, 'Share the kills', 'Get at least 5 kills with each equipped weapon during the same round.');
  challenge(3, 5, 2, 'Buy two weapons', 'Purchase two different weapons this turn (spin again if your map has fewer than two purchasable weapons).');
  challenge(3, 5, 2, 'Power-up streak', 'Collect two power-ups this turn (spin again if fewer than two appear).');

  // ---- Turn 4 (rounds 10-12): going big ----
  challenge(4, 5, 3, 'Pack everything', 'Pack-a-Punch all of your weapons (spin again if your map has no Pack-a-Punch).');
  challenge(4, 8, 2, 'All 4 perk slots', 'Fill all 4 of your perk slots (spin again if your map cannot hold 4 perks).');
  challenge(4, 7, 3, 'Five knife kills', 'Get at least 5 knife kills this turn.');
  challenge(4, 8, 4, 'Headshots only', 'Every kill this turn must be a headshot (crawlers and specials are free).');
  challenge(4, 6, 3, 'Two packed guns', 'Hold two Pack-a-Punched weapons at the same time.');
  challenge(4, 6, 3, 'Thirty kills', 'Get at least 30 kills this turn.');
  challenge(4, 7, 3, 'Three clean rounds', 'Get at least 5 kills in every round without taking a hit in those rounds.');
  challenge(4, 7, 3, 'Keep your points', 'End the turn with at least 3000 points.');
  challenge(4, 7, 3, 'Box jackpot', 'Get a wonder weapon from the mystery box this turn (spin again if your map has no box).');
  challenge(4, 7, 3, 'No missed magazines', 'Do not empty a full magazine without getting at least one kill this turn.', { avoid: true });
  challenge(4, 7, 3, 'Three explosives', 'Kill at least 3 zombies with explosives in each round this turn.');
  challenge(4, 7, 3, 'Team kill target', 'Every player must get at least 10 kills during this turn.', { group: true });
  challenge(4, 7, 3, 'No perk loss', 'Do not lose any perks by going down this turn.', { avoid: true });
  
  // ---- Turn 5+ (round 13 and up): staying alive ----
  challenge(5, 99, 3, 'Max loadout', 'Hold two Pack-a-Punched weapons and all 4 perk slots at the same time.');
  challenge(5, 99, 3, 'Wonder in hand', 'End the turn holding a wonder weapon.');
  challenge(5, 99, 3, 'Nobody goes down', 'Nobody goes down this turn.', { group: true });
  challenge(5, 99, 4, 'Untouched', 'Do not take a single hit this turn.', { avoid: true });
  challenge(6, 99, 4, 'All headshots', 'Every kill this turn must be a headshot (crawlers and specials are free).');
  challenge(6, 99, 3, 'Ten knife kills', 'Get at least 10 knife kills this turn.');
  challenge(6, 99, 2, 'No empty guns', 'Do not run out of ammo in any weapon.', { avoid: true });
  challenge(7, 99, 4, 'Explosive rounds', 'Kill at least 5 zombies every round with explosives until the next turn.');
  challenge(5, 99, 3, 'Fifty kills', 'Get at least 50 kills this turn.');
  challenge(5, 99, 3, 'Two clean rounds', 'Take no hits during at least two complete rounds this turn.', { avoid: true });
  challenge(5, 99, 3, 'Three weapons used', 'Get at least 5 kills with each of three different weapons this turn.');
  challenge(5, 99, 3, 'Point reserve', 'Finish the turn with at least 4000 points.');
  challenge(5, 99, 4, 'Perfect team turn', 'Nobody may take a hit or go down during this turn.', { group: true });
  challenge(5, 99, 3, 'Box wonder', 'Get a wonder weapon from the mystery box this turn (spin again if your map has no box).');
  challenge(5, 99, 3, 'Ten clean kills', 'Get 10 consecutive kills without taking a hit.');
  challenge(5, 99, 3, 'No purchases', 'Do not buy weapons, ammunition, doors, or perks this turn.', { avoid: true });
  challenge(5, 99, 3, 'Team kill target', 'As a team, get at least 50 kills during this turn.', { group: true });
  challenge(5, 99, 3, 'Full ammo finish', 'End the turn with both equipped weapons fully loaded.');

  // ---- Any time ----
  challenge(2, 99, 3, 'Do not go down', 'Do not go down this turn.', { avoid: true });
  challenge(2, 99, 2, 'Revive a teammate', 'Revive a downed teammate (spin again if you are playing solo).');
  challenge(3, 99, 2, 'Use a trap', 'Use a trap, turret, or buildable (spin again if your map has none).');
  challenge(2, 99, 1, 'Team huddle', 'Everyone must stay in the same room for one round during this turn.', { group: true });
  challenge(1, 99, 2, 'New weapon gamble', 'Replace one of your equipped weapons with a different weapon this turn.');
  challenge(2, 99, 2, 'Leave a crawler', 'Leave one crawler alive at the end of this turn before killing it.');
  challenge(1, 99, 2, 'Spend no points', 'Do not spend any points this turn.', { avoid: true });
  challenge(1, 99, 2, 'Spending spree', 'End this turn with less than 1,000 points.', { avoid: true });
  
  // ================= RULES =================
  // Always just sips. These are totally random, they do not get harder.
  rule('Crouch or lay down', 'Any time you crouch or lay down, take a sip.');
  rule('Take a hit', 'Any time you take a hit, take a sip.');
  rule('Sprint', 'Any time you sprint, take a sip.');
  rule('Power-up sips', 'Any time you get a power-up, take a sip every 5 seconds until it runs out (30 seconds).');
  rule('Staircases', 'Take a sip any time you use a staircase on the map.');
  rule('Voice lines', 'Take a sip any time a character says a voice line.');
  rule('See a teammate', 'Take a sip any time you see another player.');
  rule('Buy something', 'Any time you buy something with points, take a sip.');
  rule('Reload', 'Any time you reload, take a sip.');
  rule('Knife swing', 'Any time you swing your knife, take a sip.');
  rule('Throw a grenade', 'Any time you throw a grenade, take a sip.');
  rule('Mystery box', 'Any time you spin the mystery box, take a sip.');
  rule('Round change', 'Any time the round changes, take a sip.');
  rule('Headshot kill', 'Any time you get a headshot kill, take a sip.');
  rule('Crawlers', 'Any time you see a crawler (a zombie with no legs), take a sip.');
  rule('Jump', 'Any time you jump, take a sip.');
  rule('Switch weapons', 'Any time you switch weapons, take a sip.');
  rule('Pick up ammo', 'Any time you pick up ammo or buy ammo, take a sip.');
  rule('Open a door', 'Any time you open a door or clear debris, take a sip.');
  rule('Go down or revive', 'Any time anyone goes down or gets revived, take a sip.');
  rule('Special round', 'Any time a special round or boss round starts, take a sip.');
  rule('Say "Round"', 'Any time anyone says the word "round", take a sip.');
  rule('Say "Zombie"', 'Any time anyone says the word "zombie", take a sip.');
  rule('Announcer', 'Any time you hear a radio or announcer voice, take a sip.');
  rule('Knife kill', 'Any time you get a knife kill, take a sip.');
  rule('Barricades', 'Any time you rebuild a board on a window, take a sip.');
  rule('Run out of ammo', 'Any time your magazine runs empty, take a sip.');
  rule('Perk jingle', 'Any time you buy a perk or hear a perk jingle, take a sip.');
  rule('Low health', 'Any time your screen goes red and blurry, take a sip.');
  rule('Missed shots', 'Any time you empty a whole magazine without getting a kill, take a sip.');
  rule('Max ammo / nuke', 'Any time anyone grabs a Max Ammo or Nuke, take a sip.');
  rule('Standing still', 'Any time you stand still for more than 3 seconds, take a sip.');
  rule('Spending Points', 'Any time you spend points, take a sip.');
  rule('Cursing', 'Any time someone swears, take a sip.');
  
  // ---- Movement ----
rule('Aim down sights', 'Any time you aim down sights, take a sip.');
rule('Walk backward', 'Any time you move backward while a zombie is nearby, take a sip.');
rule('Wall collision', 'Any time you accidentally walk into a wall or obstacle, take a sip.');
rule('Circle strafe', 'Any time you circle around a zombie while shooting, take a sip.');
rule('Missed melee', 'Any time you miss a melee attack, take a sip.');
rule('Jump scare', 'Any time a zombie suddenly appears close to you, take a sip.');
rule('Change direction', 'Any time you sharply change direction to avoid a zombie, take a sip.');
rule('Fall damage', 'Any time your character takes fall damage, take a sip.');
rule('Blocked path', 'Any time a zombie blocks the path you were trying to take, take a sip.');
rule('Accidental turn', 'Any time you turn around because a zombie surprises you from behind, take a sip.');

// ---- Combat ----
rule('Aim and wait', 'Any time you aim at a zombie for more than 3 seconds without firing, take a sip.');
rule('Multi-kill', 'Any time one shot kills at least two zombies, take a sip.');
rule('Miss three shots', 'Any time you miss three consecutive shots, take a sip.');
rule('Explosive blast', 'Any time your explosive damages at least three zombies, take a sip.');
rule('Close call', 'Any time a zombie hits you immediately after you narrowly escape another, take a sip.');
rule('Last bullet', 'Any time you kill a zombie with the final bullet in your magazine, take a sip.');
rule('Weapon jam panic', 'Any time you try to fire while your magazine is empty, take a sip.');
rule('Overkill', 'Any time you use an explosive to kill just one zombie, take a sip.');
rule('Long-distance kill', 'Any time you kill a zombie from far across the map, take a sip.');
rule('Missed grenade', 'Any time your grenade lands far away from every zombie, take a sip.');

// ---- Visual events ----
rule('Zombie spawn', 'Any time you notice a zombie entering the playable area, take a sip.');
rule('Zombie on fire', 'Any time you see a zombie burning, take a sip.');
rule('Zombie pileup', 'Any time three or more zombies crowd into the same small area, take a sip.');
rule('Missed power-up', 'Any time a power-up disappears without anyone collecting it, take a sip.');
rule('See a wall gun', 'Any time you notice a weapon displayed on a wall, take a sip.');
rule('See a perk machine', 'Any time you pass a perk machine without buying a perk, take a sip.');
rule('Zombie climbs', 'Any time you see a zombie climb through a window or over an obstacle, take a sip.');
rule('Exploding zombie', 'Any time a zombie explodes, take a sip.');
rule('Blocked window', 'Any time you see zombies crowding a window, take a sip.');
rule('Mystery box moves', 'Any time the mystery box moves to a different location, take a sip (spin again if your map has no box).');

// ---- Team interactions ----
rule('Teammate misses', 'Any time another player misses three consecutive shots, take a sip.');
rule('Teammate gets trapped', 'Any time another player gets cornered by zombies, take a sip.');
rule('Teammate grenade', 'Any time another player throws a grenade, take a sip.');
rule('Teammate buys', 'Any time another player buys a weapon, ammunition, or a perk, take a sip.');
rule('Teammate changes gun', 'Any time another player switches weapons, take a sip.');
rule('Teammate gets hit', 'Any time another player takes a hit, take a sip.');
rule('Teammate melee', 'Any time another player kills a zombie with a melee attack, take a sip.');
rule('Teammate reloads', 'Any time another player reloads, take a sip.');
rule('Teammate misses box', 'Any time another player gets an unwanted weapon from the mystery box, take a sip (spin again if your map has no box).');
rule('Teammate celebrates', 'Any time another player celebrates a kill out loud, take a sip.');

  // ================= YOUR OWN (add below) =================
  // rule('Say "Samantha"', 'Any time anyone says "Samantha", take a sip.');
  // challenge(3, 99, 2, 'Open the box', 'Spin the mystery box 3 times.');

  window.ZM_DRINK = {
    punishments: { 1: '8 second chug', 2: 'finish your drink', 3: 'shotgun a drink', 4: 'take a shot' },
    challenges: CH,
    rules: RU
  };
})();
