import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import '../imports/startup/accounts-config.js';
import Routes from '../imports/ui/Routes.js';
import App from '../imports/ui/App.js';

Meteor.startup(() => {
  render(<Routes />, document.getElementById('app'));
});
