function mergeSort(arr){
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    function merge(left, right){
        let result = [];
        let i = 0;
        let j = 0;

        while(i < left.length && j < right.length){
            if(left[i] <= right[j]){
                result.push(left[i]);
                i++;
            } else{
                result.push(right[j]);
                j++;
            }
        }

        return result.concat(left.slice(i).concat(right.slice(j)));    //Merge leftover elements
    }

    return merge(sortedLeft, sortedRight);
}

console.log("Merge Sort");
console.log("mergeSort([]): ", mergeSort([]));
console.log("mergeSort([73]): ", mergeSort([73]));
console.log("mergeSort([1, 2, 3, 4, 5]): ", mergeSort([1, 2, 3, 4, 5]));
console.log("mergeSort([3, 2, 1, 13, 8, 5, 0, 1]): ", mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log("mergeSort([105, 79, 100, 110]): ", mergeSort([105, 79, 100, 110]));
