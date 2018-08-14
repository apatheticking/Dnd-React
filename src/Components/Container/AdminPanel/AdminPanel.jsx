import React, { Component } from 'react'
import WorkFlow from '../WorkFlow/WorkFlow';

//if new workflow button is clicked
//this varible will hold the component
let showPanel = null;

export default class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        clicked: false
    };
  }
  //toggles the workflow panel on click
  //changes the content of show panel 
  handleClick = () => {
      if(this.state.clicked === false){
        this.setState({clicked: true});
        showPanel = <WorkFlow State = {this.props.State} updateWorkFlow = {this.props.updateWorkFlow}/>
    } else if (this.state.clicked === true){
        this.setState({clicked: false});
        showPanel = null;
      }
  }

  render() {
    return (
      <div>
        <p>Welcome to the Admin Panel</p>
        <button onClick = { this.handleClick }>New Work Flow</button>
        { showPanel }
      </div>
    )
  }
}
