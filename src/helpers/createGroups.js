import { createFile } from "./createFile";
import { workerPerformance } from "./workerPerformance";

export const createGroups = (myValue) => {

    /* Variables del archivo de texto */
    const N = myValue[0];
    const K = myValue[2];
    const rendimientoTrabajadores = workerPerformance(myValue);

    /* <Algoritmo con programación dinámica> */



    /* </Algoritmo con programación dinámica> */

    createFile(`N: ${N}, K: ${K}, rendimientoTrabajadores: ${rendimientoTrabajadores}`);
}
