import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';


export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <>
        <Navbar/>
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                ? ( <Component { ...props } /> )
                : ( <Redirect to="/" /> )
                )}
                
                />
        </>
        
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}