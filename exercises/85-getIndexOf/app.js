// Write your function here
let name='Holah'
function getIndexOf(character,string){
    let index=''
    for (let i=0;i<string.length;i++){
       if(string[i]==character){
           return index=i
        }
        
    }
}
console.log(getIndexOf('h',name))