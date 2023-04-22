const express = require('express');
const app = express();
const ExpressError = require('./expressError')
const {convertToNumsArr,findMean, findMedian, findMode} = require('./helper')


app.get('/mean', function(req, res, next){
  if(!req.query.nums){
    throw new ExpressError('Please pass in a comma-separated list of numbers.', 400);
  }
  let numsStr = req.query.nums.split(',');
  let nums = convertToNumsArr(numsStr);
  if (nums instanceof Error){
    throw new ExpressError(nums.message,400);
  }
  let response = {
    'operation': 'mean',
    'value': findMean(nums)
  } 
  return res.json(response);
})

app.get('/median', function(req, res, next){
  if(!req.query.nums){
    throw new ExpressError('Please pass in a comma-separated list of numbers.', 400);
  }
  let numsStr = req.query.nums.split(',');
  let nums = convertToNumsArr(numsStr);
  if (nums instanceof Error){
    return next(new ExpressError(nums.message, 400))
  }

  let response = {
    'operation': 'median',
    'value': findMedian(nums)
  } 
  return res.json(response);
})

app.get('/mode', function(req, res, next){
  if(!req.query.nums){
    throw new ExpressError('Please pass in a comma-separated list of numbers.', 400);
  }
  let numsStr = req.query.nums.split(',');
  let nums = convertToNumsArr(numsStr);
  if (nums instanceof Error){
    throw new ExpressError(nums.message, 400)
  }

  let response = {
    'operation': 'mode',
    'value': findMode(nums)
  } 
  return res.json(response);
})


app.use(function(req, res, next){
  const e = new ExpressError('Page not found', 404);
  return next(e);
})

app.use(function(err, req, res, next) { 
  res.status(err.status || 500);
  return res.json({
    message: err.msg
  })
})

app.listen(3000, function(){
  console.log('App on port 3000')
})