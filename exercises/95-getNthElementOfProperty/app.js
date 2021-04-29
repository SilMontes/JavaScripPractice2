// Write your function here
function getNthElementOfProperty(givenObject,givenKey,value){
    if(Array.isArray(givenObject[givenKey])){
        return givenObject[givenKey][value]
    }
}
var obj = {
  key: [1, 2, 6]
}
console.log(getNthElementOfProperty(obj, 'key', 1))