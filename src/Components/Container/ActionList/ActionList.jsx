import React from 'react'
import Action from '../../Presentational/Action/Action';

export default (props) => {
  const ActionList = props.WorkFlowActions.map((WorkFlowAction, i) => {
    return <Action key={i} Action={WorkFlowAction} handleDrop={props.handleDrop}/>
  });

  return (
    <div>
      {ActionList}
    </div>
  )
}
