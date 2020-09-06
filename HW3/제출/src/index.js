import express from "express";
import path from "path";
import router from "./router";
import { localMW } from "./middlewares";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Add your magic here!
app.use(localMW);
app.use("/", router);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
