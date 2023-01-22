import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

//Components//
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

function App() {

  const dispatch = useDispatch();

  useEffect (() => {
    console.log('in useEffect');
    getFeedback();
  }, []);


  const getFeedback = () => {
    axios.get('/api/feedback')
    .then((response) => {
      console.log('in getFeedback', response.data);
      dispatch({
        type: 'SET_FEEDBACK',
        payload: response.data
      })
    })
    .catch((error) => {
      console.log('error in GET feedback', error)
    })
  }


  return (
    <div className='App'>
      <header className='App-header'>
      <h1 className='App-title'>Feedback!</h1>
        </header>
        <Router>

        <nav>
          <ul>
            <li>
              <Link to="/feeling">Feeling</Link>
            </li>
            <li>
              <Link to="/understand">Understand</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <Link to="/comments">Comments</Link>
            </li>
            <li>
              <Link to="/review">Review</Link>
            </li>
          </ul>
        </nav> 

        <Route exact path='/'>
              <Feeling />
          </Route>
        <Route exact path='/understanding'>
              <Understanding getFeedback={getFeedback}/>
        </Route>
        <Route exact path='/support'>
              <Support getFeedback={getFeedback}/>
          </Route>
        {/* <Route exact path='/comments'>
              <Comments getFeedback={getFeedback}/>
          </Route> */}
          <Route exact path='/review'>
              <Review getFeedback={getFeedback}/>
          </Route>
        </Router>
        </div>
  );
}

export default App;
