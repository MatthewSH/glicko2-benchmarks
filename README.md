# NodeJS Glicko2 Library Benchmarks
## Tested Packages
- [go-glicko](https://www.npmjs.com/package/go-glicko)
- [glicko2](https://www.npmjs.com/package/glicko2)
- [glicko-two](https://www.npmjs.com/package/glicko-two)
- [glicko2-js](https://www.npmjs.com/package/glicko2-js)

## Benchmarks

### [Personal PC](/specs.md)
#### 1k Players, 1k Matches
| Package    	| Period #1 	| Period #2 	| Period #3 	|
|------------	|-----------	|-----------	|-----------	|
| go-glicko  	| ~66 ms    	| ~61 ms    	| ~12 ms    	|
| glicko2    	| ~13 ms    	| ~8.52 ms  	| ~2.74 ms  	|
| glicko-two 	| ~9.32 ms  	| ~6.36 ms  	| ~4.14 ms  	|
| glicko2-js 	| ~67 ms    	| ~70 ms    	| ~53 ms    	|

#### 100k Players, 10k Matches
| Package    	| Period #1 	| Period #2 	| Period #3 	|
|------------	|-----------	|-----------	|-----------	|
| go-glicko  	| ~7.7 s    	| ~8.05 s   	| ~7.85 s   	|
| glicko2    	| ~228 ms   	| ~170 ms   	| ~158 ms   	|
| glicko-two 	| ~260 ms   	| ~211 ms   	| ~199 ms   	|
| glicko2-js 	| ~20 s     	| ~27 s     	| ~26 s     	|

#### 1k Players, 7.5k Matches
| Package    	| Period #1 	| Period #2 	| Period #3 	|
|------------	|-----------	|-----------	|-----------	|
| go-glicko  	| ~315 ms   	| ~191 ms   	| ~153 ms   	|
| glicko2    	| ~26 ms    	| ~8.03 ms  	| ~12 ms    	|
| glicko-two 	| ~23 ms    	| ~12 ms    	| ~2.73 ms  	|
| glicko2-js 	| ~272 ms   	| ~208 ms   	| ~213 ms   	|

#### 10k Players, 20k Matches
| Package    	| Period #1 	| Period #2 	| Period #3 	|
|------------	|-----------	|-----------	|-----------	|
| go-glicko  	| ~1.25 s   	| ~1.26 s   	| ~1.23 s   	|
| glicko2    	| ~72 ms    	| ~46 ms    	| ~43 ms    	|
| glicko-two 	| ~65 ms    	| ~45 ms    	| ~31 ms    	|
| glicko2-js 	| ~3.61 s   	| ~3.29 s   	| ~3.28 s   	|

#### 25k Players, 75k Matches
| Package    	| Period #1 	| Period #2 	| Period #3 	|
|------------	|-----------	|-----------	|-----------	|
| go-glicko  	| ~18 s     	| ~17 s     	| ~18 s     	|
| glicko2    	| ~170 ms   	| ~137 ms   	| ~121 ms   	|
| glicko-two 	| ~156 ms   	| ~159 ms   	| ~115 ms   	|
| glicko2-js 	| ~39 s     	| ~45 s     	| ~47 s     	|

### Running Your Own Benchmarks
1. First generate your data sets: `npx cross-env PLAYER_LIMIT=*limit* MATCH_LIMIT=*limit* node ./src/faker.js`
2. Run the benchmark: `npm run bench`