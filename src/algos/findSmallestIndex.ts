export function findSmallestIndex (arr: number[]): number {
    let smallestIndex: number = 0;

    for (let i = 0; i < arr.length; i++){
        if(arr[i] < arr[smallestIndex]){
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

export function findSmallestIndexV2 (arr: number[], from: number, finish: number): number {
    let smallestIndex: number = from;

    for (let i = from + 1; i < finish; i++){
        if(arr[i] < arr[smallestIndex]){
            smallestIndex = i;
        }
    }

    return smallestIndex;
}