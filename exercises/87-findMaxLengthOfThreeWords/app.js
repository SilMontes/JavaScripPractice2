// Write your function here
function findMaxLengthOfThreeWords(word1,word2,word3){
    let amountOfLetters=[word1,word2,word3]
    let word=''
    for (let item=0;item<amountOfLetters.length;item++){
        if(amountOfLetters[item].length>word.length){
            word=amountOfLetters[item]
        }
    }
    return word.length

}