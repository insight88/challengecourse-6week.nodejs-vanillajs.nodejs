import express from "express";
import request from "request";

const app = express();

app.get("/", (req, res) => {
  const {
    query: { url }
  } = req;
  if (!url) {
    return res.end();
  } else {
    let aUrl = url;
    if (!aUrl.includes("http://") || !aUrl.includes("http://")) {
      aUrl = `http://${aUrl}`;
    }
    request(aUrl, (error, response) => {
      if (error) {
        res.send("Down!");
      } else if (response) {
        if (response.statusCode <= 301) {
          res.send("Up!");
        } else {
          res.send("Down!");
        }
      } else {
        res.send("Down!");
      }
    });
  }
});

app.listen(4000, () => console.log(`Listening!`));
