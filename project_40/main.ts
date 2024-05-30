function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Hasan Raheem", "Maybe it's love"));
console.log(make_album("Asim azhar", "BEMATLAB"));
console.log(make_album("Talha Anjum", "Downers at Dusk", 12))