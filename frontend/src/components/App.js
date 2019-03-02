import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { Provider } from 'react-redux';
import store from '../store';

import Header from './layout/Header';
import Dashboard from './Dashboard';
import Results from './Results/Results';

class App extends React.Component {
	render(){
		return(
			<Provider store={store}>
				<Router>
					<Fragment>
						<Header />
						<Switch>
							<Route exact path="/" component={Dashboard} />
							<Route exact path="/results" component={Results} />
						</Switch>
					</Fragment>
				</Router>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));