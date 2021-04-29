// Write your function here 
function countAllCharacters(givenString){
    let newString=givenString.split(' ').join('')
    var obj={}
    for (let i=0;i<newString.length;i++){
        let count=0 
        for (let j=0;j<newString.length;j++){
            if(newString[i]===newString[j]){

                count ++;
            }
        }
        obj[newString[i]]=count
    }
    return obj
}
console.log(countAllCharacters('bananabanana'))