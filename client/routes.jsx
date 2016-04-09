import React, { Component } from 'react';
import {mount} from 'react-mounter';

import App from '../App.jsx';
import {MainLayout} from './layouts/MainLayout.jsx';
import WodWrapper from './wods/WodWrapper.jsx';

const wodsRoutes = FlowRouter.group({
  name: 'wods'
});

wodsRoutes.route('/', {
  name: 'home',
  action() {
    mount(MainLayout, {
      content:(<App />)
    })
  }
});
wodsRoutes.route('/wodform', {
  name: 'wodform',
  action() {
    mount(MainLayout, {
      content:(<WodWrapper />)
    })
  }
});
