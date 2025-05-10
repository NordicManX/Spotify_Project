import { MongoClient } from "mongodb";


const URI = "mongodb+srv://nelsonfilth:rA2Unkq9DAvwmk1U@cluster0.dubu4vo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(URI);

export const db = client.db("spotify");
// const songCollection = await db.collection("songs").find({}).toArray();
// console.log(songCollection);