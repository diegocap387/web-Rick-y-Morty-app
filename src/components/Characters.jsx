import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const Characters = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then((resp) => {
         setData(resp.data.results)
     })
        .catch((error) => console.log(error))
     },[])

    console.log(data)

   
       return(
        <div className="flex justify-center mt-5">
            <div className="grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {
                    data.map((character) => (
                        <div className="rounded-md bg-blue-400 w-60 text-black hover:bg-blue-500 cursor-pointer"
                        key={character}
                        >
                           <h2 className="p-5 flex-item-center justify-center text-2xl">{character.name}</h2>
                           <img width={290} src={character.image} alt="" />
                           <div>
                            <p className="text-green-400 text-center">Estado == {character.status}</p>
                            <p>
                               <b>Location: {character.location?.name}</b>
                                </p>
                                <p>
                                    <b>space: {character.species}</b>
                                </p>
                                <p>
                                    <b>Episodios: {character.episode?.length}</b>
                                </p>
                           </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
        
}

export default Characters