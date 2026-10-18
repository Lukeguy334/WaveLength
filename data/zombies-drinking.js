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

  // ---- Turn 2 (rounds 4-6): spending points ----
  challenge(2, 2, 2, 'Buy a shotgun or SMG', 'Buy a shotgun or SMG off the wall (spin again if there is none on your map).');
  challenge(2, 3, 2, 'Buy a perk', 'Buy a perk.');
  challenge(2, 3, 2, 'Turn on the power', 'Turn on the power (spin again if it is not needed on your map).');
  challenge(2, 3, 2, 'Spin the box twice', 'Spin the mystery box at least twice (spin again if your map has no box).');
  challenge(2, 3, 2, 'Explosive kills', 'Kill at least 3 zombies with grenades or other explosives this turn.');
  challenge(2, 4, 2, 'Ten headshots', 'Get at least 10 headshot kills this turn.');
  challenge(2, 4, 2, 'Open new areas', 'Open at least 2 new doors or areas.');

  // ---- Turn 3 (rounds 7-9): getting upgraded ----
  challenge(3, 3, 2, 'Pack a rifle', 'Pack-a-Punch a rifle or assault rifle (spin again if your map has no Pack-a-Punch yet).');
  challenge(3, 4, 2, 'Pack any weapon', 'Pack-a-Punch any weapon (spin again if your map has no Pack-a-Punch yet).');
  challenge(3, 4, 2, 'Three perks', 'Have at least 3 perks at the same time.');
  challenge(3, 6, 2, 'Wonder weapon', 'Pull a wonder weapon from the mystery box (spin again if your map has no box).');
  challenge(3, 10, 4, 'Explosives each round', 'Kill at least 3 zombies every round with explosives until the next turn.');
  challenge(3, 5, 2, 'Open 3 areas', 'Open at least 3 new doors or areas.');

  // ---- Turn 4 (rounds 10-12): going big ----
  challenge(4, 5, 3, 'Pack everything', 'Pack-a-Punch all of your weapons (spin again if your map has no Pack-a-Punch).');
  challenge(4, 8, 2, 'All 4 perk slots', 'Fill all 4 of your perk slots (spin again if your map cannot hold 4 perks).');
  challenge(4, 7, 3, 'Five knife kills', 'Get at least 5 knife kills this turn.');
  challenge(4, 8, 4, 'Headshots only', 'Every kill this turn must be a headshot (crawlers and specials are free).');
  challenge(4, 6, 3, 'Two packed guns', 'Hold two Pack-a-Punched weapons at the same time.');

  // ---- Turn 5+ (round 13 and up): staying alive ----
  challenge(5, 99, 3, 'Max loadout', 'Hold two Pack-a-Punched weapons and all 4 perk slots at the same time.');
  challenge(5, 99, 3, 'Wonder in hand', 'End the turn holding a wonder weapon.');
  challenge(5, 99, 3, 'Nobody goes down', 'Nobody goes down this turn.', { group: true });
  challenge(5, 99, 4, 'Untouched', 'Do not take a single hit this turn.', { avoid: true });
  challenge(6, 99, 4, 'All headshots', 'Every kill this turn must be a headshot (crawlers and specials are free).');
  challenge(6, 99, 3, 'Ten knife kills', 'Get at least 10 knife kills this turn.');
  challenge(6, 99, 2, 'No empty guns', 'Do not run out of ammo in any weapon.', { avoid: true });
  challenge(7, 99, 4, 'Explosive rounds', 'Kill at least 5 zombies every round with explosives until the next turn.');

  // ---- Any time ----
  challenge(2, 99, 3, 'Do not go down', 'Do not go down this turn.', { avoid: true });
  challenge(2, 99, 2, 'Revive a teammate', 'Revive a downed teammate (spin again if you are playing solo).');
  challenge(3, 99, 2, 'Use a trap', 'Use a trap, turret, or buildable (spin again if your map has none).');
  challenge(2, 99, 1, 'Team huddle', 'Everyone must be standing within a few steps of each other at the start of the last round of this turn.', { group: true });

  // ================= RULES =================
  // Always just sips. These are totally random, they do not get harder.
  rule('Crouch or lay down', 'Any time you crouch or lay down, take a sip.');
  rule('Take a hit', 'Any time you take a hit, take a sip.');
  rule('Sprint', 'Any time you sprint, take a sip.');
  rule('Power-up sips', 'Any time you get a power-up, take a sip every 5 seconds until it runs out (30 seconds).');
  rule('Staircases', 'Take a sip any time you use a staircase on the map.');
  rule('Voice lines', 'Take a sip any time your character says a voice line.');
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

  // ================= YOUR OWN (add below) =================
  // rule('Say "Samantha"', 'Any time anyone says "Samantha", take a sip.');
  // challenge(3, 99, 2, 'Open the box', 'Spin the mystery box 3 times.');

  window.ZM_DRINK = {
    punishments: { 1: '8 second chug', 2: 'finish your drink', 3: 'shotgun a drink', 4: 'take a shot' },
    challenges: CH,
    rules: RU
  };
})();
