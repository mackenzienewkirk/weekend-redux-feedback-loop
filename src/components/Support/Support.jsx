import {useSelector, useDispatch} from "react-redux";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Support({getFeedback}) {

    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.currentSurvey);
    const [support, setSupport] = useState(feedback.support ? feedback.support : '');

    const handleClick= () => {

        dispatch({
            type: 'ADD_FEEDBACK',
            payload: {
                "support": support
            }
        })

        history.push('/comments');
        getFeedback();
        setSupport('');
    }

    return (
        <div className="support">
            <h3>How well are you being supported?</h3>
            <input 
                type="number" 
                id="supportInput" 
                min="0" 
                max="10"
                required
                value={support}
                onChange={event => setSupport(event.target.value)}
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


export default Support;