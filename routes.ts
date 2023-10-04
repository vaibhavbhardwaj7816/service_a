import { Router } from "express";
import { getUserData } from "./controller";

const Routes = Router()

Routes.get('/get-user-data',getUserData)

export default Routes