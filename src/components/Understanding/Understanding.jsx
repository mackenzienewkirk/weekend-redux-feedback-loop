import { useDispatch } from "react-redux";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Understanding() { 
    const history = useHistory();
    const dispatch = useDispatch();
    const [newUnderstand, setNewUnderstand] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_UNDERSTAND',
            payload: newUnderstand
        });
        console.log('in understanding: ', newUnderstand);
        history.push('/Support');
    };

    return(
        <div>
            <h2>How well are you understanding the content?</h2>
            <form onSubmit={handleSubmit}>
                <input
                    min={1}
                    max={5}
                    type='number'
                    required='required'
                    value={newUnderstand}
                    onChange={(event) => {
                        setNewUnderstand(event.target.value);
                    }}
                    >
                </input>
                <br/><button className='next-btns' type='submit'>NEXT</button>
            </form>
        </div>
    )

}

export default Understanding;