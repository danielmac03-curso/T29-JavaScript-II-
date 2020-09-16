var resultados = [0,0,0,0,0,0,0,0,0,0,0];

function dados() {

    for(var i=0; i <= 36000; i++){

        var dado1 = Math.floor(Math.random() * 6) + 1;

        var dado2 = Math.floor(Math.random() * 6) + 1;
        
        resultado = dado1 + dado2;

        if (resultado === 2){
            resultados[0] = resultados[0]+1;
        }
        else if (resultado === 3){
            resultados[1] = resultados[1]+1;
        }
        else if (resultado === 4){
            resultados[2] = resultados[2]+1;
        }
        else if (resultado === 5){
            resultados[3] = resultados[3]+1;
        }
        else if (resultado === 6){
            resultados[4] = resultados[4]+1;
        }
        else if (resultado === 7){
            resultados[5] = resultados[5]+1;
        }
        else if (resultado === 8){
            resultados[6] = resultados[6]+1;
        }
        else if (resultado === 9){
            resultados[7] = resultados[7]+1;
        }
        else if (resultado === 10){
            resultados[8] = resultados[8]+1;
        }
        else if (resultado === 11){
            resultados[9] = resultados[9]+1;
        }
        else if (resultado === 12){
            resultados[10] = resultados[10]+1;
        }

    }

    console.log(resultados);
    alert(resultados);

}