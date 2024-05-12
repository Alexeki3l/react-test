import React, { useState, useEffect } from "react";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Loader from "./Loaders";
import { helpHttp } from "../helpers/helpHttp";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    setSearch(data);
  };

  useEffect(() => {
    if (search === null) return;
    const fetchData = async () => {
      const { artist, song } = search;
      let strArtist = artist.replaceAll(" ", "%20");
      let strSong = song.replaceAll(" ", "%20");
      console.log(strArtist);
      console.log(strSong);
      let artisURL = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${strArtist}`;
      let songURL = `https://api.lyrics.ovh/v1/${strArtist}/${strSong}`;

      // console.log(artisURL, songURL);
      setLoading(true);

      const options = { "content-type": "application/json" };

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artisURL),
        helpHttp().get(songURL, options),
      ]);

      // console.log(artistRes, songRes);
      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  //www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay
  //https://api.lyrics.ovh/v1/artist/title

  return (
    <div>
      <h2>Song Search</h2>
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {search && !loading && (
          <SongDetails search={search} lyric={lyric} bio={bio} />
        )}
      </article>
    </div>
  );
};

export default SongSearch;
