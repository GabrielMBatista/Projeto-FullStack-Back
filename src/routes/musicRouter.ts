import express from "express"
import {PlayListController } from "../controller/PlayListController"


export const playListRouter = express.Router()

const playListController = new PlayListController()

playListRouter.put("/create", playListController.createPlayList)


