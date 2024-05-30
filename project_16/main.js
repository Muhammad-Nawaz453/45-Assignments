var guests = ["Ali khan", "waryam pario", "hassan sheikh"];
console.log("Great news! I found a bigger dinner table!");
// more guests
guests.unshift("hasnain");
guests.splice(guests.length / 2, 0, "saqib");
guests.push("mustafa");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
