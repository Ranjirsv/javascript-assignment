var a=[1, 2, 3];
var a2= [100, 2, 1, 10];
function diffArray(arr1, arr2) {
 var newArr = [];

  arr1.forEach(function(val){
   if(arr2.indexOf(val) < 0) newArr.push(val);
  });

  arr2.forEach(function(val){
   if(arr1.indexOf(val) < 0) newArr.push(val);
  });
console.log(newArr);
  return newArr;
}
diffArray(a,a2);