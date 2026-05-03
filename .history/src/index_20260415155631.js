import app from 'app/server';
import * as http from 'http';

const httpServer = http.createServer(app);
httpServer.listen(app.get("port"), "0.0.0.0", () => {
    console.log(`Server running - Port ${app.get("port")}`)
})