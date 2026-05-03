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
    const minPlayers = req.body.minPlayers;
    const maxPlayers = req.body.maxPlayers;
    const avgDuration = req.body.avgDuration;
    const acqDate = req.body.acqDate;
    const condition = req.body.condition;

    const game = gamesService.addgame(namegame, minPlayers, maxPlayers,avgDuration,acqDate,condition)
    res.status(200).send({
        msg: "Creación de juego exitosa.",
        game: game
    });
}

gamesController.deletegame = (req, res) => {
    const idgame = req.params.idgame;
    const game = gamesService.deletegame(idgame);
    res.status(200).send({
        msg: "Eliminación de juego exitosa.",
        game: game
    }); 
}

gamesController.updategame = (req, res) => {
    const idgame = req.params.idgame;
    const updatedGame = req.body;
    const game = gamesService.updategame(idgame, updatedGame);
    res.status(200).send({
        msg: "Actualización de juego exitosa.",
        game: game
    });
}


export default gamesController;