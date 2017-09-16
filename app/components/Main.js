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
                    <img alt="Brand" src="./css/JnJ3.png"  />  
                    </a>         
              </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right"> 
                          <li>><a href="/"><span className="teal glyphicon glyphicon-globe"></span> Dashboard</a></li>
                          <li><a href="/users/logout"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
                          <li><a href="#Main"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                          <li><a href="#Register"><span className="glyphicon glyphicon-user"></span> Register</a></li>
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