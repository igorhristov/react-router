import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Authors from './pages/Authors';
import Author from './pages/Author';
import Article from './pages/Article';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';


export default function BasicExample() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Homepage />
                </Route>
                <Route path='/authors'>
                    <Authors />
                </Route>
                <Route path='/author'>
                    <Author />
                </Route>

                <Route path='/article'>
                    <Article />
                </Route>

                <Route path='/about'>
                    <About />
                </Route>

                <Route path='*'>
                    <ErrorPage />
                </Route>
            </Switch>
        </Router>
    );
}
