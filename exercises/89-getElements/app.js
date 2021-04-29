// Write your function here
function getElementsThatEqual10AtProperty(givenObject,givenKey){
    let newArray=[]
    for (let i=0;i<givenObject[givenKey].length;i++){
       if(givenObject[givenKey][i]=='10'){
           newArray.push(givenObject[givenKey][i])
       }
    }
    return newArray

}
var obj = {
  key: [1000, 10, 50, 10]
}
console.log(getElementsThatEqual10AtProperty(obj,'key'))