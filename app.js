import express from "express";
import logger from "morgan";
import cors from "cors";
import fs from "fs/promises";
import usersRouter from "./routes/api/users.js";
import subscribeRouter from "./routes/api/subscribe.js";
import cocktailsRouter from "./routes/api/cocktails.js";
import myRecipesRouter from "./routes/api/myrecipes.js";
import ingredientsRouter from "./routes/api/ingredients.js";
import glassesRouter from "./routes/api/glasses.js";
import swaggerUi from "swagger-ui-express";
import path from "path";

const swaggerPath = path.resolve("", "swagger.json");
const swaggerDocument = JSON.parse(await fs.readFile(swaggerPath));

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", usersRouter);
app.use("/api/subscribe", subscribeRouter);
app.use("/api/ingredients", ingredientsRouter);
app.use("/api/recipes", cocktailsRouter);
app.use("/api/myrecipes", myRecipesRouter);
app.use("/api/glass", glassesRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;

  console.log(err);

  res.status(status).json({ message });
});

export default app;
