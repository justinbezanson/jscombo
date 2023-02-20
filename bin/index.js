const wordlist = require('wordlist-english');

let englishWords = wordlist['english'],
    count = 0;

let arr = [
    ["S", "W", "B", "P", "F", "M", "D", "T", "A", "L"],
    ["E", "T", "N", "A", "P", "O", "R", "I", "L", "C"],
    ["R", "I", "L", "A", "N", "U", "T", "O", "S", "E"],
    ["A", "O", "S", "K", "N", "R", "T", "E", "L", "D"],
    ["R", "L", "S", "N", "T", "H", "Y", "D", "_", "E"]
];

arr.forEach(letters => letters.sort());

for(let i=0; i< arr[0].length; i++) {
    for(let j=0; j< arr[1].length; j++) {
        for(let k=0; k< arr[2].length; k++) {
            for(let l=0; l< arr[3].length; l++) {
                for(let m=0; m< arr[4].length; m++) {
                    let word = arr[0][i]+arr[1][j]+arr[2][k]+arr[3][l]+arr[4][m];
                    
                    if(englishWords.indexOf(word.toLowerCase().trim()) > -1) {
                        count++;
                        console.log(word);
                    }
                }   
            }
        }
    }
}

console.log(`COUNT: ${count}`);