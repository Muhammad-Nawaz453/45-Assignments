function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Hasan Raheem", "Maybe it's love"));
console.log(make_album("Asim azhar", "BEMATLAB"));
console.log(make_album("Talha Anjum", "Downers at Dusk", 12));
