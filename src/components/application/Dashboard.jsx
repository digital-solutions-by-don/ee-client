import React from 'react';
import Sidebar from '../shared/Sidebar';
import AdminNavigation from '../auth/Navigation';
import MainContent from './MainContent';
import MessageContainer from './MessageContainer';
import NewMessage from './NewMessage';
import ApplicationContainer from './ApplicationContainer';

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
          {props.match.path === '/dashboard/application' && <ApplicationContainer/>}
          {props.match.path === '/dashboard/application/federal-law-requirements' && <ApplicationContainer/>}
          {props.match.path === '/dashboard/application/personal-data' && <ApplicationContainer/>}
          {props.match.path === '/dashboard/application/employment' && <ApplicationContainer/>}
        </div>
      </div>
      {/* Footer Will Go Here */}
    </div>
  );
};

export default Dashboard;