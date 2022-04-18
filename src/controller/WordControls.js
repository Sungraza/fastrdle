import WORDLIST from '../words.js';

export const IsWordInList = ((word) => {
    return WORDLIST.WORDLIST.includes(word.toLowerCase());    
});

export const IsWordSolution = ((word) => {
    return word.toLowerCase() === localStorage.getItem("solution").toLowerCase();
});

export const checkWord = ((word) => {
    const wordLetters = word.split("");
    const solution = localStorage.getItem("solution");
    const solLetters = solution.split("");
    let conclusion = [];
    
    for (let i = 0; i < 5; i++) {
        if (wordLetters[i].toLowerCase() == solLetters[i].toLowerCase()) {
            conclusion.push("correct");
        } else if (solution.includes(wordLetters[i].toLowerCase())) {
            conclusion.push("placement");
        } else {
            conclusion.push("wrong");
        }
    }
    
    return conclusion;
})