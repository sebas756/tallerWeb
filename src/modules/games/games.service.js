const gamesService = {};

let games = [];
let counterID = 0;

gamesService.getgames = () => {
    return games;
}

gamesService.getgame = (id) => {
    for (let game of games) {
        if (game.id == id) return game
    }
    return null;
}

gamesService.addgame = (name, minPlayers, maxPlayers,avgDuration,acqDate,condition) => {
    const newgame = {
        id: counterID,
        name: name,
        minPlayers: minPlayers,
        maxPlayers: maxPlayers,
        avgDuration: avgDuration,
        acqDate: acqDate,
        condition: condition
    }
    counterID++;
    games.push(newgame);
    return newgame;
}

gamesService.deletegame = (id) => {
    for (let game of games) {
        if (game.id == id) {
            const index = games.indexOf(game);
            games.splice(index, 1);
            return game;
        }
    }
    return null;
}

export default gamesService;