import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Feeling from '../Feeling/Feeling';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
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
    <Provider store={store}>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        <Router>
        <Route exact path='/feeling'>
              <Feeling getFeedback={getFeedback}/>
          </Route>
          </Router>
      </header>
    </div>
    </Provider>
  );
}

export default App;
