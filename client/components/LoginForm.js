import React from 'react';
import axios from 'axios';
window.axios = axios;

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  handleSubmit(e) {
    e.preventDefault();

    axios.post('/signup', this.state);
  }

  render() {
    return <form onSubmit={this.handleSubmit.bind(this)}>
      <label>Email</label>
      <input
        onChange={e => this.setState({ email: e.target.value })}
        value={this.state.email}
      />
      <label>Password</label>
      <input
        onChange={e => this.setState({ password: e.target.value })}
        value={this.state.password}
      />
      <button>Submit</button>
    </form>
  }
}
