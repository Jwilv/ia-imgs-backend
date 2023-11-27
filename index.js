import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import connectDB from "./mongodb/connect";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(5050, () => {
            console.log(`Server listening on port ${5050}`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();