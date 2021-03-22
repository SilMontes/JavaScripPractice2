// Write your function here
function getAverageOfElementsAtProperty(object,key){
    //revisa si es un arreglo, si el valor es indefinido y si está vacio
    if(Array.isArray(object[key])===false || object[key]===undefined ||object[key].length===0){
        return 0
    }else{
        let sumOfValues=0;
        for(key in object){
            for(let i=0; i<object[key].length;i++){
                sumOfValues += object[key][i]
            }
            let average=sumOfValues/object[key].length
            return average
        }
    }
}
