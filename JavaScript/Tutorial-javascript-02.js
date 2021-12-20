function executeCallback(some) {
    console.log("callback:"+some);
}
  
function main_function(num, myCallback) {
    console.log(num);
    myCallback(num+1);
}
  
