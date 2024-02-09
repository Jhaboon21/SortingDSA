function bubbleSort(arr) {
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }
    
    // loop with i from end of arry towards beginning
    for (let i = arr.length; i > 0; i--) {
        // loop with j from beginning untill i - 1
        for (let j = 0; j < i-1; j++) {
            // if arr[j] is greater than arr[j+1], swap those two values
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;