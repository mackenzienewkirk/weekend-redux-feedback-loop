import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'
import axios from 'axios';
import './Review.css';

function Review() {

    const dispatch = useDispatch();
    const history = useHistory();
    const store = useSelector(store => store);
    const feedbackList = useSelector(store => store.feedbackList);

    let feedback = {
        feeling: store.feedbackList.feeling,
        understanding: store.feedbackList.understanding,
        support: store.feedbackList.support,
        comments: store.feedbackList.comments
    }

    const handleSubmit = () => {
        console.log('current feedback we are sending to server: ', feedback);

        axios.post('/api/feedback', feedback)
        .then((response) => {
            console.log('In axios post', response);
            alert('Your feedback has been submitted!');
            history.push('/Success');
            getFeedback();
//Use dispatch to pass current state to reducers, and reducers return the new state//
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
                {store.feedbackList.map((feedback) => {
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