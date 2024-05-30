var magicians = ["hasan", "waryam", "huzaifa"];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magicians) {
        greatMagicians.push(" THE GREAT ".concat(magicians));
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians);
console.log("Great magicians:");
show_magicians(greatMagicians);
