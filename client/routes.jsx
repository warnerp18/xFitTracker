import React, { Component } from 'react';
import {mount} from 'react-mounter';

import App from './App.jsx';
import Home from './Home.jsx';
import {MainLayout} from './layouts/MainLayout.jsx';
import WodWrapper from './wods/WodWrapper.jsx';
import SkillsWrapper from './skills/SkillsWrapper.jsx';


const loggedOut = FlowRouter.group({
  name: 'loggedOut'
});

loggedOut.route('/login', {
  name: 'login',
  action() {
    mount(MainLayout, {
      content:(<Home />)
    })
  }
});

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

const SkillsRoutes = FlowRouter.group({
  name: 'skills'
});

SkillsRoutes.route('/skillsform', {
  name: 'skillform',
  action() {
    mount(MainLayout, {
      content:(<SkillsWrapper />)
    })
  }
});
