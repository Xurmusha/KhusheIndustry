import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Registration from "./components/Registration";
// import Nav from "./components/Nav";
import Routing from "./components/Routing";


ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<Nav/>*/}
    {/*<Registration/>*/}
    <Routing/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
