// Write your function here
function addToFrontOfNew(array,input){
    let newArray=[];
    newArray.unshift(input)
    return newArray.concat(array)
}