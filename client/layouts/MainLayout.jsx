import React, {Component} from 'react';
import AccountsUI from '../AccountsUI.jsx';

export const MainLayout = ({content}) => (
  <div className='container'>
  <AccountsUI />
    {content}
  </div>
)
