const faker = require('faker');
const fs = require('fs');

let options = {
    players: {
        limit: 50000,
        rating: {
            min: 100,
            max: 2400
        },
        rd: {
            min: 10,
            max: 400
        },
    },
    periods: {
        limit: 3
    },

    matches: {
        limit: 100000,
    }
};

let results = [1.0, 0.5, 0.0];

let players = {};
let playerNames = [];
let matches = [];

for(let i = 0; i < options.players.limit; i++) {
    let username;

    do {
        username = faker.internet.userName();
    } while (players[username] != undefined);
    
    players[username] = {
        rating: randBetween(options.players.rating.min, options.players.rating.max),
        rd: randBetween(options.players.rd.min, options.players.rd.max),
        sigma: 0.06
    }
}

Object.keys(players).forEach((name) => {
    playerNames.push(name);
})

for (let rp = 0; rp < options.periods.limit; rp++) {
    if (matches[rp] == undefined) {
        matches[rp] = [];
    }

    for(let i = 0; i < options.matches.limit; i++) {
        let player1Name = playerNames[randBetween(0, playerNames.length - 1)];
        let player2Name;

        do {
            player2Name = playerNames[randBetween(0, playerNames.length - 1)];
        } while (player1Name == player2Name);

        let score = results[randBetween(0, results.length - 1)];

        matches[rp].push({
            player1: player1Name,
            player2: player2Name,
            score: score
        });
    }
}

fs.writeFileSync('data/matches.json', JSON.stringify(matches));
fs.writeFileSync('data/players.json', JSON.stringify(players))

function randBetween(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}