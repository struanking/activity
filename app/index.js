/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { /*applyRouterMiddleware,*/ Router, Route, browserHistory } from 'react-router';
//import { syncHistoryWithStore } from 'react-router-redux';
//import useScroll from 'react-router-scroll';
import configureStore from './store/configureStore';

const { whyDidYouUpdate } = process.env.NODE_ENV !== 'production' ? require('why-did-you-update') : '';

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const store = configureStore(initialState, browserHistory);

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
// import { selectLocationState } from 'store/selectors';
// const history = syncHistoryWithStore(browserHistory, store, {
//   selectLocationState: selectLocationState(),
// });

// Set up the router, wrapping all Routes in the App component
import App from 'containers/App';
import Workout from 'containers/Workout';
//import createRoutes from './routes';
// const rootRoute = {
//   component: App,
//   childRoutes: createRoutes(store),
// };

ReactDOM.render(
  // <Provider store={store}>
  //   <Router
  //     history={history}
  //     routes={rootRoute}
  //     render={
  //       // Scroll to top when going to a new page, imitating default browser
  //       // behaviour
  //       applyRouterMiddleware(useScroll())
  //     }
  //   />
  // </Provider>,
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/workout" component={Workout} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
