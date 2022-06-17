const team = {
  _players: [
    { firstName: "Roger", lastName: "Federer", age: 48 },
    { firstName: "Virat", lastName: "Kohli", age: 35 },
    { firstName: "Iga", lastName: "Swiatek", age: 21 },
  ],
  _games: [
    { opponent: "Nadal", teamPoints: 6, opponentPoints: 3 },
    { opponent: "Smith", teamPoints: 85, opponentPoints: 83 },
    { opponent: "Pliskova", teamPoints: 6, opponentPoints: 3 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);
team.addGame("Titans", 100, 98);
console.log(team.games);
