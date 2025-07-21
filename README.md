# Algorithms

Just a bunch of Algorithms.

## Structure

- `src/algos/` - Algorithm implementations in TypeScript
- `dist/` - Compiled JavaScript files (generated after build)

## Setup

```bash
npm install
```

## Usage

### Run TypeScript files directly (from ./src/index.ts)
```bash
npm run dev
```

Or run individual algorithms:
```bash
npx tsx src/algos/findMissingNumberInArray.ts
```

### Build and run compiled JavaScript (from ./dist/index.js)
```bash
npm run build
npm start
```

Or run individual compiled files:
```bash
node dist/algos/findMissingNumberInArray.js
```

### Clean build artifacts
```bash
npm run clean
```

## Algorithms

- **Find Missing Number in Array** - Finds the missing number in a sequence using XOR operation
- **Quick Sort** - Implementation of the quicksort algorithm
- **Selection Sort** - Implementation of the selection sort algorithm
- **Find Smallest Index** - Finds the index of the smallest element in an array