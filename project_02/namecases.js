var personname = "Muhammad Nawaz";
//lowercase
console.log(personname.toLowerCase());
//uppercase
console.log(personname.toUpperCase());
//titlecase
console.log(personname.replace(/\bw/, function (c) { return c.toLocaleUpperCase(); }));
