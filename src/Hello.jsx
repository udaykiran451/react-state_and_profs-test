import React from 'react';
import Login from './login.jsx';
class Hello1 extends React.Component{
    render() {
        return (
            <div>
                Welcome, {this.props.name1}
                <Login username="udaykiran451"/>
                <Login userid="12345"/>
            </div>
        );
    }

}
export default Hello1;