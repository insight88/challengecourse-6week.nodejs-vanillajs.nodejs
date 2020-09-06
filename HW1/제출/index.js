import express from "express";
// express 모듈 불러오기

const app = express();
// app이라는 어플리케이션에서 express 모듈 실행

const handleHome = (req, res) => res.send("Home");
const handleAboutUs = (req, res) => res.send("About us");
const handleContact = (req, res) => res.send("Contact");
const handleProtected = (req, res) => res.send("Protected");
// (request, response)라는 입력을 받고 "Home"이라는 메시지를 send하는 반응을 handleHome 함수를 선언

const consoleMW = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};
// console.log한 후 next()를 통해 다음 동작을 하는 미들웨어 함수 선언

const protectedMW = (req, res) => res.redirect("/");
// protected 전용 미들웨어, "/"로 리디렉트하는 반응을 하는 함수 선언

app.use(consoleMW);
// 모든 루트에 접근할 때 consoleMW라는 미들웨어가 실행, app.use

app.get("/", handleHome);
app.get("/about-us", handleAboutUs);
app.get("/contact", handleContact);
app.get("/protected", protectedMW, handleProtected);
// 주소에 맞는 route를 제공하고 대응하는 함수를 실행
// /protected에 접근 시 protectedMW 미들웨어를 실행 후 handleprotected가 실행됨

app.listen(() => console.log(`Listening!`));
// app이 외부로부터 접근을 허용하기 시작
