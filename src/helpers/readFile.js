import { workerPerformance } from "./workerPerformance";

export const readFile = (e, setMyValue, setMyTitle) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();

    fileReader.readAsText(file);

    fileReader.onload = () => {
        console.log(fileReader.result);
        const N = fileReader.result[0];
        const K = fileReader.result[2];
        const rendimientoTrabajadores = workerPerformance(fileReader.result);
        setMyValue(fileReader.result);
        setMyTitle(`N: ${N}, K: ${K}, rendimientoTrabajadores: ${rendimientoTrabajadores}`);
    }

    fileReader.onerror = () => {
        console.log(fileReader.error);
    }

}