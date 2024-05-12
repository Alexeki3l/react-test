import Message from "./Mensaje";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

//Voy a poner otra cosa
const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {/* <h2>Detalles</h2> */}
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no existe la cancion '${search.song}'`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: no existe el interprete '${search.artist}'`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
