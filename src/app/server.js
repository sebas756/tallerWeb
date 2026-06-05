import cors from 'cors';
import express, { json } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import indexRouter from '../routes/index.routes.js';

//  Settings
const app = express();
app.set("port", 3000);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(morgan("dev"));
app.use(json());
app.use(
    cors({
        "origin": "*"
    })
);
app.use(helmet());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
app.use("/api", indexRouter);




export default app;
//localhost:3000/