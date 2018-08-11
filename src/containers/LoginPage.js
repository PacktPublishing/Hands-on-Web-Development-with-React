import React from 'react';
import styled from 'styled-components';
import SubtleErrorBox from '../components/SubtleErrorBox';
import { PrimaryButton } from '../components/Button'
import TextInputField from '../components/form-elements/TextInputField';
import Spinner from '../components/Spinner';
import AuthAPI from '../api/AuthAPI';

const LoginForm = styled.form`
  max-width: 420px;
  padding: 24px;
  margin: 0 auto;
  box-shadow: 0px 2px 40px 0 rgba(0, 0, 0, 0.1);
`;

export default class LoginPage extends React.Component {
  state = {
    loading: false,
    username: '',
    password: '',
  };

  handleChange = (e) => {
    const { name, value} = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ error: undefined, loading: true, });
    const { success, response, error } = await AuthAPI.loginMocked({
      username: this.state.username,
      password: this.state.password,
    });
    if (success) {
      this.props.onLogin(response.data)
    } else {
      this.setState({
        error,
        loading: false,
      });
    }
  };

  render() {
    return (
      <LoginForm onSubmit={this.handleSubmit}>
        <TextInputField
          label="Username"
          name="username"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <TextInputField
          label="Password"
          name="password"
          onChange={this.handleChange}
          type="password"
          value={this.state.password}
        />
        <PrimaryButton disabled={this.state.loading}>
          Login
        </PrimaryButton>
        {this.state.loading && <Spinner />}
        {this.state.error &&
          <SubtleErrorBox label={this.state.error} />
        }
      </LoginForm>
    );
  }
}
