import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import ForgotPassword from './containers/ForgotPassword';
import ResetPassword from './containers/ResetPassword';
import NotFound from './containers/NotFound';
import ProtectedRoute from './ProtectedRoutes';
import { history } from './store';

const Routes = ({ childProps }) => (
    <ConnectedRouter history={history}>
        <Switch>
            <ProtectedRoute path="/" exact component={Home} childProps={childProps} />
            <ProtectedRoute path="/login" exact component={Login} childProps={childProps} />
            <ProtectedRoute path="/login/:username/:password" component={Login} childProps={childProps} />
            <ProtectedRoute path="/forgot-password" exact component={ForgotPassword} childProps={childProps} />
            <ProtectedRoute path="/dashboard" exact component={Dashboard} displayHeader childProps={childProps} withAuth />
            <ProtectedRoute path="/reset-password" exact component={ResetPassword} displayHeader childProps={childProps} withAuth />
            <Route path="*" component={NotFound} />
        </Switch>
    </ConnectedRouter>
);

export default Routes;

Routes.propTypes = {
    childProps: PropTypes.object,
};
