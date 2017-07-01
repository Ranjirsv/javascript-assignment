var str="gmail.com";
var character='o';
var count=0;
for(var i=0;i<str.length;i++){
    if(str.charAt(i)==character){
        count++;
    }
}
console.log(count);