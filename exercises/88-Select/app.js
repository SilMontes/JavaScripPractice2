// Write your function here
function select(givenArray,givenObject){
    let newObject={}
    for(let i=0;i<givenArray.length;i++){
        for(key in givenObject){
            if(givenArray[i]===key){
                newObject[key]=givenObject[key]
            }
        }
    }
    return newObject
}
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
console.log(select(arr,obj))