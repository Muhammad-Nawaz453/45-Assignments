let guests: string[] = ["Ali khan", "waryam pario", "hassan sheikh"];
console.log("Great news! I found a bigger dinner table!");

// more guests
guests.unshift("hasnain");
guests.splice(guests.length / 2, 0, "saqib");
guests.push("mustafa");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});