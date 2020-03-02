import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`✔ Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Home");
const handleProfile = (req, res) => res.send("Profile");

const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(betweenHome);

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
