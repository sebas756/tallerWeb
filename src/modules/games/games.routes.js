import { Router } from 'express';

import gamesController from './games.controller.js';

const gamesRouter = Router();

gamesRouter.get('/', gamesController.getgames);
gamesRouter.get('/:idgame', gamesController.getgame);
gamesRouter.post('/', gamesController.addgame);
gamesRouter.delete('/:idgame', gamesController.deletegame);

export default gamesRouter;