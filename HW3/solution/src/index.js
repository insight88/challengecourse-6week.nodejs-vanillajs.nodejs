import express from "express";

import apiRouter from "../routers/apiRouter";
import globalRouter from "../routers/globalRouter";
import coursesRouter from "../routers/coursesRouter";

const app = express();

app.use("/", globalRouter);
app.use("/api", apiRouter);
app.use("/courses", coursesRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
