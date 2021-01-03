/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
    let frequentMap = new Map();
    let topKFrequentArr = [];
    let resultArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (frequentMap.has(nums[i])) {
            frequentMap.set(nums[i], frequentMap.get(nums[i]) + 1);
        } else {
            frequentMap.set(nums[i], 1);
        }
    }

    for (let [key, value] of frequentMap){
      topKFrequentArr.push([key, value]);
    }

    topKFrequentArr.sort((a, b) => {
       return b[1] - a[1];
    });

    for (let i = 0; i < k; i++) {
        resultArr.push(topKFrequentArr[i][0]);
    }

    return resultArr;
};

console.log(topKFrequent([1,1,1,2,2,3], 2));