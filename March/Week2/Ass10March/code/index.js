let sec = 59;
let min = 3;
let decreMint = true
let decrement = true;
function fn() {
 document.getElementById('sec').innerText = sec;
 if(decrement) {
     if(sec <= 1) {
         decrement = false;
        }
        sec -=1;
 }
 else{
    sec = 59;
    decrement = true
 }
}
const pauseMin = setInterval(forMin,60000)
 const stop = setInterval(fn,1000);
 function forMin() {
     document.getElementById('min').innerText = min;
     if(decreMint) {
         min -=1;
         if(min <= 0) {
            decreMint = false;
         }
     }else {
         min = 5;
         decreMint = true;
     }
 }
 document.getElementById('btn').addEventListener('click',pause);
function pause() {
    clearInterval(stop);
    clearInterval(pauseMin);
}
//clock Coding
function time() {
    const date = new Date()
    hours = date.getHours();
    minutes = date.getMinutes();
    second = date.getSeconds();
    document.getElementById('Hours').innerText =" "+ hours;
    document.getElementById('Min').innerHTML = ": "+minutes;
    document.getElementById('Sec').innerHTML = ": "+second;
}
 const stops = setInterval(time,1000)
