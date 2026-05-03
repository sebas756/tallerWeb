import cors from 'cors';
import express, { json } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

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
app.get("/module/:variable", (req, res) => {
    console.log(req.params);
    res.status(200).send({
        msg: `Server arriba :), ${req.params}`
    });
});

export default app;