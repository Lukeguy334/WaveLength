// Imposter secret-word categories. Everyone but the Imposter sees the same
// word from one of these categories.
// Used by: imposter.html
//
// To add a word: add 'Your Word' to the right category array below.
// To add a category: add a new "'Category Name': [...]" entry - it becomes
// selectable automatically. Categories work best around 12-20 words each
// so a bluffing Imposter has a fair chance of guessing the topic.

  window.IMPOSTER_CATEGORIES = {
    'Food & Drink': ['Pizza','Sushi','Tacos','Pancakes','Ice Cream','Coffee','Spaghetti','Burger','Popcorn','Watermelon','Hot Sauce','Birthday Cake','Lemonade','Bacon','Cereal','Donut','Waffle','Pretzel','Nachos','Burrito','Hot Dog','Pancake Syrup','Cupcake','Brownie','Cookie',
    'French Fries','Milkshake','Smoothie','Apple Pie','Cheesecake','Grapes','Strawberry','Banana','Pineapple','Mango',
    'Orange Juice','Tea','Soda','Ketchup','Mustard','Marshmallow','Chocolate','Peanut Butter','Sandwich','Quesadilla'
                    
  ],
    'Places': ['Museum','School','Grocery Store','Restaurant','Movie Theater','Hotel','Train Station','Police Station','Fire Station','Stadium',
    'Theme Park','Aquarium','Campground','Water Park','Skyscraper','Bridge','Lighthouse','Jungle','Rainforest','Cave',
    'Island','Mountain','River','Lake','Parking Garage','Gas Station','Bakery','Mall','Farmers Market','Train','Beach','Airport','Library','Hospital','Amusement Park','Desert Island','Haunted House','Ski Resort','Zoo','Subway','Farm','Castle','Space Station','Volcano','Campsite'
              
  ],
    'Jobs': ['Mechanic','Veterinarian','Architect','Engineer','Scientist','Lawyer','Judge','Nurse','Paramedic','Mail Carrier',
    'Cashier','Waiter','Barber','Musician','Actor','Artist','Writer','Coach','Journalist','Construction Worker',
    'Electrician','Carpenter','Baker','Florist','Pilot Instructor','Bus Driver','Tour Guide','Magician','DJ','Game Designer','Firefighter','Dentist','Chef','Pilot','Teacher','Lifeguard','Detective','Farmer','Astronaut','Plumber','Photographer','Librarian','Referee','Tattoo Artist','Zookeeper'
  ],
    'Animals': ['Lion','Tiger','Bear','Wolf','Fox','Deer','Giraffe','Zebra','Monkey','Gorilla',
    'Crocodile','Alligator','Turtle','Frog','Snake','Lizard','Butterfly','Bee','Ant','Ladybug',
    'Dolphin','Whale','Seal','Walrus','Crab','Lobster','Starfish','Seahorse','Parrot','Toucan''Elephant','Penguin','Octopus','Kangaroo','Shark','Flamingo','Gorilla','Hedgehog','Peacock','Chameleon','Sloth','Rhino','Owl','Jellyfish','Platypus'
  ],
    'Everyday Objects': ['Keys','Scissors','Hammer','Screwdriver','Ruler','Pen','Pencil','Eraser','Notebook','Backpack',
    'Broom','Mop','Vacuum Cleaner','Trash Can','Doorbell','Doormat','Hanger','Comb','Hair Dryer','Soap',
    'Towel','Shampoo','Remote Control','Television','Computer Mouse','Keyboard','Camera','Tripod','Suitcase','Bicycle','Umbrella','Backpack','Toothbrush','Flashlight','Mirror','Alarm Clock','Sunglasses','Blender','Stapler','Pillow','Candle','Wallet','Headphones','Ladder','Thermometer'
  ],
    'Sports & Games': ['Soccer','Baseball','Football','Tennis','Volleyball','Hockey','Cricket','Rugby','Wrestling','Karate',
    'Judo','Table Tennis','Badminton','Pickleball','Skateboard Race','Marathon','Relay Race','High Jump','Long Jump','Shot Put',
    'Checkers','Monopoly','Uno','Poker','Jenga','Dominoes','Billiards','Foosball','Hide and Seek','Musical Chairs','Basketball','Bowling','Chess','Surfing','Archery','Gymnastics','Dodgeball','Golf','Boxing','Skateboarding','Fencing','Darts','Rock Climbing','Curling','Tug of War'
  ],
    'Nature & Weather': ['Hurricane','Lightning','Hailstorm','Drizzle','Heat Wave','Frost','Icicle','Snowflake','Sunset','Moonlight',
    'Eclipse','Northern Lights','Comet','Planet','Full Moon','Cliff','Canyon','Water Lily','Coral Reef','Rainforest',
    'Meadow','Swamp','Pond','Riverbank','Sand Dune','Pine Forest','Boulder','Geyser','Hot Spring','Wildflower','Thunderstorm','Rainbow','Avalanche','Waterfall','Blizzard','Sunrise','Earthquake','Tornado','Glacier','Tide Pool','Fog','Wildfire','Quicksand','Meteor Shower','Drought'
  ],
    'Fantasy & Fiction': ['Witch','Goblin','Troll','Vampire Hunter','Sorcerer','Princess','King','Queen','Fairy Tale','Magic Wand',
    'Treasure Map','Crystal Ball','Flying Carpet','Magic Potion','Haunted Castle','Invisible Man','Time Traveler','Space Pirate','Supervillain',
    'Mermaid Lagoon','Monster','Cyclops','Unicorn','Griffin','Phoenix','Centaur','Kraken','Yeti','Sphinx','Dragon','Wizard','Pirate Ship','Time Machine','Vampire','Genie','Robot','Mermaid','Ghost','Superhero','Alien','Zombie','Fairy','Knight','Werewolf'
  ],
    'Transportation': ['Car','Bus','Train','Airplane','Helicopter','Boat','Cruise Ship','Submarine','Motorcycle','Scooter',
    'Taxi','Ambulance','Fire Truck','Police Car','Tractor','Bulldozer','Rocket','Hot Air Balloon','Canoe','Kayak',
    'Skateboard','Roller Skates','Wheelchair','Cable Car','Limousine','Race Car','Sailboat','Jet Ski','Snowmobile','Trolley'
  ],

  'Entertainment': [
    'Concert','Circus','Karaoke','Magic Show','Talent Show','Movie','TV Show','Play','Musical','Opera',
    'Stand-Up Comedy','Puppet Show','Fireworks','Parade','Carnival','Dance Party','Photo Booth','Arcade','Board Game Night','Sleepover',
    'Red Carpet','Award Show','Backstage','Movie Set','Recording Studio','Dance Floor','Ticket Booth','Costume Party','Fan Convention','Street Performer'
  ],

  'School & Classroom': [
    'Blackboard','Whiteboard','Chalk','Marker','Glue','Crayon','Paintbrush','Scissors Case','Calculator','Textbook',
    'Homework','Test','Quiz','Report Card','School Bus','Locker','Desk','School Bell','Principal','Student',
    'Recess','Lunchroom','Gym Class','Science Fair','Field Trip','Graduation','Yearbook','School Play','Detention','School Mascot'
  ],

  'Household & Home': [
    'Refrigerator','Oven','Microwave','Dishwasher','Washing Machine','Dryer','Sofa','Dining Table','Bookshelf','Bed',
    'Nightstand','Dresser','Curtains','Rug','Lamp','Fan','Air Conditioner','Ceiling Fan','Picture Frame','Clock',
    'Flower Pot','Plant','Kitchen Sink','Bathtub','Shower','Toilet','Garage','Attic','Basement','Chimney'
  ],

  'Holidays & Celebrations': [
    'Christmas Tree','Menorah','Pumpkin','Easter Egg','Candy Cane','Stocking','Birthday Candle','Confetti','Balloons','Party Hat',
    'Gift Box','Wrapping Paper','Greeting Card','Firecracker','Turkey Dinner','Costume','Jack-o-Lantern','Snowman','Mistletoe','Holiday Lights',
    'Wedding','Wedding Cake','Wedding Ring','Graduation Cap','Trophy','Medal','Parade Float','Picnic','Barbecue','New Year Countdown'
  ],

  'Adventure & Exploration': [
    'Treasure Hunt','Compass','Map','Binoculars','Tent','Sleeping Bag','Hiking Boots','Backpack','Campfire','Flashlight',
    'Canoe Trip','Safari','Scuba Diving','Skydiving','Zip Line','Bungee Jumping','Mountain Climbing','Caving','Jungle Expedition','Desert Trek',
    'Lost City','Treasure Chest','Secret Tunnel','Hidden Temple','Ancient Ruins','Pirate Treasure','Expedition','Base Camp','Explorer','Survival Kit'
  ]
  
  
  }
