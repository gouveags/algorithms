// TODO: Fix this algorithm
export function quickSort (arr: number[]): number[] {
    if(arr.length < 2) return arr;

    const pivotIndex: number = Math.floor(arr.length/2);
    const pivot: number = arr[pivotIndex];

    arr = arr.slice(0, pivotIndex).concat(arr.slice(pivotIndex + 1, arr.length));

    let cuttingIndex: number = 0;

    for(let i = 0; i < arr.length; i++){
        if(pivot > arr[i]){
            cuttingIndex = i + 1;
            break;
        }
    }

    const start: number[] = arr.slice(0, cuttingIndex);
    const end: number[] = arr.slice(cuttingIndex, arr.length);

    return quickSort(start).concat(pivot, quickSort(end));
}

export function quickSortV2 (arr: number[]): number[] {
    if(arr.length < 2) return arr;

    return quickSortV2(
        arr.filter((value, index) => value < arr[Math.floor(arr.length/2)] || (value === arr[Math.floor(arr.length/2)] && index !== Math.floor(arr.length/2)))
    )
    .concat(
        arr[Math.floor(arr.length/2)],

        quickSortV2(arr.filter((value) => value > arr[Math.floor(arr.length/2)]))
    );
}