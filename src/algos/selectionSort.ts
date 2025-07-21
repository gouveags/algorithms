import { findSmallestIndexV2 } from "./findSmallestIndex";

export function selectionSort (arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                const temp: number = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

export function selectionSortV2 (arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++){
        const smallestIndex: number = findSmallestIndexV2(arr, i, arr.length);

        if (smallestIndex !== i) {
            const temp: number = arr[i];
            arr[i] = arr[smallestIndex];
            arr[smallestIndex] = temp;
        }
    }
    return arr;
}