import express from "express";

import { sequelize } from "./db/dbConnect";
import { router } from "./routes";

const app = express();
app.use(express.json());

app.use(router);

export { app };