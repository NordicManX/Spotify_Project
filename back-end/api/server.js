import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const frontEndDist = path.resolve(__dirname, "../front-end/dist");

const app = express();
const PORT = 3000;

app.use(cors());



app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});


app.use(express.static(frontEndDist));


app.get(/^\/(?!api).*/, (request, response) => {
  response.sendFile(path.join(frontEndDist, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
