import React, { Component } from 'react';
import {mount} from 'react-mounter';

import App from '../App.jsx';
import {MainLayout} from './layouts/MainLayout.jsx';
import WodForm from './wods/WodForm.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content:(<App />)
    })
  }
});
FlowRouter.route('/wodform', {
  action() {
    mount(MainLayout, {
      content:(<WodForm />)
    })
  }
});
