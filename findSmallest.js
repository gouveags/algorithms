export function findSmallest (arr) {
    let smallestIndex = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < arr[smallestIndex]){
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

export function findSmallestV2 (arr, from, finish) {
    let smallestIndex = from;
    for (let i = from + 1; i < finish; i++){
        if(arr[i] < arr[smallestIndex]){
            smallestIndex = i;
        }
    }
    return smallestIndex;
}