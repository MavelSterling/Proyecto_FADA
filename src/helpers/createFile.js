import { saveAs } from 'file-saver';

export const createFile = (solucion) => {
    const blob = new Blob([solucion], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'output.txt');
}