import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({component: Component, auth, ...rest}) => {

    return (
        <Route
            {...rest}
            render={props => 
                auth
                ? (<Component {...props} />)
                : (<Redirect
                    to="/admin/auth"
                />)
            }
        />
    )
}

export default PrivateRoute;
