let choix = "";
let choixDuBot = "";
let score = 0;
let looses = 0;
let chances;

const array1 = ["Pierre" , "Papier", "Ciseaux"]

function nombreRandom() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber

}


function choixRandom () {

    let choixRandomm = array1[nombreRandom()]
    return choixRandomm
}
function reset() {
    choix = "";
choixDuBot = "";
score = 0;
looses = 0;

        document.querySelector('span').innerHTML = `score : ${score} looses : ${looses}`
}

function conditions() {

    
    choixDuBot = choixRandom ()
    if(choix === "Papier" && choixDuBot === "Pierre" || choix === "Ciseaux" && choixDuBot === "Papier" || choix === "Pierre" && choixDuBot === "Ciseaux"   ) {
    
        score ++
        
        document.querySelector('span').innerHTML = `score : ${score} looses : ${looses}`
        chances = score + looses

        console.log(`${choix} VS ${choixDuBot}`);
        
        
    
    }else if (choix === "Pierre" && choixDuBot === "Papier" || choix === "Papier" && choixDuBot === "Ciseaux" || choix === "Ciseaux" && choixDuBot === "Pierre" ){
        looses ++
        document.querySelector('span').innerHTML = `score : ${score} looses : ${looses}`
        chances = score + looses
        
    }else {
        alert(`${choix} VS ${choixDuBot}`);

    }

    if (chances === 3 && looses > score) {
        alert('tu as perdu'); 
        reset()
    }else if (chances === 3 && looses < score) {
        alert('tu as gagné !')
        reset()
    }
    
    
}

    