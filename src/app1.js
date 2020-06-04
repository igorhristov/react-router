import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Authors from './pages/Authors';
import Author from './pages/Author';
import Article from './pages/Article';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Bus from './components/Bus';
import Cart from './components/Cart';

const routes = [
    { path: '/', component: Homepage },
    { path: 'authors', component: Authors },
    { path: 'author', component: Author },
    { path: 'article', component: Article },
    {
        path: 'about',
        component: About,
        routes: [
            {
                path: '/about/bus',
                component: Bus,
            },
            {
                path: '/about/cart',
                component: Cart,
            },
        ],
    },
    { path: '*', component: ErrorPage },
];

export default function BasicExample() {
    return (
        <Router>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </Router>
    );
}

const RouteWithSubRoutes = (route) => {
    return (
        <Route
            path={route.path}
            render={(props) => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
};
