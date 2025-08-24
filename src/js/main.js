 AOS.init();

 const dataDoEvento = new Date("2026-12-07T05:00:00"); //data do evento
 const timeStampDoEvento = dataDoEvento.getTime(); //pega o tempo do evento em millisegundos

 const contaAtras = setInterval(function() {
        const agora = new Date(); //pega a  data atual
        const timeStampAtual = agora.getTime(); //pega o tempo atual em millisegundos

        const distanciaAteOEvento =  timeStampDoEvento - timeStampAtual; //pega a diferença entre o tempo atual e o tempo do evento

        if(distanciaAteOEvento < 0) {
                    clearInterval(contaAtras);
                    document.getElementById("contador").innerHTML = "o evento ja aconteceu";
                    return;
        }

       const diasAteEvento =  distanciaAteOEvento / (1000 * 60 * 60 * 24); //transforma a diferença em dias 
         const horasAteOEvento = (distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)//transforma a diferença em horas
            const minutosAteOEvento = (distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60)//transforma a diferença em minutos
                const segundosAteOEvento = (distanciaAteOEvento % (1000 * 60)) / 1000//transforma a diferença em segundos
                document.getElementById("contador").innerHTML = Math.floor(diasAteEvento) + "d" + " " + Math.floor(horasAteOEvento) + "h" + " " + Math.floor(minutosAteOEvento) + "m" + " " + Math.floor(segundosAteOEvento) + "s" + " " + "Para o evento contar";
                

 },1000); //atualiza a cada segundo