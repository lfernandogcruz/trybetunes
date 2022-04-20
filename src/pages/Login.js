import React, { Component } from 'react';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

export default class Login extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      inputName: '',
      disabledBtn: true,
      loadScreen: false,
    };
    // this.disableButton = this.disableButton.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    // this.checkUser = this.checkUser.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const update = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: update }); // heranca do Tryunfo
    // this.disableButton(update);

    const { inputName } = this.state;
    const minCharacter = 2;
    if (inputName.length >= minCharacter) {
      this.setState({
        disabledBtn: false,
      });
    } else {
      this.setState({
        disabledBtn: true,
      });
    }
  }

  checkUser = async () => {
    const { inputName } = this.state;
    this.setState({ loadScreen: true });
    await createUser({ name: inputName });
    this.setState({ loadScreen: false });
  }

  // disableButton(input) {
  //   const minCharacter = 2;
  //   if (input.length >= minCharacter) {
  //     this.setState({
  //       disabledBtn: false,
  //     });
  //   } else {
  //     this.setState({
  //       disabledBtn: true,
  //     });
  //   }
  // }

  render() {
    const { disabledBtn, inputName, loadScreen } = this.state;

    return (
      <div data-testid="page-login">
        {
          loadScreen
            ? <Loading />
            : (
              <form>
                Login
                <label htmlFor="login-name-input">
                  <input
                    name="inputName"
                    id="inputName"
                    type="text"
                    data-testid="login-name-input"
                    placeholder="Insira seu NOME"
                    onChange={ this.onInputChange }
                    value={ inputName }
                  />
                </label>
                <button
                  type="button"
                  data-testid="login-submit-button"
                  id="login-submit-button"
                  disabled={ disabledBtn }
                  onClick={ this.checkUser }
                >
                  Entrar
                </button>
              </form>
            )
        }
      </div>
    );
  }
}

// a rota / deve renderizar um componente chamado Login.
// Este componente deve ter uma div com o atributo data-testid="page-login" que
// envolva todo seu conteúdo;
