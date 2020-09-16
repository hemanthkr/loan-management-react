import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
// import LoanSearch from '../components/Search/LoanSearch';
import Header from '../components/Header/Header';

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={LoginForm} exact={true} />
            {/* <Route path="/search" component={LoanSearch} /> */}
        </Switch>
    </BrowserRouter >
);

export default AppRouter;