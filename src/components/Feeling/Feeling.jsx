import {useSelector, useDispatch} from "react-redux";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Feeling({getFeedback}) {

    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.currentSurvey);
    const [feeling, setFeeling] = useState(feedback.feeling ? feedback.feeling : '');

    const handleClick = () => {

        dispatch({
            type: 'ADD_FEEDBACK',
            payload: {
                "feeling": feeling
            }
        })

        //This will send user to the next page//
        history.push('/understanding');

        getFeedback();

        setFeeling('');
    }

    return (
        <div className="feelings">
            <h2>How are you feeling today?</h2>
            <input 
                type="number" 
                id="feelingInput" 
                min="0" 
                max="10"
                required
                value={feeling}
                onChange={event => setFeeling(event.target.value)}
            />
            <button 
                className="next-btn" 
                type="button"
                onClick={handleClick}
            >
                Next
            </button>
        </div>
    );
}

export default Feeling;