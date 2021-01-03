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

#### 100k Players, 100k Matches
| Package    	| Period #1 	| Period #2 	| Period #3 	|
|------------	|-----------	|-----------	|-----------	|
| go-glicko  	| ~58 s     	| ~56 s     	| ~54 s     	|
| glicko2    	| ~366 ms   	| ~308 ms   	| ~439 ms   	|
| glicko-two 	| ~380 ms   	| ~436 ms   	| ~301 ms   	|
| glicko2-js 	| ~3.9 min  	| ~5.58 min 	| ~6.7 min  	|

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

#### 1m Players, 1m Matches
| Package    	| Period #1 	| Period #2 	| Period #3 	|
|------------	|-----------	|-----------	|-----------	|
| go-glicko  	| ~6.97 h   	| -         	| -         	|
| glicko2    	| ~3.91 s   	| ~4.13 s   	| ~3.7 s    	|
| glicko-two 	| ~3.98 s   	| ~3.97 s   	| ~4.05 s   	|
| glicko2-js 	| -         	| -         	| -         	|

> Okay, wow. This is why I created these benchmarks. 7 hours to process 3 rating periods of 1 million matches with 1 million players? Ridiculous. I will be looking into this very carefully and tearing apart the code to discover why this is. In initial testing and working with prototypes, it didn't seem like much...but this? This is crazy. 
>
> Matthew H, go-glicko developer

### Running Your Own Benchmarks
1. First generate your data sets: `npx cross-env PLAYER_LIMIT=*limit* MATCH_LIMIT=*limit* node ./src/faker.js`
2. Run the benchmark: `npm run bench`