import React, { Component } from 'react'
import { DropTarget } from 'react-dnd';

const workFlowStyle = {
  width: '90%',
  height: '300px',
  border: '2px solid black',
}

const actionStyle = {
  border: '2px solid black',
  margin: '2px',
}

function collect(connect, monitor){
  return{
    connectDropTarget: connect.dropTarget(),
  }
}

class WorkFlowSpace extends Component {
  //when you save a workflow it will clear the work flow space 
  // and update the main state
  handleSave = () => {
    this.props.clearWorkFlow();
    this.props.updateWorkFlow(this.props.Actions);
  }

  render() {
    const { connectDropTarget } = this.props;

    const ActionList = this.props.Actions.map((Action, i) => {
      return <span style={actionStyle} key={i}>{Action}</span>
    });

    return connectDropTarget(     
      <div style={workFlowStyle}>
        <button onClick={this.handleSave}>Save</button>
        <button onClick={this.props.clearWorkFlow}>Cancel</button>
        <div>
          {ActionList}
        </div>
      </div>
    )
  }
}
//lets the component be droppable
export default DropTarget("action", {}, collect)(WorkFlowSpace);