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
import Success from '../Success/Success';

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

//Routes to get to the next page//

  return (
    <div className='App'>
      <header className='App-header'>
      <h1 className='App-title'>Feedback!</h1>
      <h4>Please remember to do it!</h4>
        </header>
        <Router>
        <Route exact path='/Feeling'>
              <Feeling />
          </Route> 
        <Route exact path='/Understanding'>
              <Understanding getFeedback={getFeedback}/>
        </Route>
        <Route exact path='/Support'>
              <Support getFeedback={getFeedback}/>
          </Route> 
        <Route exact path='/Comments'>
              <Comments getFeedback={getFeedback}/>
          </Route> 
          <Route exact path='/Review'>
              <Review getFeedback={getFeedback}/>
          </Route>
          <Route exact path='/Success'>
              <Success getFeedback={getFeedback}/>
            </Route>
        </Router>
        </div>
  );
}

export default App;
