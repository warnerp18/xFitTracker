import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

import {MainLayout} from './layouts/MainLayout.jsx';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';
import About from './About.jsx';
import ResolutionDetail from './resolutions/ResolutionDetail.jsx';

export const Routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={MainLayout}>
      <IndexRoute component={ResolutionsWrapper} />
      <Route path='about' component={About} />
    </Route>
  </Router>
);

Meteor.startup(function(){
  ReactDOM.render(<Routes />, document.getElementById('app'));
});
