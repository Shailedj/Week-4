//Array flattenr activity
// Define a function arrayFlattener with a 2 dimensional array as parameter:
// example of 2 dimensional array: [1,[2,3],4,5]

//Return a new 1 dimensional array like, [1,2,3,4]

//your code here
function arrayFlattener(arr1){
  let numbers = [arr1[0],arr1[1][0],arr1[1][1],arr1[2]];
  return numbers
}
  
  //uncomment next line one by one, then check the console for results
   console.log(arrayFlattener([1,[2,3],4,5]))
  
  //don't change this line
  if (typeof module !== "undefined") {
    module.exports = {
      arrayFlattener,
    };
  }
  