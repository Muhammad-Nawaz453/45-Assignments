let personname: string = "Muhammad Nawaz";

//lowercase
console.log(personname.toLowerCase());

//uppercase
console.log(personname.toUpperCase());

//titlecase
console.log(personname.replace(/\bw/,c => c.toLocaleUpperCase()));