// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");


// Components
var Navbar = require("./components/Navbar");

ReactDOM.render(
 <div className="main-container">
 	<Navbar />
 </div>,
  document.getElementById("app")
);