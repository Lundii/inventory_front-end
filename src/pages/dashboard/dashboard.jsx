import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import Header from './Header';
import NavigationLinks from './Navigationlinks';
import AllInventory from '../AllInventory';
import SoldVehicles from '../SoldVehicles';

const Dashboard = () => {
  return (
    <Router>
      <div>
        <div>
          <Header />
        </div>
        <div style={{display: "flex", flexDirection: "row"}}>
          <div style={{ width: '260px' }}>
            <NavigationLinks />
          </div>
          <div style={{flex: 1}}>
            <Switch>
              <Route exact path="/" component={AllInventory} />
              <Route exact path="/soldvehicles" component={SoldVehicles} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default Dashboard;
