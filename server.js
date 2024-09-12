import express from "express";
import "dotenv/config";
const PORT = process.env.PORT || 8081;
import cors from "cors";
const app = express();
import routes from './routes/routes.js'

// Allow Cross-Origin access across domains/ports
app.use(cors())

// Allow middleware to accept JSON
app.use(express.json()); 

//Test Route
app.use("/placeholder", routes);

//Listen
app.listen(PORT, () =>{
    console.log(`server listening on port ${PORT}`)
})