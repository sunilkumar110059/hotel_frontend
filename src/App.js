import React, { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";
import { ROUTE_NAV } from './Constant/RoutePath/RoutePathIndex';

import PageNotFoundIndex from './Component/PageNotFound/PageNotFoundIndex';
import HeaderIndex from './Constant/Header/HeaderIndex';
import FooterIndex from './Constant/Footer/FooterIndex';
import HomeIndex from './Component/Home/HomeIndex';

import HotelListIndex from './Component/HotelList/HotelListIndex';
import HotelDetailIndex from './Component/HotelDetail/HotelDetailIndex';

function App() {
  return (
    <Fragment>
      <HeaderIndex />
      <div className='bodypart'>
        <Routes>
          <Route path={ROUTE_NAV.HOME_PATH} element={<HomeIndex />} />
          <Route path={ROUTE_NAV.HOTEL_LIST_PATH} element={<HotelListIndex />} /> 
          <Route path={ROUTE_NAV.HOTEL_DETAIL_PATH} element={<HotelDetailIndex />} />           
          <Route path={'*'} element={<PageNotFoundIndex />} />
        </Routes>
      </div>
      <FooterIndex />
    </Fragment>

  )
}

export default App