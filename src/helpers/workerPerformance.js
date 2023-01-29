export const workerPerformance = (myValue) => {

    const arregloInicial = myValue.split('');
    const rendimientoTrabajadores = [];
    console.log("arregloInicial", arregloInicial)
    for (let i = 3; i < arregloInicial.length; i++) {
        if (arregloInicial[i] === "\n" && arregloInicial[i + 3] === "\r" || arregloInicial[i] === "\n" && (i + 3) >= arregloInicial.length) {
            if (arregloInicial[i + 2]) {

                rendimientoTrabajadores.push(arregloInicial[i + 1] + arregloInicial[i + 2])
            } else {
                rendimientoTrabajadores.push(arregloInicial[i + 1])

            }
            i += 3;
        } else if (arregloInicial[i] != " " && arregloInicial[i] != "\r" && arregloInicial[i] != "\n") {
            rendimientoTrabajadores.push(arregloInicial[i])
            console.log("hola", arregloInicial[i])
        }
    }

    return rendimientoTrabajadores;
}
