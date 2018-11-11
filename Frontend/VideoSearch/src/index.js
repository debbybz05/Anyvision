import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './configureStore';
import './App.css';
import "../node_modules/video-react/dist/video-react.css"; 
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App'
import VideoDetails from './components/VideoDetails';

const Root = ({ store }) => (
	<Provider store={store}>
	    <Router>
	    <div>
	      <Route path ="/Search" component ={App} />
			<Route path ="/VideoDetails" component ={VideoDetails} />
	    </div>
	    </Router>
  </Provider>
);

const store = configureStore()

render(<Root store={store} />, document.getElementById('root'))



