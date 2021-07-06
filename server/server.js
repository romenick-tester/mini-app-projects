import express from "express"
import dotenv from "dotenv"
import peopleRoutes from "./routes/people.js"

dotenv.config()
const app = express()
app.use(express.json())

app.use("/api/people", peopleRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}.`))