var str="nmopha";
var newstr="";
var length=str.length;
var arr=[];
for(var i=0;i<length;i++)
{
    arr.push(str.charAt(i));
}
arr.sort();
for(var j=0;j<length;j++){
    newstr+=arr[j];
}
console.log(newstr);
