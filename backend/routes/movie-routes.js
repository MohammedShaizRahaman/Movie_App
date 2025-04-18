import express from "express";
import { addMovie, getAllMovies, getMovieById } from "../controllers/movie-controllers.js";
const movieRouter = express.Router();

movieRouter.get("/",getAllMovies);
movieRouter.get("/:id",getMovieById);
movieRouter.post("/",addMovie);
export default movieRouter;