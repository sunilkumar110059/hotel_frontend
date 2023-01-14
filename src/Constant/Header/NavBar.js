import React from 'react';
import { ROUTE_NAV } from './RoutePath/RoutePathIndex';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (

        <div className="row">
            <div className="col-auto">
                <Link to={'/'} className="fs-2 fw-bolder text-white">LOGO</Link>
            </div>
            <div className="col">
                <nav className='navcol'>
                    <ul>
                        <li> <NavLink to={ROUTE_NAV.HOME_PATH} > Home </NavLink></li>
                        <li> <NavLink to={ROUTE_NAV.ABOUT_PATH}> About </NavLink></li>
                        <li> <NavLink to={ROUTE_NAV.SERVICE_PATH}> Service </NavLink></li>
                        <li> <NavLink to={ROUTE_NAV.CONTACT_PATH}> Contact </NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="col-auto">
                <div className="authcol">
                    <ul>
                        <li> <NavLink to={ROUTE_NAV.LOGIN_PATH}> Login </NavLink></li>
                        <li> <NavLink to={ROUTE_NAV.REGISTRATION_PATH} > Register </NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar