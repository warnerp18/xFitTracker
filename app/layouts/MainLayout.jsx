import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export const MainLayout = ({content}) => (
  <div className='main-layout'>
  <header>
    <h2>My Workouts</h2>
    <nav>
      <a href='/'>Workouts</a>
      <a href='/about'>About</a>
      <AccountsUI />
    </nav>
  </header>
  <main>
    {content}
    </main>
  </div>
)
