import express from "express";
import routes from "../routes";
import {
  registerView,
  addComment,
  deleteComment
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, registerView);
apiRouter.post(routes.addComment, addComment);
apiRouter.post(routes.deleteComment, deleteComment);

export default apiRouter;
