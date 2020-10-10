/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useMemo} from 'react';
import { withRouter } from 'react-router-dom';
import * as S from './styled';

const NavigationLinks = ({location}) => {

  const [navigationlabels] = useState([
    {
      label: 'Manage Inventory',
      path: '/'
    },
    {
      label: 'Vehicles Sold',
      path: '/soldVehicles'
    }
  ]);

  const navigationLinks = useMemo(() => {
    return navigationlabels.map((route, index) => {
      return (
      <S.NavLink 
        key={index} 
        to={route.path}
        selected={location.pathname === route.path}
      >
        {route.label}
      </S.NavLink>
      )
    })
  },[navigationlabels, location])
  return (
    <S.NavWrapper>
      {navigationLinks}
    </S.NavWrapper>
  )
};

export default withRouter(NavigationLinks);