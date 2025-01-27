alert('Bem vindo ao jogo da adivinhacao');
let numTotal = 100;
let numSecrete =  parseInt(Math.random() * numTotal + 1);
let chute = prompt(`numero que vc ache q seja o secreto de 1 a ${numTotal}`);

while(true){
    if (chute == numSecrete){
        alert(`vc esta certo numero secreto e o ${numSecrete} `);
        console.log('a pessoa acertou o chute ' + chute);
        break;
    }
    else{
        if(chute > numSecrete){
            alert('o numero secreto e menor ');
        }
        else{
            alert('o numero secreto e maior ');
        }
        // alert(`vc errou o numero secreto e o ${numSecrete} `);
        // console.log('a pessoa errou o chute ' + chute);
        chute = prompt('tente adivinhar');
    }
}