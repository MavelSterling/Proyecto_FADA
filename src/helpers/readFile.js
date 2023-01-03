export const readFile = (e, setMyValue) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();

    fileReader.readAsText(file);
    
    fileReader.onload = () => {
        console.log(fileReader.result);
        setMyValue(fileReader.result);
    }

    fileReader.onerror = () => {
        console.log(fileReader.error);
    }

}