import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const actionStyle = {
    border: '2px solid black',
    margin: '5px 10px 5px 10px'
}

const actionSource = {
    beginDrag(props){
      let draggedObject = {action: props.Action}
      return draggedObject;
    },
    endDrag(props, monitor, component){
      if(!monitor.didDrop()){
        return;
      }
      return props.handleDrop(props.Action);
    }
}
//drag and drop plug in code
function collect(connect, monitor){
  return{
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),    
  }
}

class Action extends Component {
  render() {
    const { connectDragSource, Action } = this.props;
    return connectDragSource(
      <span style={actionStyle}>{Action}</span>
    )
  }
}
//lets the component be draggable
export default DragSource("action", actionSource, collect)(Action);

