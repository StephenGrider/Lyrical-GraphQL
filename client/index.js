import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <div><LoginForm /></div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
