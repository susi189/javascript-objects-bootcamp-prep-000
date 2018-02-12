var playlist = { u2: 'One'};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({},playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist2, artistName) {
  delete playlist2.artistName;
  return playlist2;
}