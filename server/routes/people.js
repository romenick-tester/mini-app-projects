import express from "express"
import { getPeople } from "../controllers/people.js"

const router = express.Router()

router.get("/birthday/:month", getPeople)

export default router;