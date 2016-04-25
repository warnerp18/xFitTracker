import React, { Component } from 'react';
import {mount} from 'react-mounter';

import App from './App.jsx';
import Home from './Home.jsx';
import {MainLayout} from './layouts/MainLayout.jsx';
import WodWrapper from './wods/WodWrapper.jsx';
import SkillsWrapper from './skills/SkillsWrapper.jsx';
import WodDetail from './wods/WodDetail.jsx';
import SingleSkillDetail from './skills/SingleSkillDetail.jsx';

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
wodsRoutes.route('/wod/:id', {
  action (params) {
    mount(MainLayout, {
      content: (<WodDetail id={params.id} />)
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

SkillsRoutes.route('skill/:id', {
  action(params){
    mount(MainLayout, {
      content:(<SingleSkillDetail id={params.id}/>)
    })
  }
});
