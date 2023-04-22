function convertToNumsArr(numsStr){
  let result = [];
  for (let i=0; i<numsStr.length; i++){
    let num = Number(numsStr[i]);
    if (Number.isNaN((num))){
      return new Error(`The value '${numsStr[i]}' at index ${i} is not a valid number.`)
    }

    result.push(num);
  }
  return result;
}

function findMean(nums){
  if(nums.length === 0) return 0;
  return nums.reduce(function(acc, curr){
    return curr + acc
  }) / nums.length;
}

function findMedian(nums){
  nums.sort(function(a, b){return a-b});
  let result;
  let middleIndex = Math.floor(nums.length/2);
  if(nums.length % 2 === 0){
    result = (nums[middleIndex-1] + nums[middleIndex])/2;
  } else {
    result = nums[middleIndex];
  }
  return result;
}

function findMode(nums){
  let result = {};
  for(let num of nums){
    if(!result[num]){
      result[num] = 1;
    }else{
      result[num] += 1;
    }
  }
  console.log(result)
  let mode;
  let count=0;
  for(let key in result){
    if(result[key]>count){
      mode = key;
      count = result[key];
    }
  }
  return Number(mode);
}



module.exports = {
  convertToNumsArr,
  findMean,
  findMedian,
  findMode
}