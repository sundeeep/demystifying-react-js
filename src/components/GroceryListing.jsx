import { useEffect, useState } from "react";

const GroceryListing = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    async function fetchGrocery(){
        try {
            const response = await fetch("https://pokeapi.co/api/v1/pokemon/pikachu")
            console.log(response);
            if(!response.ok){
                throw new Error("Requesting data is failed- wrong api endpoint")
            }
            const pokemonData = await response.json();
            setData(pokemonData)
        } catch (error) {
            console.error(error);
            setError(error.message)
        } finally{
            setIsLoading(false)
        }
    }

    // componentDidMount
    useEffect(() => {
        console.log("Inside useEffect")
        fetchGrocery()
    }, [])

    if(isLoading){
        console.log("loading ui")
        return(
            <h1>Loading...</h1>
        )
    }

    if(error){
        return(
            <h1>Error: {error}</h1>
        )
    }

    if(!data || !Object.keys(data).length){
        console.log(data);
        return(
            <h1>Empty Data!</h1>
        )
    }

    return(
        <>
            <h1>Grocrey Listing</h1>
            <p>{JSON.stringify(data)}</p>
        </>
    )
}

export default GroceryListing;