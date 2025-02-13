
let heroScore = rankPlayer (91, 1)

function rankPlayer (win, defeat){
    let calcWins = win - defeat
    const response = "O Herói tem de saldo de vitórias " + calcWins + " e está no nível de "
    if (calcWins <= 10){
        console.log( response + "Ferro")
    } else if (calcWins > 10 && calcWins <= 20) {
        console.log (response + "Bronze")
    } else if (calcWins > 20 && calcWins <= 50) {
        console.log (response + "Prata")
    } else if (calcWins > 50 && calcWins <= 80) {
        console.log (response + "Ouro")
    } else if (calcWins > 80 && calcWins <= 90) {
        console.log (response + "Diamante")
    } else if (calcWins > 90 && calcWins <= 100) {
        console.log (response + "Lendário")
    } else 
        console.log (response + "Imortal")


}  
