import gamesService from './games.service.js';

const gamesController = {};

gamesController.getgames = (req, res) => {
    const games = gamesService.getgames();
    res.status(200).send({
        games: games
    });
}

gamesController.getgame = (req, res) => {
    const idgame = req.params.idgame;
    const game = gamesService.getgame(idgame);
    res.status(200).send({
        game: game
    });
}

gamesController.addgame = (req, res) => {
    const namegame = req.body.name;
    const countrygame = req.body.country;
    const league = req.body.league;

    const game = gamesService.addgame(namegame, countrygame, league)
    res.status(200).send({
        msg: "Creación de equipo exitosa.",
        game: game
    });
}


export default gamesController;