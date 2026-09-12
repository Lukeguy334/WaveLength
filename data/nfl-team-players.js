// NFL Team draft pool: player names grouped by position, then by price
// tier (a 'legend' tier plus numbered tiers used as the $ cost in-game).
// Used by: nfl-team.html
//
// To add a player: add 'Player Name (TEAM)' to the right position/tier
// array below. Keep the player list current each season as rosters change -
// no other file needs to change when you do.

  window.NFL_TEAM_POSITION_DATA = {
    QB: {
      legend: ['Tom Brady','Peyton Manning','Drew Brees','Ben Rothlisberger','Joe Montana','Steve Young','John Elway','Dan Marino','Aaron Rodgers (Prime)'],
      5: ['Josh Allen (BUF)','Patrick Mahomes (KC)','Lamar Jackson (BAL)','Joe Burrow (CIN)','Matthew Stafford (LAR)'],
      4: ['Jalen Hurts (PHI)','Jordan Love (GB)','Dak Prescott (DAL)','Justin Herbert (LAC)','Drake Maye (NE)'],
      3: ['Baker Mayfield (TB)','Brock Purdy (SF)','Jared Goff (DET)','Trevor Lawrence (JAC)','Sam Darnold (SEA)','Jayden Daniels (WAS)','Bo Nix (DEN)'],
      2: ['C.J. Stroud (HOU)','Kirk Cousins (LV)','Kyler Murray (MIN)','Aaron Rodgers (NYJ)','Caleb Williams (CHI)'],
      1: ['Jacoby Brissett (ARI)','Tyler Shough (NO)','Malik Willis (MIA)','Russell Wilson (PIT)','Justin Fields (PIT)','Bryce Young (CAR)','Anthony Richardson (IND)','Will Levis (TEN)','Deshaun Watson (CLE)',"Aidan O'Connell (LV)",'Tua Tagovailoa (ATL)']
    },
    RB: {
      legend: ['Barry Sanders','Emmit Smith','Walter Payton','Adrian Peterson','Marshawn Lynch (Prime)','Ladanian Tomlinson','Eric Dickerson','Jim Brown','Todd Gurley (Prime)'],
      5: ['Jahmyr Gibbs (DET)','Christian McCaffrey (SF)','Bijan Robinson (ATL)','Saquon Barkley (PHI)'],
      4: ['James Cook (BUF)','Jonathan Taylor (IND)','Derrick Henry (BAL)','Kyren Williams (LAR)'],
      3: ['Breece Hall (NYJ)','Isiah Pacheco (KC)','Josh Jacobs (GB)',"De'Von Achane (MIA)",'Kenneth Walker III (KC)','Joe Mixon (HOU)','Travis Etienne Jr. (JAC)','TreVeyon Henderson (NE)'],
      2: ['Alvin Kamara (NO)','David Montgomery (HOU)','Rachaad White (TB)',"D'Andre Swift (CHI)",'Aaron Jones (MIN)','Rhamondre Stevenson (NE)','Najee Harris (PIT)','James Conner (ARI)','Brian Robinson Jr. (WAS)'],
      1: ['Chuba Hubbard (CAR)','Devin Singletary (NYG)','Tony Pollard (TEN)','Zack Moss (CIN)','Gus Edwards (LAC)','Jerome Ford (CLE)','Javonte Williams (DEN)','Zamir White (LV)']
    },
    WR: {
      legend: ['Jerry Rice','Randy Moss','Calvin Johnson','Julio Jones (Prime)','Terell Owens','Michael Irvin','Cris Carter','Marvin Harrison','Larry Fitzgerald'],
      5: ['Puka Nacua (LAR)','Justin Jefferson (MIN)','CeeDee Lamb (DAL)','Amon-Ra St. Brown (DET)',"Ja'Marr Chase (CIN)",'Jaxon Smith-Njigba (SEA)'],
      4: ['Terry McLaurin (WAS)','Tyreek Hill (MIA)','Nico Collins (HOU)','Garrett Wilson (NYJ)','Drake London (ATL)','George Pickens (DAL)','Malik Nabers (NYG)'],
      3: ['DeVonta Smith (PHI)','Jaylen Waddle (MIA)','DJ Moore (CHI)','DK Metcalf (PIT)','Chris Olave (NO)','Stefon Diggs (WAS)','A.J. Brown (NE)','Davante Adams (LAR)','Mike Evans (SF)','Zay Flowers (BAL)','Tee Higgins (CIN)'],
      2: ['Courtland Sutton (DEN)','Tank Dell (HOU)','Rashee Rice (KC)','Jayden Reed (GB)','Marvin Harrison Jr. (ARI)','Brandon Aiyuk (SF)'],
      1: ['Romeo Doubs (NE)','Diontae Johnson (CAR)','Christian Kirk (JAC)','Khalil Shakir (BUF)','Ladd McConkey (LAC)','Jakobi Meyers (LV)',"Wan'Dale Robinson (NYG)",'Joshua Palmer (LAC)','Jerry Juedy (CLE)']
    },
    TE: {
      legend: ['Rob Gronkowski','Tony Gonzalez','Greg Olsen','Shannon Sharpe','Travis Kelce (Prime)','Jimmy Graham','Antonio Gates','Kellen Winslow Sr.'],
      5: ['Brock Bowers (LV)','Trey McBride (ARI)'],
      4: ['Sam LaPorta (DET)','Travis Kelce (KC)','George Kittle (SF)'],
      3: ['Dalton Kincaid (BUF)','Kyle Pitts (ATL)','Mark Andrews (BAL)','Jake Ferguson (DAL)','Evan Engram (JAC)','David Njoku (CLE)','Dallas Goedert (PHI)','Hunter Henry (NE)'],
      2: ['Cole Kmet (CHI)','Pat Freiermuth (PIT)','Dalton Schultz (HOU)','Taysom Hill (NO)'],
      1: ['Isaiah Likely (BAL)','Chig Okonkwo (TEN)','Noah Fant (SEA)','Jonnu Smith (MIA)','Tucker Kraft (GB)','Ben Sinnott (WAS)']
    },
    DEF: {
      legend: ['1985 Chicago Bears (The Monsters of the Midway)','2000 Baltimore Ravens (The Bullies)','2013 Seattle Seahawks (Legion of Boom)','1976 Pittsburgh Steelers (Steel Curtain)','1970 Minnesota Vikings (Purple People Eaters)','2002 Tampa Bay Buccaneers (Tampa-2)','2015 Denver Broncos (No Fly Zone)'],
      5: ['Houston Texans','Denver Broncos','Seattle Seahawks','Pittsburgh Steelers','Baltimore Ravens','Los Angeles Rams'],
      4: ['Minnesota Vikings','Philadelphia Eagles','New England Patriots','Jacksonville Jaguars','Los Angeles Chargers','Kansas City Chiefs','Detroit Lions'],
      3: ['Buffalo Bills','New York Giants','Green Bay Packers','Chicago Bears','Cleveland Browns','Tampa Bay Buccaneers','San Francisco 49ers'],
      2: ['Indianapolis Colts','Tennessee Titans','Cincinnati Bengals','New York Jets','New Orleans Saints','Dallas Cowboys'],
      1: ['Las Vegas Raiders','Atlanta Falcons','Washington Commanders','Carolina Panthers','Arizona Cardinals','Miami Dolphins']
    },
    DWC: {
      legend: ['Lawrence Taylor','Reggie White','Bruce Smith','Deion Sanders','Brian Dawkins','Sean Taylor','Patrick Willis','Ray Lewis','Ed Reed','Rod Woodson','Troy Palomalu','Luke Kuechly','Ronnie Lott','Champ Baily','Darelle Revis'],
      5: ['Myles Garrett (DE)','T.J. Watt (LB)','Micah Parsons (LB)','Maxx Crosby (DE)','Nick Bosa (DE)','Christian Gonzalez (CB)','Patrick Surtain II (CB)','Will Anderson Jr. (DE)','Jeffery Simmons (DT)','Aaron Donald (DT)'],
      4: ['Nick Emmanwori (CB)','Aidan Hutchinson (DE)','Brian Burns (NYG)','Fred Warner (LB)','Chris Jones (DT)','Roquan Smith (LB)','Kyle Hamilton (S)'],
      3: ['Derwin James (S)','Sauce Gardner (CB)','Josh Allen-Hines (DE)','Danielle Hunter (DE)','Minkah Fitzpatrick (S)','Trent McDuffie (CB)','Antoine Winfield Jr. (S)','Dexter Lawrence (DT)'],
      2: ['Ed Oliver (DE)','Montez Sweat (DE)','Trey Hendrickson (DE)','Demario Davis (LB)',"L'Jarius Sneed (CB)",'Jalen Ramsey (S)','Quinnen Williams (DT)','Jessie Bates III (S)','DaRon Bland (CB)'],
      1: ['Quincy Williams (LB)','Abdul Carter (LB)','Kyle Dugger (S)','Kayvon Thibodeaux (DE)','Alex Anzalone (LB)','Frankie Luvu (LB)','Ivan Pace Jr. (LB)','Cam Taylor-Britt (CB)']
    }
  }
