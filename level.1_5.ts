import Song from "./classes/Song";
import SongWithUnknownArtist from "./classes/SongWithUnknownArtist";

const song_1 = new Song('Shape of You', 'Ed Sheeran');
const song_2 = new Song('Blinding Lights', 'The Weeknd');
const song_3 = new Song('Someone Like You', 'Adele');

const song_4 = new SongWithUnknownArtist('Girls On Top');
song_4.setArtist('Boa');
song_4._durationInSeconds = 300;
console.log(song_4);