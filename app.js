import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send("Home");
const handleProfile = (req, res) => res.send("Profile");

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/user", userRouter);

app.get("/", handleHome);
app.get("/profile", handleProfile);

export default app;
