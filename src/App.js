import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
  super(props);

  this.state = { 
    Person :{ 
      fullName:'Amine BELOUD',
      bio: 'an autodidact WEB DEV who takes first cours of reactjs in gomycode will blow your mind', 
      imgSrc: logo, 
      profession: 'Fullstack Js developer'
    },
    show: false,
    timer: 0
   }

   this.startTimer = this.startTimer.bind(this);
   this.stopTimer = this.stopTimer.bind(this);
   this.showProfile = this.showProfile.bind(this);
   this.stopProfile = this.stopProfile.bind(this);
  }
 
  componentDidMount(){
  console.log('mount')
  }
  componentDidUpdate() {
    console.log('update')
  }
  componentWillUnmount() {
    clearInterval(this.myInterval);
    console.log('unmount');
  }
  
  

  startTimer(){
    this.myInterval = setInterval(()=>
    this.setState(prevstate => ({ timer: prevstate.timer+1}))
  , 1000);
  }
  stopTimer() {
    console.log('stop')
    clearInterval(this.myInterval);
    this.setState(prevstate => ({ timer: 0}))
  }
  showProfile(){
    this.setState(prevstate => ({ show: !prevstate.show}));
    this.startTimer();
  }
  stopProfile(){
    this.setState(prevstate => ({ show: !prevstate.show}));
    this.stopTimer();
  }
 
 
  render() { 
    return ( <>
      <h1>REACT STATE CHECKPOINT</h1>
{!this.state.show && <button className='add' onClick={this.showProfile}>show profile</button> }
{this.state.show && 
<>
<button className='remove' onClick={this.stopProfile}>remove profile</button>
<div className='profile'>  
<img width={100} src={this.state.Person.imgSrc} alt={this.state.Person.fullName}></img>
<div style={{marginBottom:20}}>{this.state.Person.fullName}</div>
<div style={{marginBottom:10}}>{this.state.Person.profession}</div>
<div>{this.state.Person.bio}</div>
<div className='timer'>Timer : {this.state.timer}</div>
</div>
</>
 } 
  
  </> 
     );
  }
}
 
export default App;