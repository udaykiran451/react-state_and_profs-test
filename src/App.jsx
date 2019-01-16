import React from 'react';
import Hello1 from './Hello.jsx';

class App extends React.Component {
    constructor(){
     super();
     this.state={name:"uday"};
   }

   render() {
     return (
         <div>
             <h1>welcome:{this.state.name}</h1>
             {/*<h1>Hello React :)</h1>*/}
             <Hello1 name1="react"/>
         </div>)
   }
}

export default App;
