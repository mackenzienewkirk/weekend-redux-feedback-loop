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

    const handleSubmit = () => {
        console.log('current feedback we are sending to server: ', feedbackList);

        axios.post('/api/feedback', feedbackList)
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
                    <p>Feelings: {feedbackList.feeling}</p>
                    <p>Understanding: {feedbackList.understanding}</p>
                    <p>Support: {feedbackList.support}</p>
                    <p>Comments: {feedbackList.comments}</p>
                <button type='submit' onClick={handleSubmit}>Submit</button> 
            </div>
        </div>
    )
}

export default Review;