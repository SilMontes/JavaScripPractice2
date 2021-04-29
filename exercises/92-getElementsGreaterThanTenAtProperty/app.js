// Write your function here
function getElementsGreaterThan10AtProperty(givenObject,givenKey){
    let newArray=[]
    for (let i=0;i<givenObject[givenKey].length;i++){
        if(givenObject[givenKey][i]>10){
            newArray.push(givenObject[givenKey][i])
        }
    }
    return newArray
}
