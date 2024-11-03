import React, { useState } from 'react';
import { PipelineToolbar } from './Toolbar/toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './Submit/submit';

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const handleNodesEdgesUpdate = (newNodes, newEdges) => {
    setNodes(newNodes);
    setEdges(newEdges);
  };

  return (
    <div>
      <PipelineToolbar />
      <PipelineUI onNodesEdgesUpdate={handleNodesEdgesUpdate} />
      <SubmitButton nodes={nodes} edges={edges} />
    </div>
  );
}

export default App;
