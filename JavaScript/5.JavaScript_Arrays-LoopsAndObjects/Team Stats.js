/*
We want a data structure to store the information about our team. Create an empty team object.
*/
const team = {
    /*
    - Our team has players, and the team plays games. We want to represent both of these. Add two properties to your team object. A _players property and a _games property that are both initialized to empty arrays.
    */
   /*
   - Populate the empty array that corresponds to the _players key in your team object with three actual players. They should be in the following format:
   - You should put each player on a new line to prevent the line from getting too long.
   */
   _players: [
       {firstName: 'Pablo', lastName: 'Sanchez', age: 11},
       {firstName: 'Jason', lastName: 'Chris', age: 14},
       {firstName: 'Tasaka', lastName: 'Koki', age: 13}
    ],
    /*
    - Populate the empty array that corresponds to the _games key in your object with three actual games. They should be in the following format:
    */
   _games: [
       {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
       {opponent: 'Tigers', teamPoints: 39, opponentPoints: 37},
       {opponent: 'Kellikos', teamPoints: 41, opponentPoints: 47}
   ],
   /*
   - Create getter methods for your _players and _games keys. You do not need to create setter methods, because we don’t want anyone to change the values saved to these keys.
   */
   get players() {
       return this._players;
   },
   get games() {
       return this._games;
   },
   /*
   - We want to add a new player to your team. Add a method addPlayer to your team object. This method should take in three parameters: firstName, lastName, and age. It should create a player object, and add them to the team‘s players array.
   */
   addPlayer(firstName, lastName, age) {
       const player = {
           firstName,
           lastName,
           age
       }
       this.players.push(player);
   },
   /*
   - The scorekeeper has some new information for us! Add a similar method for recording game results called addGame that:
        - takes in an opponent’s name,
        - your team’s points,
        - the opponent’s points,
        - creates a game object,
        - adds the game object to your team‘s games array.
   */
   addGame(opponent,teamPoints,opponentPoints) {
       const game = {
           opponent,
           teamPoints,
           opponentPoints
       };
       this.games.push(game);
   }
};
/*
- Below your team object, invoke your addPlayer method on the following players: Steph Curry Age 28,Lisa Leslie Age 44, and Bugs Bunny Age 76.
- Print out the team‘s players to check they were all properly added.
*/
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team._players);
/*
- Invoke your addGame method on three games and print the team‘s updated games array.
*/
team.addGame('Titans', 100, 98);
console.log(team._games);