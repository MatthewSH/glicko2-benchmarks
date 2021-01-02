const bench = require('nanobench');
const fs = require('fs');
const GoGlicko = require('go-glicko');

bench('go-glicko', (b) => {
    let players = JSON.parse(fs.readFileSync('data/players.json'));
    let matches = JSON.parse(fs.readFileSync('data/matches.json'));
});