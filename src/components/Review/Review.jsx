import axios from 'axios';
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import './Review.css';

function Review({getFeedback}) {

    const store = useSelector(store => store);
    const dispatch = useDispatch();
    const history = useHistory();
    const feedbackList = useSelector(store => store.feedbackList);
    const currentSurvey = useSelector(store => store.currentSurvey);

    let survey = {
        feeling: store.currentSurvey.feeling,
        understanding: store.currentSurvey.understanding,
        support: store.currentSurvey.support,
        comments: store.currentSurvey.comments
    }

    const handleSubmit = () => {
        console.log('current survey we are sending to server: ', survey);

        axios.post('/api/surveys', survey)
        .then((response) => {
            console.log('In axios post', response);
            alert('Your feedback has been submitted!');
            history.push('/finished');
            getFeedback();
            getSurveys();
            dispatch({
                type: 'SUBMIT',
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <div>
            <h2>Review Your Feedback</h2>
            <div>
                {store.currentSurvey.map((feedback) => {
                    return(
                        <div>
                            <p>Feelings: {feedback.feeling}</p>
                            <p>Understanding: {feedback.understanding}</p>
                            <p>Support: {feedback.support}</p>
                            <p>Comments: {feedback.comments}</p>
                        </div>
                    )
                })}
                <button type='submit' onClick={handleSubmit}>Submit</button> 
            </div>
        </div>
    )
}

export default Review;