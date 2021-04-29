// Write your function here
function getAllElementsButNth(array,index){
    let nuevo=array.filter((item,i)=>{
        return i!=index
    })
    return nuevo
}
getAllElementsButNth(['a','b','c'],1)