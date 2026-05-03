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

gamesService.addgame = (name, country, league) => {
    const newgame = {
        id: counterID,
        name: name,
        country: country,
        league: league
    }
    counterID++;
    games.push(newgame);
    return newgame;
}

gamesService.deletegame = (id) => {}

export default gamesService;