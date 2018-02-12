var playlist = { u2: "With or Without you", Sting: "Shape of My Heart"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({},playlist, {[artistName]:'songTitle'})
}