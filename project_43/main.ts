let magicians: string[] = ["hasan", "waryam", "huzaifa"];

function make_great(magicians: string[]): string[] {
    let greatMagicians = [];
    magicians.forEach(magicians => {
        greatMagicians.push(` THE GREAT ${magicians}`);
    });
    return greatMagicians;
}

function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); 
console.log("Great magicians:");
show_magicians(greatMagicians);