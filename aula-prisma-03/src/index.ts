import express, { json } from "express";
import "express-async-errors";

import dotenv from "dotenv";
import { handleApplicationErrors } from "./middlewares/error-middleware";
import postsRouter from "./routers/post-router";

dotenv.config();

const app = express();
app.use(json());

app.use(postsRouter);
app.use(handleApplicationErrors);

const port = Number(process.env.PORT) || 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));