# NodeJS Glicko2 Library Benchmarks
## Tested Packages
- [go-glicko](https://www.npmjs.com/package/go-glicko)
- [glicko2](https://www.npmjs.com/package/glicko2)
- [glicko-two](https://www.npmjs.com/package/glicko-two)
- [glicko2-js](https://www.npmjs.com/package/glicko2-js)

## Benchmarks

### [Personal PC](/specs.md)
#### 1k Players, 1k Matches
| Package          	| Period #1 	| Period #2 	| Period #3 	|
|------------------	|-----------	|-----------	|-----------	|
| go-glicko@1.0.0  	| ~66 ms    	| ~61 ms    	| ~12 ms    	|
| glicko2@0.8.4    	| ~13 ms    	| ~8.52 ms  	| ~2.74 ms  	|
| glicko-two@1.3.1 	| ~9.32 ms  	| ~6.36 ms  	| ~4.14 ms  	|
| glicko2-js@1.0.3 	| ~67 ms    	| ~70 ms    	| ~53 ms    	|

#### 100k Players, 10k Matches
| Package          	| Period #1 	| Period #2 	| Period #3 	|
|------------------	|-----------	|-----------	|-----------	|
| go-glicko@1.0.0  	| ~7.7 s    	| ~8.05 s   	| ~7.85 s   	|
| glicko2@0.8.4    	| ~228 ms   	| ~170 ms   	| ~158 ms   	|
| glicko-two@1.3.1 	| ~260 ms   	| ~211 ms   	| ~199 ms   	|
| glicko2-js@1.0.3 	| ~20 s     	| ~27 s     	| ~26 s     	|

#### 100k Players, 100k Matches
| Package          	| Period #1 	| Period #2 	| Period #3 	|
|------------------	|-----------	|-----------	|-----------	|
| go-glicko@1.0.0  	| ~58 s     	| ~56 s     	| ~54 s     	|
| glicko2@0.8.4    	| ~366 ms   	| ~308 ms   	| ~439 ms   	|
| glicko-two@1.3.1 	| ~380 ms   	| ~436 ms   	| ~301 ms   	|
| glicko2-js@1.0.3 	| ~3.9 min  	| ~5.58 min 	| ~6.7 min  	|

#### 1k Players, 7.5k Matches
| Package          	| Period #1 	| Period #2 	| Period #3 	|
|------------------	|-----------	|-----------	|-----------	|
| go-glicko@1.0.0  	| ~315 ms   	| ~191 ms   	| ~153 ms   	|
| glicko2@0.8.4    	| ~26 ms    	| ~8.03 ms  	| ~12 ms    	|
| glicko-two@1.3.1 	| ~23 ms    	| ~12 ms    	| ~2.73 ms  	|
| glicko2-js@1.0.3 	| ~272 ms   	| ~208 ms   	| ~213 ms   	|

#### 10k Players, 20k Matches
| Package          	| Period #1 	| Period #2 	| Period #3 	|
|------------------	|-----------	|-----------	|-----------	|
| go-glicko@1.0.0  	| ~1.25 s   	| ~1.26 s   	| ~1.23 s   	|
| glicko2@0.8.4    	| ~72 ms    	| ~46 ms    	| ~43 ms    	|
| glicko-two@1.3.1 	| ~65 ms    	| ~45 ms    	| ~31 ms    	|
| glicko2-js@1.0.3 	| ~3.61 s   	| ~3.29 s   	| ~3.28 s   	|

#### 25k Players, 75k Matches
| Package          	| Period #1 	| Period #2 	| Period #3 	|
|------------------	|-----------	|-----------	|-----------	|
| go-glicko@1.0.0  	| ~18 s     	| ~17 s     	| ~18 s     	|
| glicko2@0.8.4    	| ~170 ms   	| ~137 ms   	| ~121 ms   	|
| glicko-two@1.3.1 	| ~156 ms   	| ~159 ms   	| ~115 ms   	|
| glicko2-js@1.0.3 	| ~39 s     	| ~45 s     	| ~47 s     	|

#### 1m Players, 1m Matches
| Package          	| Period #1 	| Period #2 	| Period #3 	|
|------------------	|-----------	|-----------	|-----------	|
| go-glicko@1.0.0  	| ~6.97 h   	| -         	| -         	|
| go-glicko@1.1.0  	| ~10 s     	| ~6.89 s   	| ~6.83 s   	|
| glicko2@0.8.4    	| ~4.26 s   	| ~4.01 s   	| ~3.85 s   	|
| glicko-two@1.3.1 	| ~4.13 s   	| ~4.21 s   	| ~4.18 s   	|
| glicko2-js@1.0.3 	| -         	| -         	| -         	|

### Running Your Own Benchmarks
1. First generate your data sets: `npx cross-env PLAYER_LIMIT=*limit* MATCH_LIMIT=*limit* node ./src/faker.js`
2. Run the benchmark: `npm run bench`