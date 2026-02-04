import { useEffect, useState } from "react";

function useQuery(fetchURL) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchPokemon() {
        try {
            const response = await fetch(fetchURL)
            // console.log(response);
            if (!response.ok) {
                throw new Error("Requesting data is failed- wrong api endpoint")
            }
            const pokemonData = await response.json();
            setData(pokemonData)
        } catch (error) {
            console.error(error);
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    // componentDidMount
    useEffect(() => {
        fetchPokemon()
    }, [])

    return {data, isLoading, error}
}

export default useQuery;