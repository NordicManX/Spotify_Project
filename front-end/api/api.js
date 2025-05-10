
import axios from "axios";

// const { NODE_ENV } = process.env;   

// const URL = "http://localhost:3000/api"; // Replace with your API URL
const URL = "https://spotify-project-9sgj.onrender.com/api"; // Replace with your API URL

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists);
