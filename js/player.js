class Jukebox {
    constructor(albums) {
        this.albums = [];
    }
    addAlbum = function(album) {
        this.albums.push(album);
    }
    favoriteAlbum = function() {
        let max = -1, fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    play = function() {
        this.played += 1;
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

var jbox = new Jukebox();

// STORE ARTISTS/ALBUMS WITHIN AN ARRAY
var artistAlbums = [
    { band: 'Operation Ivy', album: 'Energy'},
    { band: 'Blink 182', album: 'Dude Ranch'},
    { band: 'New Found Glory', album: 'Sticks and Stones'},
    { band: 'Red Hot Chilli Peppers', album: 'Californication'},
    { band: 'Oasis', album: 'Morning Glory?'}
];

// BIND ARRAY TO DROP DOWN MENU
window.onload = function() {
    for(let i = 0;i<artistAlbums.length;i++){
        let option = document.createElement("option");
        option.text = artistAlbums[i].band +', ' + artistAlbums[i].album;
        option.value = i;
        let select = document.getElementById("artistandalbum");
        select.appendChild(option);
    }
};

// Iterate through the array and programmatically create new Album class instances based on each album within the array 
for(let i = 0;i<artistAlbums.length;i++) {
    let albumInstance = 'album' + i;
    albumInstance = new Album(artistAlbums[i].band,artistAlbums[i].album);

    // Add Album class instance to the player
    jbox.addAlbum(albumInstance);
}

const $ = function (id) {
    return document.getElementById(id);
};

const displayFavorite = function () {
    $('favoriteAlbum').innerHTML = `Your favorite album is: ${jbox.favoriteAlbum()}`;
};

const playSelection = function () {
    let selectedAlbum = $('artistandalbum');
    let albumNumber = selectedAlbum.value;
    let albumClass = 'album' + `${albumNumber}`;
    albumClass.play(); 

};

// When the user selects an artist/album from the drop down menu and clicks the play button, the play() method should be called for that album. This will track that album as being played.
window.addEventListener('click', () => {
    $('Play_Selection').onclick = playSelection;
    $('Show_Favorite').onclick = displayFavorite;
    
});

