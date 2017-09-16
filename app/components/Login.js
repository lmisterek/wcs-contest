var React = require('react');
var Router = require('react-router')

var Login = React.createClass({

  render: function(){

    return(



<h2 className='page-header'>Dashboard</h2>
    <form method="post" action='/users/login'>
	    {{#if message}}
            <div className="alert alert-success">{{message}}</div>
     {{/if}}
	    <div className = 'form-group'>
		<label>Username </label>
		<input type="text" className="form-control" placeholder="Username" name="username">
	</div>
	<div class = 'form-group'>
		<label>Password </label>
		<input type="password" className="form-control" placeholder="Password" name="password">
	</div>
    <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
    </div>
</form>
    )
}
});

module.exports = Login;