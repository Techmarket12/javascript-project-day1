
const score = JSON.parse(localStorage.getItem('score'))

        document.querySelector('span').innerHTML = `score : ${score.win} looses : ${score.looses}`

let choix = "";
let choixDuBot = "";

const array1 = ["Pierre" , "Papier", "Ciseaux"]

function nombreRandom() {
    let randomNumber = Math.floor(Math.random()* 3);
    return randomNumber

}


function choixRandom () {

    let choixRandomm = array1[nombreRandom()]
    return choixRandomm
}
function reset() {
        choix = "";
        choixDuBot = "";
        score.win = 0
        score.looses = 0

        localStorage.removeItem('score');

        document.querySelector('span').innerHTML = `score : ${score.win} looses : ${score.looses}`
}

function conditions() {

    
    choixDuBot = choixRandom ()
    if(choix === "Papier" && choixDuBot === "Pierre" || choix === "Ciseaux" && choixDuBot === "Papier" || choix === "Pierre" && choixDuBot === "Ciseaux"   ) {
    
        score.win = score.win + 1
        
        document.querySelector('span').innerHTML = `score : ${score.win} looses : ${score.looses}`
        score.chances = score.win + score.looses

        console.log(`${choix} VS ${choixDuBot}`);
        
        
    
    }else if (choix === "Pierre" && choixDuBot === "Papier" || choix === "Papier" && choixDuBot === "Ciseaux" || choix === "Ciseaux" && choixDuBot === "Pierre" ){
        score.looses = score.looses +1
        document.querySelector('span').innerHTML = `score : ${score.win} looses : ${score.looses}`
        score.chances = score.win + score.looses
        
    }else {
        alert(`${choix} VS ${choixDuBot}`);

    }

    if (score.chances === 3 && score.looses > score.win) {
        alert('tu as perdu'); 
        reset()
    }else if (score.chances === 3 && score.looses < score.win) {
        alert('tu as gagné !')
        reset()
    }
    localStorage.setItem("score", JSON.stringify(score));
    
}

    
