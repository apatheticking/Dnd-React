import React, { Component } from 'react'
import ActionList from '../ActionList/ActionList';
import WorkFlowSpace from '../../Presentational/WorkFlowSpace/WorkFlowSpace';

class WorkFlow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      workflow: [],
    };
  }
  //takes the actions dropped into the work flow space and adds it to the state
  //after actions are added to state they are sent to the work flow space
  handleDrop = (action) => {
    this.setState({workflow: [...this.state.workflow, action]});
  }
  //clears the work flow space when you click cancel
  clearWorkFlow = () => {
    this.setState({workflow: []});
  }

  render() {
    return (
      <div>
          <ActionList 
            WorkFlowActions = {this.props.State.Actions} 
            handleDrop={(action) => this.handleDrop(action)}
          />
        <div>
          <WorkFlowSpace 
            Actions = {this.state.workflow}
            clearWorkFlow = {this.clearWorkFlow}  
            updateWorkFlow = {this.props.updateWorkFlow}
          />
        </div>
    </div>
    )
  }
}

export default WorkFlow;
