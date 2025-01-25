import { findSmallestV2 } from "./findSmallest.js";

export function selectionSort (arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

export function selectionSortV2 (arr) {
    const lenght = arr.length;
    for (let i = 0; i < arr.length; i++){
        const smallestIndex = findSmallestV2(arr, i, arr.length)

        if (smallestIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[smallestIndex];
            arr[smallestIndex] = temp;
        }
    }
    return arr;
}

function main(){
    const res = selectionSort([2,3,1,11,8,12,13,4,5,6,7,9,10,1]);

    const res2 = selectionSortV2([2,3,1,11,8,12,13,4,5,6,7,9,10,1]);

    if(`${res}` === "1,1,2,3,4,5,6,7,8,9,10,11,12,13" && `${res2}` === "1,1,2,3,4,5,6,7,8,9,10,11,12,13") return "WORKS!";

    return "ERROR: SOMETHING IS WRONG!";
}

console.log(main());