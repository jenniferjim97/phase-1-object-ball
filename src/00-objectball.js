
function gameObject(){
 const game = {
     home: {
         teamName:'Brooklyn Nets',
         colors: ['Black, White'],
         players:{
             'Alan Anderson':{
                 number: 0,
                 shoe: 16,
                 points: 22,
                 rebounds: 12,
                 assists: 12,
                 steals: 3,
                 blocks: 1,
                 slamDunks: 1
                },
                'Reggie Evans':{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez':{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds:19,
                    assists: 10,
                    steals:3,
                    Blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee':{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebound: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry':{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
          'away':{
              teamName: 'Charlotte Hornets',
              colors: ['Turquoise, Purple'],
              players:{
                  'Jeff Adrien':{
                      number: 4,
                      shoe: 18,
                      points: 10,
                      rebounds: 1,
                      assist: 1,
                      steals: 2,
                      blocks: 7,
                      slamDunks: 2,
                  },
                  'Bismak Biyombo':{
                      number: 0,
                      shoe: 16,
                      points: 12,
                      rebound: 4,
                      assists: 7,
                      steals: 7,
                      blocks: 15,
                      slamDunks: 10
                  },
                  'DeSagna Diop':{
                      number: 2,
                      shoe: 14,
                      points: 24,
                      rebounds: 12,
                      assists: 12,
                      steals: 4,
                      blocks: 5,
                      slamDunks: 5
                  },
                  'Ben Gordon':{
                      number: 8,
                      shoe: 15,
                      points: 33,
                      rebounds: 3,
                      assists: 2,
                      steals: 1,
                      blocks: 1,
                      slamDunks:0
                  },
                  'Brendan Haywood':{
                      number: 33,
                    shoe: 15,
                      points: 6,
                      rebounds: 12,
                      assists: 12,
                      steals: 22,
                      blocks: 5,
                      slamDunks: 12
                  },
              },
          }, 
 };
 return game; 
 }
 
 const game = gameObject();
 const teams = Object.values(game)


 function  numPointsScored(playerInput) {
 // const playerArrays = Object.entries(players())
 // const player = playerArrays.find(playerArray => playerArray[0] === playerInput)
 return players()[playerInput].points
 }


function homeTeam() {
    return gameObject().home
}
// console.log('This is the home team', homeTeam())
function awayTeam(){
    return gameObject().away
}
// console.log('This is the away team', awayTeam())

function players() {
   // return {...hometeam().players, ...awayTeam().players}
   return  Object.assign({}, homeTeam().players, awayTeam().players)
}


function shoeSize(playerInput) {
return players()[playerInput].shoe
}

// console.log('Alans shoe size', shoeSize('Alan Anderson'))
// console.log('Bens shoe size', shoeSize('Ben Gordon'))

function findTeamName(teamName) {
 return teams.find(team => team.teamName === teamName)
}
// console.log('this team is', findTeamName('Brooklyn Nets'))
// console.log('this team is:', findTeamName('Charlotte Hornets'))

function teamColors(teamName){
return findTeamName(teamName).colors
}
// console.log('The Brooklyn Nets colors are:', teamColors('Brooklyn Nets'))
// console.log('The Charlotte Hornets colors are:', teamColors('Charlotte Hornets'))

function teamNames(){
    return teams.map(team => team.teamName)
}
// console.log('the team names are:', homeTeam(), awayTeam())


function playerNumbers(teamName){
for (const team of teams) {
    if (team.teamName === teamName){
        let stats = Object.values(team.players);
        return stats.map((stat)=> stat.number);
    }
}
}


function playerStats(playerInput){
return players()[playerInput]
}


function bigShoeRebounds(){
    const biggestShoe = Object.values(players).sort((a,b) => {
        if (a.shoe > b.shoe) return -1;
        if (a.shoe > b.shoe) return 1;
        if (a.shoe> b.shoe) return 0;
    })[0]
return biggestShoe.rebounds;
}


function mostPointsScored() {
const sorted = Object.entries(players).sort((a,b) =>{
if (a[1].points > b[1].points) return -1;
if (a[1].points < b[1].points) return 1;
if (a[1].points == b[1].points) return 0;
});
return sorted[0][0];
}


function winningTeam(){
const homeStats = Object.values(game.home.players);
const awayStats = Object.values(game.away.players);
const homeScore = homeStats.reduce((total, stats)=> total + stats.points, 0);
const awayScore = awayStats.reduce((total, stats) => total + stats.points, 0);
if (homeScore > awayScore){
    return game.home.teamName;
} else if (awayScore > homeScore){
    return game.away.teamName;
}
else {
    return "Teams are tied!";
}
}

function playerWithLongestName(){
const longName = Object.keys(players).sort((a,b) => {
if (a.length > b.length) return -1;
if (a.length < b.length) return 1;
if (a.length == b.length) return 0;
})[0];
}

function doesLongNameStealATon(){
    const allStats = Object.values(players);
    const maxSteels =  Math.max(allStats.map((s) => s.steals));
    const longNameSteals = playerStats(playerWithLongestName()).steals;
    return longNameSteals === maxSteels;
}
