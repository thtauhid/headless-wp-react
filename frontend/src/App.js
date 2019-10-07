import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SinglePost from './components/SinglePost';

function App() {
	return (
		<div>
			<Router>
				<Route path="/" component={Home} />
				<Route path="/post/:id" component={SinglePost} />
			</Router>
		</div>
	);
}

export default App;
