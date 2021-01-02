const bench = require('nanobench');
const fs = require('fs');

let players = JSON.parse(fs.readFileSync('data/players.json'));
let matches = JSON.parse(fs.readFileSync('data/matches.json'));