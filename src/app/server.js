import cors from 'cors';
import express, { json } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import indexRouter from '../routes/index.routes.js';

//  Settings
const app = express();
app.set("port", 3000);

// Middleware
app.use(morgan("dev"));
app.use(json());
app.use(
    cors({
        "origin": "*"
    })
);
app.use(helmet());

// Routes
app.get("/", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.status(200).send({
        msg: "Server up"
    });
});
app.use("/api", indexRouter);




export default app;
//localhost:3000/