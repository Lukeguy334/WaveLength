// Jeopardy clue sets for jeopardy.html
// Two selectable board sets: "classic" (mixed trivia) and "nfl" (NFL Jeopardy).
// All clues are original writing, not transcribed from any real broadcast.
window.JEOPARDY_SETS = {
  classic: [
    {
      category: 'World Geography',
      clues: [
        { value: 200, clue: 'This is the only continent that is also a single country.', answer: 'Australia' },
        { value: 400, clue: 'This African river is the longest river in the world.', answer: 'the Nile' },
        { value: 600, clue: 'This South American mountain range is the longest on Earth, running along the continent\'s west coast.', answer: 'the Andes' },
        { value: 800, clue: 'This sea between Europe and Africa gives its name to a type of climate found around it.', answer: 'the Mediterranean Sea' },
        { value: 1000, clue: 'This landlocked country in the Himalayas is home to Mount Everest, which it shares with Tibet.', answer: 'Nepal' }
      ]
    },
    {
      category: 'Movies & TV',
      clues: [
        { value: 200, clue: 'This 1975 Spielberg film about a killer shark kept audiences out of the water.', answer: 'Jaws' },
        { value: 400, clue: 'This green ogre voiced by Mike Myers lives in a swamp with his donkey sidekick.', answer: 'Shrek' },
        { value: 600, clue: 'This HBO series about a Chicago restaurant follows chef Carmy as he tries to turn it around.', answer: 'The Bear' },
        { value: 800, clue: 'This director is known for symmetrical shots and films like The Grand Budapest Hotel.', answer: 'Wes Anderson' },
        { value: 1000, clue: 'This 1994 film told in reverse-chronological order stars Samuel L. Jackson and John Travolta as hitmen.', answer: 'Pulp Fiction' }
      ]
    },
    {
      category: 'Science & Nature',
      clues: [
        { value: 200, clue: 'This gas makes up about 78 percent of Earth\'s atmosphere.', answer: 'nitrogen' },
        { value: 400, clue: 'This is the powerhouse of the cell, generating most of its chemical energy.', answer: 'the mitochondria' },
        { value: 600, clue: 'This planet has the shortest day of any planet in the solar system, rotating once in about 10 hours.', answer: 'Jupiter' },
        { value: 800, clue: 'This process lets plants convert sunlight, water, and carbon dioxide into glucose and oxygen.', answer: 'photosynthesis' },
        { value: 1000, clue: 'This scientist\'s theory of general relativity, published in 1915, redefined gravity as the curvature of spacetime.', answer: 'Albert Einstein' }
      ]
    },
    {
      category: 'History',
      clues: [
        { value: 200, clue: 'This wall dividing a German city fell in 1989, becoming a symbol of the Cold War\'s end.', answer: 'the Berlin Wall' },
        { value: 400, clue: 'This ancient Egyptian queen famously allied with both Julius Caesar and Mark Antony.', answer: 'Cleopatra' },
        { value: 600, clue: 'This 1969 mission put the first humans on the Moon.', answer: 'Apollo 11' },
        { value: 800, clue: 'This 14th-century pandemic killed an estimated third of Europe\'s population.', answer: 'the Black Death' },
        { value: 1000, clue: 'This document, signed in 1215, limited the power of English kings and influenced modern constitutional law.', answer: 'the Magna Carta' }
      ]
    },
    {
      category: 'Word Play',
      clues: [
        { value: 200, clue: 'This seven-letter word for "afraid of heights" starts with the same three letters as a witch\'s broomstick material.', answer: 'acrophobia' },
        { value: 400, clue: 'This word means both "a small stream" and "to complain in a whiny way."', answer: 'a brook / to brook (or "whine")' },
        { value: 600, clue: 'This palindrome is a word for a small boat used for racing, spelled the same forward and backward.', answer: 'a kayak' },
        { value: 800, clue: 'This term for a word that sounds like what it describes, like "buzz" or "sizzle," comes from a Greek phrase meaning "to make a word."', answer: 'onomatopoeia' },
        { value: 1000, clue: 'This word for a fear of long words is, fittingly, itself a very long word.', answer: 'hippopotomonstrosesquippedaliophobia' }
      ]
    }
  ],
  nfl: [
    {
      category: 'Franchise Facts',
      clues: [
        { value: 200, clue: 'This NFL team plays its home games at Lambeau Field in Wisconsin.', answer: 'the Green Bay Packers' },
        { value: 400, clue: 'This AFC East team is nicknamed for a rebellious event tied to Massachusetts history.', answer: 'the New England Patriots' },
        { value: 600, clue: 'This team\'s helmet logo is a horseshoe, and they play home games in Indianapolis.', answer: 'the Indianapolis Colts' },
        { value: 800, clue: 'This franchise relocated from St. Louis back to Los Angeles in 2016.', answer: 'the Los Angeles Rams' },
        { value: 1000, clue: 'This team is the only NFL franchise that is fan-owned rather than privately owned.', answer: 'the Green Bay Packers' }
      ]
    },
    {
      category: 'Record Book',
      clues: [
        { value: 200, clue: 'A touchdown by rule is worth this many points before any extra point or two-point conversion.', answer: 'six' },
        { value: 400, clue: 'This many players from each team are on the field at once during a regular play.', answer: 'eleven' },
        { value: 600, clue: 'This is the maximum number of points a team scores on a single successful play from scrimmage ending in a touchdown plus a two-point conversion.', answer: 'eight' },
        { value: 800, clue: 'A "pick six" refers to this defensive play returned for a touchdown.', answer: 'an interception' },
        { value: 1000, clue: 'This term describes a quarterback throwing for at least 300 yards, running for at least 100, or a similar dual-threat statistical combo depending on context, most famously used for a QB with 300+ passing and 100+ rushing yards in one game.', answer: 'a 300-100 game (dual-threat performance)' }
      ]
    },
    {
      category: 'Super Bowl Moments',
      clues: [
        { value: 200, clue: 'This is the trophy awarded to the winning Super Bowl team each year.', answer: 'the Vince Lombardi Trophy' },
        { value: 400, clue: 'The Super Bowl is traditionally played on this day of the week.', answer: 'Sunday' },
        { value: 600, clue: 'This halftime performance is often watched by as many people as the game itself.', answer: 'the Super Bowl halftime show' },
        { value: 800, clue: 'This quarterback holds the record for the most Super Bowl wins by a player, with seven.', answer: 'Tom Brady' },
        { value: 1000, clue: 'In Super Bowl LI, this team overcame a 28-3 deficit to force overtime and win against the Atlanta Falcons.', answer: 'the New England Patriots' }
      ]
    },
    {
      category: 'Position Players',
      clues: [
        { value: 200, clue: 'This offensive player lines up behind the quarterback and typically carries the ball on running plays.', answer: 'a running back' },
        { value: 400, clue: 'This defensive player\'s main job is to rush the passer from the edge of the offensive line.', answer: 'a defensive end (edge rusher)' },
        { value: 600, clue: 'This special-teams player is responsible for kicking off and attempting field goals.', answer: 'a kicker' },
        { value: 800, clue: 'This offensive lineman protects the quarterback\'s blind side and is usually the highest-paid lineman on the roster.', answer: 'a left tackle' },
        { value: 1000, clue: 'This defensive back position typically covers the slot receiver and must defend both the pass and the run.', answer: 'a nickelback (slot cornerback)' }
      ]
    },
    {
      category: 'Rules & Terms',
      clues: [
        { value: 200, clue: 'This penalty is called when a defender contacts a receiver before the ball arrives, illegally restricting them.', answer: 'pass interference' },
        { value: 400, clue: 'A team gets this many downs to gain 10 yards before losing possession.', answer: 'four' },
        { value: 600, clue: 'This term describes when a team purposely does not advance the ball to run more time off the clock, often near the end of a half.', answer: 'kneeling (taking a knee)' },
        { value: 800, clue: 'This officiating review process lets coaches contest certain calls using a red flag.', answer: 'an instant replay challenge' },
        { value: 1000, clue: 'This rule, which changed overtime so both teams are guaranteed a possession unless the first drive ends in a touchdown, was adjusted most recently for the postseason in 2022.', answer: 'the overtime possession rule' }
      ]
    }
  ]
};
