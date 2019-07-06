import React from 'react';
import Sidebar from '../shared/Sidebar';
import AdminNavigation from '../auth/Navigation';

const Dashboard = props => {
  return (
    <div id="wrapper">
      <Sidebar/>
      <div id='content-wrapper' className='d-flex flex-column'>
        <div id='content'>
          <AdminNavigation/>
        </div>
      </div>
      {/* Footer Will Go Here */}
    </div>
  )
}

export default Dashboard;