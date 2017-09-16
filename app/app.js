var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Main = require("./components/Main");
import Routes from './config/routes';
ReactDOM.render(<Routes />, document.getElementById("app"));

// ReactDOM.render(

//   <Router>{routes}</Router>,
//   document.getElementById('app')

// );