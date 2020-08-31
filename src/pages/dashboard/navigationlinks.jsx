/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import * as S from './styled';

const NavigationLinks = () => (
  <S.NavWrapper>
    <NavLink />
  </S.NavWrapper>
);

const NavLink = () => (
  <S.NavLink>
    <a>Manage Inventory</a>
  </S.NavLink>
);
export default NavigationLinks;