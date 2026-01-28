import {useState} from 'react';
import PrimaryButton from '../../components/PrimaryButton';
// react -> hook
/**
 * 1. hook is a function
 * 2. starts with "use"
 * 
 * useState
 * 1. pass an initial value of a state to the useState(initialState)
 * 2. it returs [state, setState]
 * 3. if you set the state via setState, react will schedule "re-render" of that component.
 * 4. re-render -> invoking the functional component i.e., function again.
 * 5.this time, even if the local binding will be created newly, the latest/ changed/ mutated state value will be assigned to the state variable  
 * 
 */
const UseState = () => {

    const [value, setValue] = useState(1);
    const getFullName = (firstName, lastName) => {
        console.log("getFullName function has been invoked");
        return `${firstName} ${lastName}`;
    }

    const [username, setUsername] = useState(() => getFullName("Sundeeep", "Dasari"))
    console.log("username: ", username);

    function attachLastName(lastName){
        setUsername(`${username} ${lastName}`);
    }

    return (
        <div>
            <h1>useState Class</h1>
            <hr />
            <h2>{username}</h2>
            <PrimaryButton name="Sundeep" onClick={() => attachLastName("Dasari")}>
                Attach Lastname
            </PrimaryButton>

            <PrimaryButton name="Sundeep" onClick={() => attachLastName("Dasari")}>
                Hello
            </PrimaryButton>
        </div>
    )
}

export default UseState