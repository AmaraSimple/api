import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { isAuthenticated } from '../auth';

interface PublicRouteProps extends Omit<RouteProps, 'component'> {
  component: React.ElementType;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Redirect
          to={{ pathname: '/dashboard', state: { from: props.location } }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default PublicRoute;
