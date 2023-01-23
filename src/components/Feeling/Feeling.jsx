import { useDispatch } from "react-redux";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Feeling() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setNewFeeling] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push('/Understanding');
        //Use dispatch to pass current state to reducers, and reducers return the new state//
        dispatch({
            type: 'SET_FEELING',
            payload: {
                "feeling": feeling
            }
        });
    };

    return(
        <div>
            <h2>How are you feeling today?</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    min={1}
                    max={5}
                    type='number'
                    required='required'
                    value={feeling}
                    onChange={(event) => {
                        setNewFeeling(event.target.value);
                    }}
                    >
                </input>
                <br/><button className='next-btns' type='submit'>NEXT</button>
                <h5>Fields cannot be left blank.</h5>
            </form>
        </div>
    )

}

export default Feeling;