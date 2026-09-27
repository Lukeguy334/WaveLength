// $100,000 Pyramid word banks, split by game mode and difficulty tier.
// Used by: pyramid.html
//
// PYRAMID_MAIN_BANK - Main Game. Each round is ONE secret word/phrase; the
// clue-giver can use full descriptive sentences (prepositions allowed).
// Difficulty rises with the pyramid: easy (bottom row) -> medium (middle
// row) -> hard (top row), matching everyday-concrete -> abstract-verb ->
// rare/abstract-adjective as the round number increases.
//
// PYRAMID_WC_BANK - Winner's Circle. Each entry is a category plus EXACTLY
// 6 answers, same list-only format as the old category bank, but clued
// under the stricter Winner's Circle rules (no prepositional-phrase clues).
// Tiered the same way: easy (concrete lists) -> medium (verbs/descriptions)
// -> hard (abstract/linguistic).
//
// To add: drop a new word into the right MAIN_BANK tier array, or a new
// {title, answers:[...6]} object into the right WC_BANK tier array.

window.PYRAMID_MAIN_BANK = {
  easy: [
    'Elephant','Guitar','Bicycle','Pizza','Umbrella','Toothbrush','Volcano',
    'Kangaroo','Backpack','Lighthouse','Pancake','Snowman','Skateboard',
    'Butterfly','Campfire','Sandwich','Telescope','Pumpkin','Waterfall',
    'Trampoline','Cactus','Firetruck','Popcorn','Jellyfish','Accordion',
    'Bake','Whistle','Scarecrow'
  ],
  medium: [
    'Whisper','Recycle','Procrastinate','Yawn','Negotiate','Improvise',
    'Wobble','Trespass','Fidget','Overreact','Camouflage','Multitask',
    'Eavesdrop','Stumble','Compromise','Daydream','Backtrack','Squint',
    'Hesitate','Renovate','Grumble','Simmer','Meander','Doze',
    'Rehearse','Startle','Unravel','Tinker'
  ],
  hard: [
    'Ambiguous','Nostalgic','Meticulous','Serendipity','Irony','Paradox',
    'Fickle','Ephemeral','Candid','Elusive','Volatile','Obsolete',
    'Redundant','Skeptical','Arbitrary','Belated','Inevitable','Reluctant',
    'Tedious','Subtle','Coy','Frugal','Brazen','Lethargic',
    'Precarious','Petty','Wistful','Audacious'
  ]
};

window.PYRAMID_WC_BANK = {
  easy: [
    { title: 'Things You Find In A Garage', answers: ['A Toolbox', 'A Lawnmower', 'Paint Cans', 'A Bicycle', 'Motor Oil', 'A Ladder'] },
    { title: 'Types Of Fruit', answers: ['Apple', 'Banana', 'Mango', 'Grape', 'Pineapple', 'Watermelon'] },
    { title: 'Things In A Kitchen', answers: ['Refrigerator', 'Stove', 'Sink', 'Cutting Board', 'Toaster', 'Frying Pan'] },
    { title: 'Things That Are Round', answers: ['Basketball', 'Pizza', 'The Moon', 'A Clock Face', 'A Wheel', 'A Coin'] },
    { title: 'Things You Wear On Your Feet', answers: ['Sneakers', 'Socks', 'Sandals', 'Boots', 'Flip-Flops', 'High Heels'] },
    { title: 'Things You Find At The Beach', answers: ['Sand', 'Seashells', 'A Lifeguard', 'A Beach Towel', 'Waves', 'Sunscreen'] },
    { title: 'Things You\'d Find In A Toolbox', answers: ['A Hammer', 'A Screwdriver', 'A Wrench', 'Nails', 'Tape Measure', 'Pliers'] },
    { title: 'Things That Are Yellow', answers: ['A Banana', 'The Sun', 'A School Bus', 'Lemons', 'Corn', 'A Rubber Duck'] },
    { title: 'Things In A First Aid Kit', answers: ['Bandages', 'Antiseptic', 'Gauze', 'Tweezers', 'Pain Relievers', 'Scissors'] },
    { title: 'Things You\'d Find In A Classroom', answers: ['A Chalkboard', 'Desks', 'A Teacher', 'Textbooks', 'A Backpack', 'Chalk'] },
    { title: 'Things You\'d Find In Space', answers: ['A Planet', 'A Star', 'An Astronaut', 'A Rocket', 'The Moon', 'A Comet'] },
    { title: 'Things You\'d Bring On A Camping Trip', answers: ['A Tent', 'A Flashlight', 'A Sleeping Bag', 'Bug Spray', 'A Cooler', 'Marshmallows'] },
    { title: 'Things That Are Green', answers: ['Grass', 'A Frog', 'Broccoli', 'A Shamrock', 'A Cactus', 'Money'] },
    { title: 'Things You Do At A Birthday Party', answers: ['Blow Out Candles', 'Open Presents', 'Sing Happy Birthday', 'Eat Cake', 'Play Games', 'Wear A Party Hat'] }
  ],
  medium: [
    { title: 'Why You Go To The Doctor', answers: ['A Broken Bone', 'The Flu', 'A Check-Up', 'A Bad Cough', 'A Sprained Ankle', 'Vaccinations'] },
    { title: 'Things That Are Sticky', answers: ['Honey', 'Tape', 'Glue', 'Syrup', 'Gum', 'Flypaper'] },
    { title: 'Things That Are Slippery', answers: ['Ice', 'A Banana Peel', 'Wet Soap', 'An Eel', 'Oil', 'A Water Slide'] },
    { title: 'Things That Are Loud', answers: ['A Rock Concert', 'A Jet Engine', 'A Fire Alarm', 'Thunder', 'A Jackhammer', 'A Crying Baby'] },
    { title: 'Things That Are Quiet', answers: ['A Library', 'A Whisper', 'A Sleeping Baby', 'Falling Snow', 'A Graveyard', 'Meditation'] },
    { title: 'Reasons You\'d Be Running Late', answers: ['Traffic', 'Oversleeping', 'Lost Keys', 'A Dead Car Battery', 'A Long Line', 'Bad Weather'] },
    { title: 'Ways To Relax', answers: ['Take A Bath', 'Read A Book', 'Meditate', 'Nap', 'Listen To Music', 'Stretch'] },
    { title: 'Things That Melt', answers: ['Ice Cream', 'Snow', 'Butter', 'Chocolate', 'A Candle', 'An Ice Cube'] },
    { title: 'Things That Bounce', answers: ['A Basketball', 'A Trampoline', 'A Rubber Ball', 'A Kangaroo', 'A Pogo Stick', 'A Yo-Yo'] },
    { title: 'Signs Someone Is Nervous', answers: ['Sweaty Palms', 'Fidgeting', 'Stammering', 'Pacing', 'Biting Nails', 'Avoiding Eye Contact'] },
    { title: 'Reasons To Celebrate', answers: ['A Birthday', 'A Graduation', 'A Promotion', 'An Anniversary', 'A Holiday', 'A New Baby'] },
    { title: 'Things That Take Practice', answers: ['Playing An Instrument', 'Public Speaking', 'A Sport', 'Cooking', 'Driving', 'Painting'] }
  ],
  hard: [
    { title: 'Things That Are Bound', answers: ['A Book', 'Hands In Rope', 'A Legal Contract', 'A Ship Bound For Port', 'Someone Duty-Bound', 'A Scroll'] },
    { title: 'Things That Protrude', answers: ['A Nose', 'A Splinter', 'A Sore Thumb', 'A Cliff Ledge', 'Ears', 'A Pregnant Belly'] },
    { title: 'Things That Are Fleeting', answers: ['A Rainbow', 'Youth', 'A Sunset', 'A Trend', 'A Daydream', 'Fame'] },
    { title: 'Things That Linger', answers: ['A Smell', 'A Cold', 'An Awkward Silence', 'A Grudge', 'A Bad Memory', 'Perfume'] },
    { title: 'Things That Are Rigid', answers: ['A Rule', 'A Steel Beam', 'A Strict Schedule', 'A Cast On A Broken Arm', 'Military Posture', 'Frozen Ground'] },
    { title: 'Things That Dwindle', answers: ['Savings', 'A Crowd', 'Patience', 'Daylight In Winter', 'A Candle Flame', 'Enthusiasm'] },
    { title: 'Things That Are Ornate', answers: ['A Chandelier', 'A Wedding Cake', 'A Cathedral', 'A Royal Gown', 'An Antique Mirror', 'A Music Box'] },
    { title: 'Things That Are Fickle', answers: ['The Weather', 'A Toddler\'s Mood', 'Public Opinion', 'Wi-Fi Signal', 'Luck', 'A Cat'] },
    { title: 'Things That Are Obsolete', answers: ['A Fax Machine', 'A Payphone', 'A VCR', 'A Floppy Disk', 'A Phone Book', 'A Typewriter'] },
    { title: 'Things That Are Understated', answers: ['A Whisper', 'A Nod', 'Plain Clothing', 'A Subtle Hint', 'Minimalist Decor', 'A Quiet Compliment'] }
  ]
};
