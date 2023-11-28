import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import connectDB from "./mongodb/connect.js";

import postRoutes from "./routes/postRoutes.js"
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(5050, () => {
            console.log(`Server listening on port ${5050}, base url: http://localhost:5050`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();