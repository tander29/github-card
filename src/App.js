import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { active: false, user: {} }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {


    fetch('https://api.github.com/users/tander29')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ user: data })
        console.log(this.state)
      })

    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    return (
      <div >
        <button onClick={this.handleClick}>Hello Press Me</button>
        {this.state.active ?
          < div id='loser' >
            <div>Selfie:</div>
            <img src={this.state.user.avatar_url} />
            <div>{this.state.user.name}</div>
            <div>Following: {this.state.user.following}</div>
            <div>Html url: {this.state.user.html_url}</div>
          </div>
          :
          null}
      </div>
    );
  }
}

// function handleClick(e) {
//   e.preventDefault();
//   console.log('this was clicked')
// }
export default App;
