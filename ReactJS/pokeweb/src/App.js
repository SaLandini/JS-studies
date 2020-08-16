import React from 'react';
import Main from './pages/main';
import Header from './components/header';
import Routes from './routes'
import './styles.css';

const App = () => (
  <div className="App">
      <Header />
      <Routes />
  </div>
);


export default App;
