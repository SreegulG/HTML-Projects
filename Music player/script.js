// json song list
songList = [
  {
    "name": "Shining Lights",
    "singer": "John Doe",
    "genre": "Pop",
    "song_link": "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
    "picture": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&h=150&fit=crop"
  },
  {
    "name": "Dreamy Days",
    "singer": "Alice Blue",
    "genre": "Pop",
    "song_link": "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
    "picture": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    "name": "City Vibes",
    "singer": "Emma Gold",
    "genre": "Pop",
    "song_link": "https://www.bensound.com/bensound-music/bensound-happyrock.mp3",
    "picture": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=150&h=150&fit=crop"
  },
  {
    "name": "Rolling Thunder",
    "singer": "Mike Steel",
    "genre": "Rock",
    "song_link": "https://www.bensound.com/bensound-music/bensound-energy.mp3",
    "picture": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop"
  },
  {
    "name": "Wild Horizon",
    "singer": "Liam Shadows",
    "genre": "Rock",
    "song_link": "https://www.bensound.com/bensound-music/bensound-instinct.mp3",
    "picture": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=150&h=150&fit=crop"
  },
  {
    "name": "Nightfire",
    "singer": "Sophie Red",
    "genre": "Rock",
    "song_link": "https://www.bensound.com/bensound-music/bensound-memories.mp3",
    "picture": "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?w=150&h=150&fit=crop"
  },
  {
    "name": "Echoes of Eternity",
    "singer": "Chris Green",
    "genre": "Rock",
    "song_link": "https://www.bensound.com/bensound-music/bensound-extremeaction.mp3",
    "picture": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=150&h=150&fit=crop"
  },
  {
    "name": "Burning Bridges",
    "singer": "Nina Velvet",
    "genre": "Rock",
    "song_link": "https://www.bensound.com/bensound-music/bensound-epic.mp3",
    "picture": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    "name": "Street Beats",
    "singer": "DJ Shadow",
    "genre": "Hip-Hop",
    "song_link": "https://www.bensound.com/bensound-music/bensound-hipjazz.mp3",
    "picture": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=150&h=150&fit=crop"
  },
  {
    "name": "Mountain Breeze",
    "singer": "Olivia Fields",
    "genre": "Country",
    "song_link": "https://www.bensound.com/bensound-music/bensound-goinghigher.mp3",
    "picture": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&h=150&fit=crop"
  },
  {
    "name": "Prairie Horizon",
    "singer": "Mason Heart",
    "genre": "Country",
    "song_link": "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
    "picture": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=150&h=150&fit=crop"
  },
  {
    "name": "Tranquil Sky",
    "singer": "Ellie Shore",
    "genre": "Classical",
    "song_link": "https://www.bensound.com/bensound-music/bensound-relaxing.mp3",
    "picture": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  }
]

//  variable declaration
let genreList = new Set();
let numberOfSongs = songList.length;
let currentPlaylistSong = new Set();
let allPlaylists = [];
let playlistSongs = [];
let playlistEles = [];
let currentPlaylistName = "";
let filteredSongs;

// DOM elements
modeChangeInput = document.getElementById("flexSwitchCheckDefault");
searchSongEle = document.getElementById("search-song");
songEle = document.getElementById("song-list");
cardImage = document.getElementById("card-img-top");
cardTitle = document.getElementById("card-title");
cardText = document.getElementById("card-text");
audioEle = document.getElementsByTagName("audio");
filterSongELe = document.getElementById("exampleSelect");
prevBtnEle = document.getElementsByClassName("prev-btn")[0];
nextBtnEle = document.getElementsByClassName("next-btn")[0];
createPlaylistInput = document.getElementById("playlist-name");
createPlaylistBtn = document.getElementById("create-playlist");
allPlaylist = document.getElementById("all-playlist-list");
currentPlaylist = document.getElementById("current-list");
addSongToPlaylistBtn = document.getElementsByClassName("add-to-playlist")[0];
removeSongFromPlaylistBtn = document.getElementsByClassName("remove-from-playlist")[0];
searchPlaylist = document.getElementById("search-playlist");

// Add genres to the genre list
songList.forEach(song => {
  genreList.add(song.genre);
});

// Select the first song in the list add to current player
selectSong(songList, 0);

// Add genres to the filter dropdown
genreList.forEach(genre => {
  let option = document.createElement("option");
  option.textContent = genre;
  filterSongELe.appendChild(option);
})

// Display all songs
displayAllSongs();

// Event listener for the search input
searchSongEle.addEventListener("input", (event) => {
  searchSongByName(event.target.value);
});

// Prevents the default behavior of the search input when the enter key is pressed.
searchSongEle.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

// Event listener for the dark mode switch
modeChangeInput.addEventListener("change", (event) => {
  if (event.target.checked) {
    document.documentElement.style.setProperty('--background-color', '#075988');
    document.documentElement.style.setProperty('--list-color', '#3283ae');
    document.documentElement.style.setProperty('--playlist_color', '#6225a7');
    document.documentElement.style.setProperty('--font-color', 'white');
    document.documentElement.style.setProperty('--primary-background-color', 'black');
    document.body.style.backgroundColor = "dimgray";
  }
  else {
    document.documentElement.style.setProperty('--background-color', '#6ecaff');
    document.documentElement.style.setProperty('--list-color', '#1c9be0');
    document.documentElement.style.setProperty('--playlist_color', '#9451e1');
    document.documentElement.style.setProperty('--font-color', 'black');
    document.documentElement.style.setProperty('--primary-background-color', 'white');
    document.documentElement.style.setProperty('--list-color', '#2b9cda');
    document.body.style.backgroundColor = "white";
  }
});

// Event listener for the filter dropdown
filterSongELe.addEventListener("change", (event) => {
  songEle.innerHTML = "";
  if (event.target.value == "") {
    displayAllSongs();
  }
  else {
    filterSongByGenre(event.target.value);
  }
});

// Event listener for the previous and next buttons
prevBtnEle.addEventListener("click", () => {
  let currentSongPosition;
  filteredSongs.forEach((song, index) => {
    if (song.name == cardTitle.textContent) {
      currentSongPosition = index;
    }
  });
  if (currentSongPosition > 0) {
    selectSong(filteredSongs, currentSongPosition - 1);
  }
});

// Event listener for the next button
nextBtnEle.addEventListener("click", () => {
  let currentSongPosition;
  filteredSongs.forEach((song, index) => {
    if (song.name == cardTitle.textContent) {
      currentSongPosition = index;
    }
  });
  if (currentSongPosition < filteredSongs.length - 1) {
    selectSong(filteredSongs, currentSongPosition + 1);
  }
});

// Event listener for the create playlist button
createPlaylistBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (!allPlaylists.includes(createPlaylistInput.value) && (createPlaylistInput.value != "")) {
    {
      value = createPlaylistInput.value;
      playlistSongs.push({ name: value, songs: [] });
      allPlaylists.push(value);
      createPlaylist(value);
    }
    createPlaylistInput.value = "";

  }
});

// Event listener for the add song to playlist button
addSongToPlaylistBtn.addEventListener("click", () => {
  songList.forEach(song => {
    if (song.name == cardTitle.textContent) {
      playlistSongs.forEach(playlist => {
        if (playlist.name == currentPlaylistName) {
          if (!playlist.songs.includes(song)) {
            playlist.songs.push(song);
            displayPlaylistSongs(playlistSongs, playlist.name);
          }
        }
      });
    }
  })
  currentPlaylist.innerHTML = "";
  displayPlaylistSongs(playlistSongs, currentPlaylistName);
});

// Event listener for the search playlist input
searchPlaylist.addEventListener("input", (event) => {
  filterPlaylistByName(event.target.value);
});

// Event listener for the remove song from playlist button
removeSongFromPlaylistBtn.addEventListener("click", () => {
  songList.forEach(song => {
    if (song.name == cardTitle.textContent) {
      playlistSongs.forEach(playlist => {
        if (playlist.name == currentPlaylistName) {
          if (playlist.songs.includes(song)) {
            playlist.songs = playlist.songs.filter(i => i !== song);
            displayPlaylistSongs(playlistSongs, playlist.name)
          }
        }
      });
    }
  })
});


// Displays all songs
function displayAllSongs() {
  filteredSongs = [];
  songList.forEach(song => {
    let songLi = document.createElement("li");
    let songBtn = document.createElement("button");
    songBtn.textContent = `${song.name} - ${song.singer}`;
    songLi.style.listStyle = "none";
    songLi.appendChild(songBtn);
    songEle.appendChild(songLi);
    songButton(songBtn, song);
    filteredSongs.push(song);
  })
}

// Adds an event listener to a song button that updates the current playing song with song details when clicked.
function songButton(songBtn, song) {
  songBtn.addEventListener("click", () => {
    cardTitle.textContent = song.name;
    cardText.textContent = song.singer;
    audioEle[0].src = song.song_link;
    cardImage.src = song.picture;
  });
}

// Filters the list of songs by the specified genre and updates the DOM with the filtered songs.
function filterSongByGenre(genre) {
  filteredSongs = [];
  songList.forEach(song => {
    if (song.genre == genre) {
      let songLi = document.createElement("li");
      let songBtn = document.createElement("button");
      songBtn.textContent = `${song.name} - ${song.singer}`;
      songLi.style.listStyle = "none";
      songLi.appendChild(songBtn);
      songEle.appendChild(songLi);
      songButton(songBtn, song);
      filteredSongs.push(song);
    };
  });
}

// Selects a song from the list and updates the with the song's details.
function selectSong(songs, index) {
  let song = songs[index];
  cardImage.src = song.picture;
  cardTitle.textContent = song.name;
  cardText.textContent = song.singer;
  audioEle[0].src = song.song_link;
}

// Creates a new playlist item and appends it to the playlist container.
function createPlaylist(value) {
  let playlist = document.createElement("li");
  playlist.style.listStyle = "none";
  let playlistBtn = document.createElement("button");
  playlistBtn.className = "playlist-btn";
  playlistBtn.textContent = value;
  playlist.appendChild(playlistBtn);
  allPlaylist.appendChild(playlist);
  playlistEles.push(playlistBtn);
  playlist.addEventListener("click", () => {
    currentPlaylist.innerHTML = "";
    displayPlaylistSongs(playlistSongs, value);
    currentPlaylistName = value;
  });
}


// Displays the songs of the selected playlist.
function displayPlaylistSongs(playlistSongs, value) {
  currentPlaylist.innerHTML = "";
  playlistSongs.forEach(playlist => {
    if (playlist.name == value) {
      if (playlist.songs.length > 0) {
        removeSongFromPlaylistBtn.style.display = "inline-block";
      }
      playlist.songs.forEach(song => {
        let songLi = document.createElement("li");
        let songBtn = document.createElement("button");
        songBtn.className = "playlist-song-btn";
        songBtn.textContent = `${song.name} - ${song.singer}`;
        songLi.style.listStyle = "none";
        songLi.appendChild(songBtn);
        currentPlaylist.appendChild(songLi);
        songButton(songBtn, song);
      });
    }
  })
}


// Searches for songs by name and display matching songs.

function searchSongByName(value) {
  let searchedSongs = []
  songEle.innerHTML = "";
  filteredSongs.forEach(song => {
    if (song.name.toLowerCase().includes(value.toLowerCase())) {
      let songLi = document.createElement("li");
      let songBtn = document.createElement("button");
      songBtn.textContent = `${song.name} - ${song.singer}`;
      songLi.style.listStyle = "none";
      songLi.appendChild(songBtn);
      songEle.appendChild(songLi);
      songButton(songBtn, song);
    }
  })
}


//  Filters the playlist by name and updates the displayed playlist.
function filterPlaylistByName(value) {
  allPlaylist.innerHTML = "";
  allPlaylists.forEach(playlist => {
    if (playlist.toLowerCase().includes(value.toLowerCase())) {
      let playlistLi = document.createElement("li");
      playlistLi.style.listStyle = "none";
      let playlistBtn = document.createElement("button");
      playlistBtn.className = "playlist-btn";
      playlistBtn.textContent = playlist;
      playlistLi.appendChild(playlistBtn);
      allPlaylist.appendChild(playlistLi);
      playlistEles.push(playlistBtn);
      playlistLi.addEventListener("click", () => {
        currentPlaylist.innerHTML = "";
        displayPlaylistSongs(playlistSongs, playlist);
        currentPlaylistName = playlist;
      });
    }
  })
}
