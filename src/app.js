import express from "express";
import "express-async-errors"
import cors from "cors";
import dotenv from "dotenv";
import indexRouter from "./routes/index.routes.js";
import errorHandler from "./middlewares/errors.middleware.js";

const app = express();

dotenv.config()

app.use(express.json())
app.use(cors());
app.use(indexRouter);
app.use(errorHandler);

const port = process.env.PORT || 5000

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})