function hasContiguousSubarray(arr, target) {
    let sum = 0;
    const sumMap = new Map();
    sumMap.set(0, -1); // Handle the case when subarray starts from index 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sumMap.has(sum - target)) {
            return true;
        }

        sumMap.set(sum, i);
    }

    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasContiguousSubarray(arr, target)); // Output: true
