//

var num=prompt("Enter the size of Array : ");
var arr=[];

if(isNaN(num)){
     alert("Please enter the valid size of array : ")
}else{
for(var i=0; i<num; i++){
    arr[i]=prompt("Enter a element of array : ");
}
console.log(arr);
var max=arr[0];
for(i=0; i<num; i++){
     if(arr[i]>max){
          max=arr[i];
     }
}
alert(max +" is maximum element number");
console.log(max+ " is a maximum element in the Array");
}

