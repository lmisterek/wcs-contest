var React = require('react');
var Router = require('react-router')

var Main = React.createClass({

  render: function(){

    return(


    <div className="main-container">

        <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <img alt="Brand" src="./assets/JnJ3.png"  />  
                    </a>         
              </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                          <li><a href="#Main">Login</a></li>
                          <li><a href="#Register">Register</a></li>
                        </ul>
                </div>
            </div>    
        </nav>


    <div className="container">
        <br />
        {this.props.children}
    </div>
</div>
    )
}
});

module.exports = Main;