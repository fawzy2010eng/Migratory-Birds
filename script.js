// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    var array = [];
    for(var i = 0; i < arr.length; i++){
        if(array[arr[i]] == undefined){
              array[arr[i]] = 1
          }else{
              array[arr[i]] += 1  
          }
    }
    var max = array.reduce(function(a, b) {
    return Math.max(a, b);
    });
    return array.indexOf(max);

}
            
