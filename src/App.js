import React, { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import { ROUTE_NAV } from './Constant/Header/RoutePath/RoutePathIndex';

import PageNotFoundIndex from './Component/PageNotFound/PageNotFoundIndex';

import HeaderIndex from './Constant/Header/HeaderIndex';
import FooterIndex from './Constant/Footer/FooterIndex';
import HomeIndex from './Component/Home/HomeIndex';

function App() {
  return (
    <Fragment>
      <HeaderIndex />
      <div className='bodypart'>
        <Routes>
          <Route path={ROUTE_NAV.HOME_PATH} element={<HomeIndex />} />
          <Route path={'*'} element={<PageNotFoundIndex />} />
        </Routes>
      </div>
      <FooterIndex />
    </Fragment>

  )
}

export default App