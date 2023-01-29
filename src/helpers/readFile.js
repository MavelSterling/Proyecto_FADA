import { workerPerformance } from "./workerPerformance";

export const readFile = (e, setMyValue, setMyTitle) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();

    fileReader.readAsText(file);

    fileReader.onload = () => {
        console.log(fileReader.result, 'result');
        //quitar espacios en blanco y saltos de linea
        let result = fileReader.result;
        result = (result).replace(/\s/g, ',');
        result = (result).replace(/\n/g, ',');
        //quitamos la ultima coma
        result = result.substring(0, result.length - 1);
        //convertimos a array
        result = result.split(',');
        //quitamos las posiciones vacias
        result = result.filter(function (el) {
            return el != "";
        });
        console.log(result, 'result2222');
        
        const N = result[0];
        const K = result[1];
        //const rendimientoTrabajadores = workerPerformance(fileReader.result);
        setMyValue(result);
        setMyTitle(`N: ${N}, K: ${K}, rendimientoTrabajadores: ${result.slice(1, result.length)}`);
    }

    fileReader.onerror = () => {
        console.log(fileReader.error);
    }

}