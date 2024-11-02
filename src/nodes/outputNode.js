// OutputNode.js
import React from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode/BaseNode';

export const OutputNode = (props) => (
  <BaseNode
    {...props}
    showTextarea={false}
    showSelect={true}
    showLabelInput={true}
    handlePositions={[
      { type: 'target', position: Position.Left, id: `${props.id}-value`, style: { top: '50%' } }
    ]}
    headerText="Output"
  />
);
