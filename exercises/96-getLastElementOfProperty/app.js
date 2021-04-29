// Write your function here
function getLastElementOfProperty(obj,key){
  //  console.log(obj[key].length-1)
   // console.log(obj[key][obj[key].length-2])
    if(obj[key]=='' || !Array.isArray(obj[key]) || Array.isArray(obj[key]) ==[]){
        return undefined
    }else{
        return obj[key][obj[key].length-1]
    }
}
var obj = {
  key: [1, 9, 5,0]
}
var output = getLastElementOfProperty(obj, 'key');
console.log(output)