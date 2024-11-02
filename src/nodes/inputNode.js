import React from 'react'; 
import { Position } from 'reactflow'; 
import { BaseNode } from './BaseNode/BaseNode'; 
export const InputNode = (props) => 
  ( <BaseNode 
    {...props} showSelect={true} handlePositions={[ { type: 'source', position: Position.Right, id: `${props.id}-value`, style: { top: '50%' } } ]}
    headerText="Input" > {/* Removing any unintended handles */} </BaseNode> );