import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Ciao from './components/Ciao';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isDirection:true,
      isAlphabet:true,
      users:[
        {
          id:1,
          fname:'Elon'
        },
        {
          id:2,
          fname:'Elen'
        },
        {
          id:3,
          fname:'Tim'
        },
        {
          id:4,
          fname:'Bob'
        },
        {
          id:5,
          fname:'Sasha'
        },
        {
          id:6,
          fname:'Rob'
        },
        {
          id:7,
          fname:'Alex'
        },
        {
          id:8,
          fname:'Rex'
        },
      ]
    }
  }
  sortUsers = () =>{
    const {users,isDirection} = this.state;
    const sortUsers = JSON.parse(JSON.stringify(users));
    //const sortUsers = [...users];
    sortUsers.sort((prev, next)=> isDirection ? next.id-prev.id:prev.id-next.id);
    this.setState({
      isDirection:!isDirection,
      users:sortUsers
    })
  }
  sortUsersAlpha = () =>{
    const {users,isAlphabet} = this.state;
    const sortUsers = JSON.parse(JSON.stringify(users));
    //const sortUsers = [...users];
    console.log(sortUsers);
    sortUsers.sort((prev, next)=>{
      if(!isAlphabet){
        if(prev.fname>next.fname){
          return -1;
        }
        if(prev.fname<next.fname){
          return 1;
        }
        return 0;
      }
      if(prev.fname>next.fname){
        return 1;
      }
      if(prev.fname<next.fname){
        return -1;
      }
      return 0;
    });
    this.setState({
      isAlphabet:!isAlphabet,
      users:sortUsers,
    })
  }
  render(){
    const {users,isDirection,isAlphabet} = this.state;
    return <>
    <p>
    <button onClick={this.sortUsers}>SORT BY NUMBER {isDirection?'straight ':'reverse '}</button>
    <button onClick={this.sortUsersAlpha}>SORT BY NAME {isAlphabet?'straight ':'reverse '}</button>
    </p>
    <div>
      {users.map(({id, fname})=><Ciao key={id}  id={id} name={fname} />)}
    </div>
    </>;
  }
}
export default App;
