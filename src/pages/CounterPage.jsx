import { useReducer } from 'react'; //react hook

// Step 1: Define the initial state
const initialState = { count: 5 };

// Step 2: Write the reducer function
// It takes the current state + action, returns new state
function reducer(state, action) {
    console.log(`current state: ${JSON.stringify(state)}, action: ${action}`);
    switch (action[0]) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state; // Always return state for unknown actions
    }
}

function CounterPage() {
    // Step 3: Connect it to your component
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='flex flex-col items-center'>

            {/* Step 4: Use dispatch() to trigger actions */}
            <div className='flex items-center gap-3'>
                <button className='bg-red-500 text-lg text-white p-3 rounded-md' 
                    onClick={() => dispatch('decrement')}>-</button>

                <p>Count: {state.count}</p>

                <button className='bg-red-500 text-lg text-white p-3 rounded-md' 
                    onClick={() => dispatch('increment')}>+</button>
            </div>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    );
}

export default CounterPage;