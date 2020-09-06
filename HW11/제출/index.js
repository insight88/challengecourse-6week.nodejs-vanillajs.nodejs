import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import session from "express-session";
import fs from "fs";

const API_URL = "http://ip-api.com/json/";
const app = express();
// const showLocation = document.querySelector(".show_location");
const PORT = 4000;
const router = express.Router();

app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

let response;
let loc;
let data;
let lat;
let lon;

const getLocation = async () => {
    try {
        return await axios.get(API_URL);
    } catch (error) {
        console.error(error);
    }
};

const handleHome = async (req, res) => {
    res.send("Hello from my home");
    loc = await getLocation();
    data = loc.data;
    lat = data.lat;
    lon = data.lon;
    console.log(lat, lon);
};

const renders = require("./index.html");

app.get("/", handleHome);
app.use(`${lat}&${lon}`, renders);

const handleListening = () =>
    console.log("Listening on: http://localhost:4000");
app.listen(PORT, handleListening);
