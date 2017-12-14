Conway's Game of Life
=====================

An AssemblyScript example.

Instructions
------------

To build [assembly/game-of-life.ts](./assembly/game-of-life.ts) to an untouched and an optimized `.wasm` including their respective `.wast` representations, run:

```
$> npm run build
```

Afterwards, open [game-of-life.html](./game-of-life.html) in a browser (ideally one that allows `fetch`ing the `.wasm` from the local filesystem).