import { createFile } from "./createFile";
import { workerPerformance } from "./workerPerformance";

export const createGroups = (myValue) => {

    /* Variables del archivo de texto */
    const N = myValue[0];
    const K = myValue[2];
    const rendimientoTrabajadores = workerPerformance(myValue);
    console.log("rendimientoTrabajadores: ", rendimientoTrabajadores)
    /*
      COSTE COMPUTACIONAL O(n)
      @example En el caso del profesor solo se pueden formar 2 grupos de 3 y uno de 1
               por lo cual las posibles combinaciones consecutivas serian
               [3,3,1]
               [1,3,3]
               [3,1,3]
               Esto es lo que hace esta funcion
      @param object_array ->  arreglo que contiene cuantos grupos de cantidad k se formaron y el 
             que quedo sin completar la cantidad maxima.
      return []
    */
    function all_combination_array_recursive(array, array_combi, last_element, index) {
        if (index === array.length - 1) {
            return array_combi;
        } else {
            let array_aux = array.slice();
            array_aux[index] = last_element;
            array_aux[array_aux.length - 1] = array[index];
            array_combi.push(array_aux);
            return all_combination_array_recursive(array, array_combi, last_element, index + 1);
        }
    }

    //retorna todas las combinaciones de un array llamando a la funcion recursiva
    function all_combination_array(array) {
        let array_combi = [array];
        let last_element = array[array.length - 1];
        return all_combination_array_recursive(array, array_combi, last_element, 0);
    }

    //retonar el elemento maximo de un arreglo
    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }

    /*
      COSTE COMPUTACIONAL O(n)
      @param array ->  contiene un arreglo con los tiempos de rendimiento de cada empleado
      @param k --> contiene la cantidad maxima de empleados permitidos en un grupo
      @param N --> contiene la cantidad de empleados
      @dec retornar un arreglo con las veces que se pueden crear grupos de cantidad k y los 
           sobrantes
      @return []
    */
    // function cantidad_grupos_k_array(array = [], K, N) {
    //     if (N === 0 || array.length <= K) return [array.length];
    //     return [K, ...cantidad_grupos_k_array(array.slice(K), K, N - 1)];
    // }
    function cantidad_grupos_k_array(array = [], K) {
        let result = [];
        let i = 0;
        while (i < array.length) {
            result.push(Math.min(K, array.length - i));
            i += K;
        }
        return result;

    }


    /*
      COSTE COMPUTACIONAL O(n)
      @example En caso del profesor [3,3,1] que es una posible combinacion
               lo que hace esta funcion es tomar el maximo del elemento 0 hasta el 3
               y multiplicarlo por 3 que es el numero de empleados que alcazan el rendimiento
               del mejor trabajador en ese orden, contando al que ya tiene ese rendimiento
      @param array --> un arreglo de una combinacion de de los grupos previamente 
                       formados
      @param array_perfomance --> array con los tiempos de rendimiento de cada empleado 
      @return number
    */
    function recursive_max_perfomance(array, array_perfomance, max_performance, index, next, index_rihgt) {

        if (index === array.length) {
            return max_performance;
        }

        next = (index_rihgt + array[index]);
        max_performance += getMaxOfArray(array_perfomance.slice(index_rihgt, next)) * array[index];
        index_rihgt += array[index];

        let result = recursive_max_perfomance(array, array_perfomance, max_performance, index + 1, next, index_rihgt);
        return result
    }

    function max_performance_array(array, array_perfomance) {

        //variable para guardar la suma del rendimiento maximo
        var max_performance = 0
        //variable que nos indica de donde incia cada region a tomar del arreglo
        let index = 0
        //variable que indica hasta donde llega cada region dentro del arreglo
        let next = array[0]
        let sum_array = []

        //buclesito :3
        for (const i in array) {
            //iniciar la variable next que es la suma del anterior incio con el de
            //la siguiente
            next = (index + array[i])
            //guarda la cantidad maxima de renmiendo
            max_performance += getMaxOfArray(array_perfomance.slice(index, next)) * array[i]
            //console.log(max_performance)
            sum_array.push(max_performance)
            //aumentar el index de la siguiente zona
            index += array[i]

        }

        //retorna la cantidad de rendimiento maxima
        return max_performance

    }

    //retorna el maximo de la suma de los grupos de cantidad k
    function secuence_max_perfomance(array, n, k, array_max_performance_all, array_all_combi_groups, cant_groups) {

        if (cant_groups > k) {
            console.log(getMaxOfArray(array_max_performance_all), 'array_all_combi_groups')
            //sacar la secuencia de mayor rendimiento
            return array_all_combi_groups[array_max_performance_all.indexOf(getMaxOfArray(array_max_performance_all))]
        }

        let cantidad_maxima_grupos_k = cantidad_grupos_k_array(array, cant_groups, n)
        let all_combination_groups_k = all_combination_array(cantidad_maxima_grupos_k, 0, [])
        array_all_combi_groups.push(...all_combination_groups_k)

        max_perfomance_combination_array(all_combination_groups_k, array, array_max_performance_all, 0)

        let result = secuence_max_perfomance(array, n, k, array_max_performance_all, array_all_combi_groups, cant_groups + 1)
        return result

    }


    //retorna la suma del maximo de cada grupo de cantidad k
    function max_perfomance_combination_array(all_combination_groups_k, array_performance, array_max_performance_all, index) {

        if (index === all_combination_groups_k.length) {
            return array_max_performance_all;
        }
        //console.log(all_combination_groups_k,'all_combination_groups_k[index]')
        let sum_array = max_performance_array(all_combination_groups_k[index], array_performance)
        array_max_performance_all.push(sum_array)

        let result = max_perfomance_combination_array(all_combination_groups_k, array_performance, array_max_performance_all, index + 1)
        return result

    }

    //convierte la salidad a la esperada
    function recursive_convert_outpot(array_perfomance_max, max_performance, next, index_right, index) {

        if (index === array_perfomance_max.length) {
            return max_performance;
        }

        if (index > 0) {
            next = (index_right + (array_perfomance_max[index] - 1))
        }
        max_performance += `${index_right} ${next}\n`
        index_right += array_perfomance_max[index]

        let result = recursive_convert_outpot(array_perfomance_max, max_performance, next, index_right, index + 1)
        return result

    }

    function main(array_perfomance_people, n, k) {
        let sencuen_max = secuence_max_perfomance(array_perfomance_people, n, k, [], [], 2)
        return recursive_convert_outpot(sencuen_max, '', sencuen_max[0], 1, 0)
    }

    /*   const array_perfomance_people = [10, 20, 7, 1]
      const n = array_perfomance_people.length;
      const k = 3; */

    let resultado = main(rendimientoTrabajadores, N, K)
    console.log(resultado)





    /* </Algoritmo con programación dinámica> */

    createFile(`N: ${N}, K: ${K}, rendimientoTrabajadores: ${rendimientoTrabajadores}, 
Resultado final: 
${resultado}`);
}
