// console.log("Unfortunately I can onlyinvite two people for dinner.");

// while (guests.length > 2){
//     let removedGuest = guests.pop();
//     console.log(`Sorry, ${removedGuest}, I can't invite you to dinner,`);
    
// }

// guests.forEach(guests =>{
//     console.log(`Dear ${guests}, you're still invited to dinner.`);

// });

// guests.splice(0, guests.length);
// console.log(guests);

console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
