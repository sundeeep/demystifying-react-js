import {useEffect, useState} from "react";
import PrimaryButton from "../../components/PrimaryButton";

function UseEffect(){

    const [count, setCount] = useState(0);
    // console.log("Count value after every render: ", count);

    useEffect(() => {
        console.log("useEffect-1 has been triggered")
    })

    useEffect(() => {
        console.log("useEffect-2 has been triggered")
    }, [])

    // componentDidUpdate()
    useEffect(() => {
        console.log("useEffect-3 has been triggered")
    }, [count])

    const incrementCount = () => {
       console.log("Increment Button has been clicked!")
       setCount(count + 1)
    //    console.log("Count: ",count)
    }

    return(
        <>
            <h1>useEffect Hook</h1>
            <p>Count: {count}</p>
            <PrimaryButton onClick={incrementCount}>
                Increment
            </PrimaryButton>
        </>
    )
}

export default UseEffect;