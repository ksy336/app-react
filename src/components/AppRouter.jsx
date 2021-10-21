import React, {useContext} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../Route/Path";
import {AssertionLocation as route} from "@jest/test-result/build/types";
import {AuthContext} from "../context/context";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    console.log(isAuth)
    return (
        isAuth
            ?
            <Switch>
                {
                    privateRoutes.map((route) =>
                        <Route
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                            key={route.path}
                        />
                    )}
                <Redirect to="/posts" />
            </Switch>
            :
            <Switch>
                {
                publicRoutes.map((route) =>
                    <Route
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to="/login" />
            </Switch>
    );
};

export default AppRouter;