import useQuery from "../concepts/hooks/custom-hooks/useQuery"

const Pokemon = () => {

    const {data, isLoading, error} = useQuery("https://pokeapi.co/api/v2/pokemon/pikachu")


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
            <h1>Pokemon</h1>
            <p>{JSON.stringify(data)}</p>
        </>
    )
}

export default Pokemon;