// Write your function here
function findMinLengthOfThreeWords(word1,word2,word3){
    let amountOfLetters=[word1,word2,word3]
    let word='findMinLengthOfThreeWords'
    for (let item=0;item<amountOfLetters.length;item++){
        if(amountOfLetters[item].length<word.length){
            word=amountOfLetters[item]
        }
    }
    return word.length

}
console.log(findMinLengthOfThreeWords('a','b','see'))