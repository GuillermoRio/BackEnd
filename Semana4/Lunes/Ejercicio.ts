import axios from "axios"

type Character = {
    name: string,
}
const getMultipleCharsName = async (id: number[]) => {
    try{
        const promesas = id.map(async (elem) => {
            const arrDePromesas = (await axios.get(`https://rickandmortyapi.com/api/character/${elem}`)).data.name;
            return arrDePromesas;
        });
        const nombres = await Promise.all(promesas)
        //console.log(nombres)
        return nombres;
    }catch(error){
        if(axios.isAxiosError(error)){
            console.log("Axios error" + error.message);
        }else{
            console.log("Error" + error);
        }
    }
};

const nombresDev = await getMultipleCharsName([1, 2, 3])
console.log(nombresDev);