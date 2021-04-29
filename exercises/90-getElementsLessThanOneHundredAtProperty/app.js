// Write your function here
function getElementsLessThan100AtProperty(givenObject,givenKey){
    let newArray=[]
    for (givenKey in givenObject){
        for (let i=0;i<givenObject[givenKey].length;i++){
            if(givenObject[givenKey][i]<100){
                newArray.push(givenObject[givenKey][i])
            }
        }
    }
    return newArray
}
var obj = {
  key: [1000, 20, 50, 500]
}
console.log(getElementsLessThan100AtProperty(obj,'key'))