import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
    // <p>TrybeTunes</p>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/profile/edit" component={ ProfileEdit } />
        <Route exact path="/search" component={ Search } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route
          exact
          path="/album/:id"
          render={ (propsRouter) => <Album { ...propsRouter } /> }
        />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
