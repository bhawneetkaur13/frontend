// src/nodes/DisplayNode.js
import React from 'react';
import { Handle } from 'reactflow';
import { BaseNode } from './BaseNode/BaseNode'; // Assuming BaseNode is a base component for custom nodes

const DisplayNode = ({ id, data }) => {
  const { value = '' } = data;

  return (
    <BaseNode
      id={id}
      data={data}
      headerText="Display Node"
      showTextarea={false}
      showLabelInput={false}
    >
      <div style={{ padding: '5px', textAlign: 'center' }}>
        <strong>Output:</strong>
        <div style={{ marginTop: '5px', padding: '10px', backgroundColor: '#f3f3f3', borderRadius: '4px' }}>
          {value || 'No output available'}
        </div>
      </div>
      <Handle type="target" position="top" id="input" style={{ background: '#555' }} />
    </BaseNode>
  );
};

export default DisplayNode;
