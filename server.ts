import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => res.send("API running"));

app.listen(5000, () => console.log("Server started on port 5000"));
