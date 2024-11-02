import React from 'react';
import { BaseNode } from './BaseNode/BaseNode';

export const TextNode = (props) => (
  <BaseNode
    {...props}
    handlePositions={[
      { type: 'source', position: 'right', id: `${props.id}-output`, style: { top: '50%' } }
    ]}
    headerText="Text"
  />
);
