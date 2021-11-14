import React from 'react';
import './App.css';

import Link from './Component/Link/index';


class App extends React.Component{
  render(){
    return <>
      <Link className="some-link" href="#"> first link</Link>
      <Link className="some-link" href="#"> example text of link</Link>
    </>;
  }    
}
export default App;
