var a=0;
var b=1;
var num;
var str="";
str+=a+" "+b;
for(var i=2;i<10;i++){
    num=a+b;
    str+=" "+num;
    a=b;
    b=num;
}
console.log(str);