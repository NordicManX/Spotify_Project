import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists.js";
import { songsArray } from "../assets/database/songs.js";

const Main = () => {
  return (
    <div className="main">
      <ItemList
        title="Artistas"
        items={10}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      />

      <ItemList
        title="Musicas"
        items={20}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </div>
  );
};
export default Main;
