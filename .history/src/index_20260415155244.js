import * as http from 'http';

import app from './app/server';

const httpServer = http.createServer(app);
httpServer.listen(app.get("port"), "localhost", "0.0.0.0", () => {
    console.log(`Server running - Port ${app.get("port")}`)
})