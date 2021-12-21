function myPromises(){
    let addPromise = new Promise(function(success, error){
        console.log("processing some code");
        setTimeout( ()=>{console.log("stop");}, 3000);

        success();
        error();
    })
    addPromise.then(
        function success(){
            console.log("Success");
        },
        function error(){
            console.log("error");
        }
    )
}
async function mysyncfunction(){
    setTimeout( ()=>{console.log("stop");}, 3000);
    console.log("processing some code: async fucntion");

}

function main_function(num) {
    //myPromises()
    mysyncfunction().then(
        function(value) {console.log("success");},
        function(value) {console.log("error");}
    );
    console.log(num);
}
  
