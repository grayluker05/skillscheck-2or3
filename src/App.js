import React from 'react';
import Header from './Components/Header/Header';
import routes from './routes';
import {HashRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Header />
      {routes}
      </HashRouter>
    </div>
  );
}

export default App;
