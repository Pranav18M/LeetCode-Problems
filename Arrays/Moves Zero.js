var moveZeroes = function(nums) {
    let insertPos = 0;

    // Move non-zero elements forward
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }

    // Fill remaining with zero
    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }
};
