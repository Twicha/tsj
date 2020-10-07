import React from "react";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuth ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to="/admin/auth"
                        // to={{
                        //     pathname: "/admin/auth",
                        //     state: { from: props.location }
                        //   }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
