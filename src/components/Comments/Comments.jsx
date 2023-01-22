import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import './Comments.css';

function Comments() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
//Use dispatch to pass current state to reducers, and reducers return the new state//
        dispatch({
            type: 'SET_COMMENT',
            payload: newComment
        });
        history.push('/Review');
    };

    return(
        <div>
            <h2>Any comments you want to leave?</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    id='comment-input'
                    type='text'
                    value={newComment}
                    onChange={(event) => {
                        setNewComment(event.target.value);
                    }}
                    >
                </input>
                <br/><button className='next-btns' type='submit'>NEXT</button>
                <h5>Fields cannot be left blank.</h5>
            </form>
        </div>
    )

}

export default Comments;