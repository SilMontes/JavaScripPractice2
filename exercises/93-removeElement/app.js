// Write your function here
function removeElement(givenArray,discarder){
    let newArray=givenArray.filter(item=>{
        return item!=discarder
    })
    return newArray
}