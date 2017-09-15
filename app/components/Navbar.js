// Include React
var React = require("react");

// Create the Header component
// Notice how Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Navbar = React.createClass({
  render: function() {
    return (
      <nav>
          <ul class="nav nav-pills pull-right teal">

            <li role="presentation" class="teal"><a class="teal" href="/"><span class="teal glyphicon glyphicon-globe"></span> Dashboard</a></li>
            <li role="presentation"><a href="/users/logout"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>

            <li role="presentation"><a href="/users/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            <li role="presentation"><a href="/users/register"><span class="glyphicon glyphicon-user"></span> Register</a></li>

          </ul>
        </nav>
    );
  }
});

// Export the component back for use in other files
module.exports = Navbar;