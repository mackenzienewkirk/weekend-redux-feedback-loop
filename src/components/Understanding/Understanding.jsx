import {useSelector, useDispatch} from "react-redux";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Understanding({getFeedback}) {

    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.currentSurvey);
    const [understanding, setUnderstanding] = useState(feedback.understanding ? feedback.understanding : '');

    const handleClick= () => {

        dispatch({
            type: 'ADD_FEEDBACK',
            payload: {
                "understanding": understanding
            }
        })

        history.push('/support');

        getFeedback();

        setUnderstanding('');
    }

    return (
        <div className="understanding">
            <h3>How well are you understanding the content?</h3>
            <input 
                type="number" 
                id="understandingInput" 
                required
                min="0" 
                max="10"
                value={understanding}
                onChange={event => setUnderstanding(event.target.value)}
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

export default Understanding;