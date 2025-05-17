import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Movie from './Pages/Movie';
import NavBar from './Components/NavBar';
import Form from './Components/Form';
import MovieDetails from './Components/MovieDetails';
import SearchResults from './Components/SearchResults';
import NotFound from './Pages/NotFound';
import Favorite from './Pages/Favorite';
import { FavoriteProvider } from './Context/FavoriteContext';

function Links() {
    return (
        <FavoriteProvider>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/movie" exact component={Movie} />
                    <Route path="/movie/:id" exact component={MovieDetails} />
                    <Route path="/login" exact>
                        <Form props="login" />
                    </Route>
                    <Route path="/register" exact>
                        <Form props="register" />
                    </Route>
                    <Route path="/search" component={SearchResults} />
                    <Route path="/favorites" component={Favorite} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </FavoriteProvider>
    );
}

export default Links;