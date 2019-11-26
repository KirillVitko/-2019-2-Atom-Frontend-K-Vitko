import React from 'react';
import { Router, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Messenger from '../components/Messenger';


export const history = createBrowserHistory();

function Routes() {
	return (
		<Router history={history}>
				<Messenger/>
		</Router>
	);
}

export default Routes;
