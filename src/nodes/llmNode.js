import React from 'react';
import { BaseNode } from './BaseNode/BaseNode';

export const LLMNode = (props) => (
  <BaseNode
    {...props}
    showLabelInput={false}
    handlePositions={[
      { type: 'target', position: 'left', id: `${props.id}-system`, style: { top: '33%' } },
      { type: 'target', position: 'left', id: `${props.id}-prompt`, style: { top: '66%' } },
      { type: 'source', position: 'right', id: `${props.id}-response`, style: { top: '50%' } }
    ]}
    headerText="LLM"
  >
    <div>
      <span>This is an LLM.</span>
    </div>
    
  </BaseNode>
);
