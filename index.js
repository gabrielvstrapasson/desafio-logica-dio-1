let nome = "Tiranossauro" // aqui é a definição do nome do personagem.
let xp = 7001 //Definindo o nível de XP será feita a verificação para verificar qual nível o personagem está.

if (xp >= 0 && xp <=1000){
    console.log("O Herói de " + nome + " está no nível de Ferro")
} else if (xp >= 1001 && xp <=2000){
    console.log("O Herói de " + nome + " está no nível de Bronze" )
} else if (xp >= 2001 && xp <=5000){
    console.log("O Herói de " + nome + " está no nível de Prata" )
} else if (xp >= 5001 && xp <=7000){
    console.log("O Herói de " + nome + " está no nível de Ouro" )
} else if (xp >= 7001 && xp <=8000){
    console.log("O Herói de " + nome + " está no nível de Plantina" )
} else if (xp >= 8001 && xp <=9000){
    console.log("O Herói de " + nome + " está no nível de Ascendente" )
} else if (xp >= 9001 && xp <=10000){
    console.log("O Herói de " + nome + " está no nível de Imortal" )
} else{
    console.log("O Herói de " + nome + " está no nível de Radiante" )
}


