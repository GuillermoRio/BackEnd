import axios from "axios"

axios.get("https://rickandmortyapi.com/api/character/1").then((res) => {
    //console.log(res.data)
})

/*const getCharacter = async (id: number) => {
    const personaje = await axios.get("https://rickandmortyapi.com/api/character/" + id);
    //console.log(personaje);
    return personaje.data;
}*/

//Async es una funcion la cual se ejecuta en un hilo aparte
//Await es lo que recibe la promesa(una fachada para un then)
const getCharacterTheRightWay = async (id: number) => {
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character/"+id);
        return response.data;
    }catch(error){
        if(axios.isAxiosError(error)){
            console.log("Axios error" + error.message);
        }else{
            console.log("Error" + error);
        }
    }
}

const personaje = await (getCharacterTheRightWay(2));

console.log(personaje);