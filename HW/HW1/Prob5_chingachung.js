const chingachung = (pl1, pl2) => {

    if (!(pl1 === "Paper" || pl1 === "Scissors" || pl1 === "Rock") || !(pl2 === "Paper" || pl2 === "Scissors" || pl2 === "Rock")){
        alert("Invalid input, enter the correct value");
        return inputHandler();
    }
    else if (pl1 === pl2){
        alert("Draw! Enter new values.");
        return inputHandler();
    }else {
        if(pl1 === "Paper" && pl2 === "Rock" || pl1 === "Rock" && pl2 === "Scissors" || pl1 === "Scissors" && pl2 === "Paper"){
            alert("1st Player wins");
        }else if(pl2 === "Paper" && pl1 === "Rock" || pl2 === "Rock" && pl1 === "Scissors" || pl2 === "Scissors" && pl1 === "Paper"){
            alert("2nd Player wins");
        }
    }


}

const inputHandler = () => {
    let p1 = prompt("Player 1");
    let p2 = prompt("Player 2");

    chingachung(p1, p2)
}

inputHandler();