const bench = require('nanobench');
const fs = require('fs');
const GoGlicko = require('go-glicko');

for(let i = 0; i < 3; i++) {
    bench(`go-glicko rating period #${i+1}`, (b) => {
        let playersJSON = JSON.parse(fs.readFileSync('data/players.json'));
        let matches = JSON.parse(fs.readFileSync('data/matches.json'));
        let players = {};
    
        b.start();

        Object.keys(playersJSON).forEach((name) => {
            players[name] = new GoGlicko.Player(new GoGlicko.Rating(playersJSON[name].rating, playersJSON[name].rd, playersJSON[name].sigma));
        });
        
        let period = new GoGlicko.Period();
    
        Object.keys(players).forEach((name) => {
            period.addPlayer(players[name]);
        });
    
        matches[i].forEach((m) => {
            period.addMatch(players[m.player1], players[m.player2], m.score);
        });
    
        period.Calculate();
    
        b.end();
    });
}

const glicko2 = require('glicko2');

for(let i = 0; i < 3; i++) {
    bench(`glicko2 rating period #${i+1}`, (b) => {
        let playersJSON = JSON.parse(fs.readFileSync('data/players.json'));
        let matches = JSON.parse(fs.readFileSync('data/matches.json'));

        b.start();

        let g2 = new glicko2.Glicko2({
            tau : 0.5,
            rating : 1500,
            rd : 200,
            vol : 0.06
        });

        let players = {};
    
        Object.keys(playersJSON).forEach((name) => {
            players[name] = g2.makePlayer(playersJSON[name].rating, playersJSON[name].rd, playersJSON[name].sigma);
        });

        let rMatches = [];

        matches[i].forEach((m) => {
            rMatches.push([players[m.player1], players[m.player2], m.score]);
        });
    
        g2.updateRatings(rMatches);

        b.end();
    });
}