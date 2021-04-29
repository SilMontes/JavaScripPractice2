// Write your function here
function getFirstElementOfProperty(givenObject,givenKey){
    for (givenKey in givenObject){
        return givenObject[givenKey][0]
    }
}