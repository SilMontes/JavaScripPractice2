// Write your function here
function computeAverageOfNumbers(array){
        let amount=0
    for (let i=0;i<array.length;i++){
        amount+=array[i]
    }
    return amount/array.length
}