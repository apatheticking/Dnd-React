import React, { Component } from 'react';
import './App.css';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import AdminPanel from './Components/Container/AdminPanel/AdminPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Actions: [
        "Import",
        "Export",
        "Sort",
        "Extract",
        "Split",
      ],
      Workflow: {
        "_id": "bU4rMI7fEeeqxlvy4NOyyA==",
        "ProjectId": "bOd74o7fEeeqxlvy4NOyyA==",
        "AcctId": "GVb1w0skuUKO+FfzgvG+JA==",
        "Stages": [
          {
            "id": 1,
            "action": "Import",
            "isStart": true,
            "prevStage": null,
            "nextStage": 2,
          },
          {
            "id": 2,
            "action": "Sort",
            "isStart": false,
            "prevStage": 1,
            "nextStage": 3,
          },
          {
            "id": 3,
            "action": "Extract",
            "isStart": false,
            "prevStage": 2,
            "nextStage": null,
          },
          {
            "id": 4,
            "action": "Export",
            "isStart": false,
            "prevStage": null,
            "nextStage": null,
          }
        ]
      }
    };
  }
  
  //function passed down to the save button
  //on save it will take all the selected actions and update the main state
  updateWorkFlow = (workFlow) => {
    const newWorkFlow = this.buildWorkFlow(workFlow, workFlow.length);
    const newState = {...this.state.Workflow, Stages: newWorkFlow};
    this.setState({Workflow: newState});
  }

  //takes the actions selected and puts into an object resembling a workflow/stages object
  buildWorkFlow = (workFlow, numOfActions) => {
    const newWorkFlow = workFlow.map((work,i) => {
      //varibles to keep track of index and position in workflow
      let index = i + 1;
      const isFirst = ((i + 1) === 1 ? true : false);
      const isLast = ((i + 1) === numOfActions ? null : index + 1);  
      
      return {
        id: index,
        action: work,
        isStart: isFirst,
        prevStage: isFirst ? null : index - 1,
        nextStage: isLast,
      };
    });
    return newWorkFlow;
  } 
  //I did this so you don't have to look at the state
  //to see the current/new work flow
  getWorkFlow = () => {
    let i = 0;
    let flow = "";
    while(i < this.state.Workflow.Stages.length){
      flow += this.state.Workflow.Stages[i].action + " ";
      i++;
    }
    return flow;
  }

  render() {
    const flow = this.getWorkFlow();
    
    return (
      <div>
        <AdminPanel 
          State = {this.state}
          updateWorkFlow = {this.updateWorkFlow}//passed down to save button in WorkFlowSpace
        />
        <p>Current Workflow: { flow }</p>
      </div>
    );
  }
}
//allows the use of drag and drop plugin
export default DragDropContext(HTML5Backend)(App);
