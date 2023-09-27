// bubbleSort()
/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/
//             i
//             j j+1
const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(nums) {
    // assume your algo roles:
    // 🚗 DRIVER
    // 👨‍🏫 PRESENTER
    // 🧭 NAVIGATOR

    // write your pseudocode
}

// call the function and pass nums1, nums2, nums3
bubbleSort(nums1);
console.log(nums1);









const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) { // iterating forward through every element in the array
        for (let j = 0; j < nums.length; j++) { // iterating through every element in the array
            if (nums[j] > nums[j + 1]) { // checking to see if current (j) element is larger then next element (j+1)
                const temp = nums[j] // setting a temporary variable
                nums[j] = nums[j + 1] // swapping "neighbors"
                nums[j + 1] = temp //
            }
        }
    } return nums
}
console.log(bubbleSort(nums1));
console.log(bubbleSort(nums2));
console.log(bubbleSort(nums3));