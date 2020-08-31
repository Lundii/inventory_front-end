import React from 'react';
import Header from './header';
import NavigationLinks from './navigationlinks';
import AllInventory from './AllInventory';

const Dashboard = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{ width: '260px' }}>
          <NavigationLinks />
        </div>
        <div style={{flex: 1}}>
          <AllInventory />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
