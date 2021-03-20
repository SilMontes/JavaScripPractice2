// Write your function here
function getAllElementsButNth(array,index){
    array.filter((item,i)=>{
        return i!=index
    })
}