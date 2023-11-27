import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(5050, () => {
    console.log(`Server listening on port ${5050}`);
})