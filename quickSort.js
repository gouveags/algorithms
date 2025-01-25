export function quickSort (arr) {
    if(arr.length < 2) return arr;

    const pivotIndex = Math.floor(arr.length/2);
    const pivot = arr[pivotIndex];

    arr = arr.slice(0, pivotIndex).concat(arr.slice(pivotIndex + 1, arr.length));

    let cuttingIndex = 0;

    for(let i = 0; i < arr.length; i++){
        if(pivot > arr[i]){
            cuttingIndex = i + 1;
            break;
        }
    }

    const start = arr.slice(0, cuttingIndex);
    const end = arr.slice(cuttingIndex, arr.length);

    return quickSort(start).concat(pivot, quickSort(end));
}

export function quickSortV2 (arr) {
    if(arr.length < 2) return arr;

    return quickSortV2(
        arr.filter((value, index) => value < arr[Math.floor(arr.length/2)] || (value === arr[Math.floor(arr.length/2)] && index !== Math.floor(arr.length/2)))
    )
    .concat(
        arr[Math.floor(arr.length/2)], 
    
        quickSortV2(arr.filter((value) => value > arr[Math.floor(arr.length/2)]))
    );
}

function main(){
    // const res = quickSort([2,3,1,11,8,12,13,4,5,6,7,9,10,1]);
    const res2 = quickSortV2([2,3,1,11,8,12,13,4,5,6,7,9,10,1]);

    // console.log(res);

    console.log(res2);

    if(
        // `${res}` === "1,1,2,3,4,5,6,7,8,9,10,11,12,13" && 
        `${res2}` === "1,1,2,3,4,5,6,7,8,9,10,11,12,13") return "WORKS!";

    return "ERROR: SOMETHING IS WRONG!";
}


console.log(main());