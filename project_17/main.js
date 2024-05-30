console.log("Unfortunately I can onlyinvite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner,"));
}
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests);
