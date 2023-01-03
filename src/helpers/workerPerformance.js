export const workerPerformance = (myValue) => {

    const arregloInicial = myValue.split('');
    const rendimientoTrabajadores = [];

    for (let i = 3; i < arregloInicial.length; i++) {
        if (arregloInicial[i] === "\n" && arregloInicial[i + 3] === "\r" || arregloInicial[i] === "\n" && (i + 3) >= arregloInicial.length) {
            rendimientoTrabajadores.push(arregloInicial[i + 1] + arregloInicial[i + 2])
            i += 3;
        } else if (arregloInicial[i] != " " && arregloInicial[i] != "\r" && arregloInicial[i] != "\n") {
            rendimientoTrabajadores.push(arregloInicial[i])
        }
    }

    return rendimientoTrabajadores;
}
