import React from 'react';
import Sidebar from '../shared/Sidebar';
import AdminNavigation from '../auth/Navigation';
import MainContent from './MainContent';
import MessageContainer from './MessageContainer';
import NewMessage from './NewMessage';

const Dashboard = props => {
  console.log( props.match );
  return (
    <div id="wrapper">
      <Sidebar />
      <div id='content-wrapper' className='d-flex flex-column'>
        <div id='content'>
          <AdminNavigation />
          {props.match.path === '/dashboard' && <MainContent />}
          {props.match.path === '/dashboard/messages' && <MessageContainer/>}
          {props.match.path === '/dashboard/new-message' && <NewMessage />}
        </div>
      </div>
      {/* Footer Will Go Here */}
    </div>
  );
};

export default Dashboard;