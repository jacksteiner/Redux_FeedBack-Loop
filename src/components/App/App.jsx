import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import PageOne from '../PageOne/PageOne.jsx'
import PageTwo from '../PageTwo/PageTwo.jsx'
import PageThree from '../PageThree/Page.Three.jsx';
import PageFour from '../PageFour/PageFour.jsx';
import Review from '../Review/Review.jsx';
import PageFive from '../PageFive/PageFive.jsx';
import './App.css';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <div>
      <Router>
      <Route exact path="/">
        <PageOne />
      </Route>

      <Route exact path ="/page/two">
        <PageTwo />
      </Route>

      <Route exact path ="/page/three">
        <PageThree />
      </Route>
      
      <Route exact path ="/page/four">
        <PageFour />
      </Route>

      <Route exact path="/review">
        <Review />
      </Route>

      <Route exact path="/page/five">
        <PageFive />
      </Route>

      </Router>
      </div>
    </div>
  );
}

export default App;
