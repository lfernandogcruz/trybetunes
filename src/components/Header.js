import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      loadScreen: false,
    };
  }

  componentDidMount() {
    this.printUser();
  }

  printUser = async () => {
    // const { loadScreen } = this.state;
    // console.log('abuble');
    this.setState({ loadScreen: true });
    const user = await getUser();
    // console.log(user);
    this.setState({
      loadScreen: false,
      name: user.name,
    });
  }

  render() {
    const { loadScreen, name } = this.state;
    return (
      <header data-testid="header-component">
        {
          (loadScreen)
            ? <Loading /> : (
              <>
                <p data-testid="header-user-name">
                  { name }
                </p>
                <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
                <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
                <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
              </>
            )
        }
      </header>
    );
  }
}
