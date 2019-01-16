import React from 'react';
class Login extends React.Component{
    constructor(){
        super();
        this.state={password:"uday468@"};
    }
    render() {
        return(
            <div>
                <h1>{this.props.userid}</h1>
                <h1>{this.props.username}</h1>
                <h1>{this.state.password}</h1>
            </div>
        )
    }
}
export default Login;