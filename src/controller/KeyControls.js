import { IsWordInList, checkWord, IsWordSolution } from './WordControls';
import { createAlert } from './AlertControls'; 

export const onPress = ((key) => {
    const tile = document.getElementsByClassName("tile empty")[0];
    const tileBefore = document.getElementsByClassName("tile filled")[document.getElementsByClassName("tile filled").length-1];
    
    if (tileBefore && tile) {
            if (tile.parentElement != tileBefore.parentElement) {
                tileBefore.parentElement.classList.add("completed");
                
                if (tileBefore.parentElement.classList.contains("finished")) {
                    tile.innerHTML = key.toUpperCase();
                    tile.classList.replace("empty", "filled");
                }
            } else {
                tile.innerHTML = key.toUpperCase();
                tile.classList.replace("empty", "filled");
            }
    } else if (tile) {
        tile.innerHTML = key.toUpperCase();
        tile.classList.replace("empty", "filled");
    } else return;
});

export const onBackspace = (() => {
    const tile = document.getElementsByClassName("tile empty")[0];
    const previousTile = document.getElementsByClassName("tile filled")[document.getElementsByClassName("tile filled").length-1];
        
    if (previousTile && !previousTile.parentElement.classList.contains("finished")) {
        previousTile.classList.replace("filled", "empty");
        previousTile.innerHTML = "&nbsp;";
    } else return;
});

export const onEnter = ((e) => {
    const previousTile = document.getElementsByClassName("tile filled")[document.getElementsByClassName("tile filled").length-1]; 
    let fullWord = "";
    
    if (previousTile) {
        if (previousTile.parentElement.classList.contains("finished")) return;
        
        const tiles = previousTile.parentElement.children; 
    
        for (let i = 0; i < tiles.length; i++) {
            fullWord += tiles[i].innerHTML;
        }
    
        if (fullWord.length < 5) return createAlert("Error", "Please type a five-letter word!", "danger");
    
        if (IsWordInList(fullWord)) {
            previousTile.parentElement.classList.add("finished");
            const check = checkWord(fullWord);
            localStorage.setItem("currentRow", parseInt(localStorage.getItem("currentRow"))+1);
            
            for (let i = 0; i < tiles.length; i++) {
                let keyboardKey = document.getElementById(tiles[i].innerHTML.toUpperCase());
                tiles[i].classList.add(check[i]); 
                if (!keyboardKey.classList.contains("correct")) {
                    if (keyboardKey.classList.contains("placement")) {
                        keyboardKey.classList.replace("placement", check[i]);
                    }
                    keyboardKey.classList.add(check[i], "animate");
                }
                tiles[i].classList.add("animate");
            }
            
            if (IsWordSolution(fullWord)) {
                localStorage.setItem("gameState", "won");
                createAlert("Great Job!", "You guessed the word, " + localStorage.getItem("solution") + "!", "success");
            } else if (previousTile.parentElement.id == "row6") {
                createAlert("Game Over", "You didn't win, the word was " + localStorage.getItem("solution"), "success");
            }
        } else {
            createAlert("Error", "That\'s not a word!", "danger");
        }
    }
});