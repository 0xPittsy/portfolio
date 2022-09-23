// Prints a random message telling the user the store is closed. Selects from 3 arrays of 10 choices; expandable. 
// (ex: video game merchant dialogue generation)

const notOpen = [
    "Shop's closed, ",
    "Not open ",
    "Got no wares, ",
    "I already told you ",
    "Packing up shop, ",
    "Sorry, no sales ",
    "Got nothing for you, ",
    "No goods today ",
    "Closing time, ",
    "Time to pack up ",
];
const myFriend = [
    "kid. ",
    "my friend. ",
    "you scallywag! ",
    "homie. ",
    "you rotten egg. ",
    "buddy. ",
    "big dog. ",
    "you fool! ",
    "partner. ",
    "amigo. ",
];
const goHome = [
    "Skedaddle.",
    "Go on home now.",
    "Get out of here.",
    "I don't sell to the likes of you anyway!",
    "GTFO!",
    "Time to leave.",
    "If you don't leave now, I'm calling the police.",
    "Better dip if you know what's good for you.",
    "Go home.",
    "It's probably best for you to get home.",
];

function merchantDialogue(){

    let rand1 = Math.floor(Math.random() * 10);
    let rand2 = Math.floor(Math.random() * 10);
    let rand3 = Math.floor(Math.random() * 10);

    const dialogue = `Merchant: ${notOpen[rand1]}${myFriend[rand2]}${goHome[rand3]}`
    console.log(dialogue);
    return dialogue;
}

merchantDialogue();