// SummaryNode.js
import React, { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode/BaseNode';

const SummaryNode = ({ id, data, onConnect }) => {
  const [summary, setSummary] = useState(data?.summary || '');

  useEffect(() => {
    // Example of fetching summary data or performing calculation
    const generateSummary = () => {
      if (data && data.inputText) {
        setSummary(`Summary of "${data.inputText}"`);
      }
    };
    generateSummary();
  }, [data]);

  return (
    <BaseNode
      id={id}
      data={{ ...data, summary }}
      handlePositions={[{ id: 'default', position: 'bottom' }]}
      onConnect={onConnect}
      headerText="Summary Node"
      showTextarea={true}
      showLabelInput={true}
      showSelect={false}
    >
      <div>
        <label>Summary:</label>
        <textarea
          value={summary}
          readOnly
          style={{ width: '100%', marginTop: '5px' }}
        />
      </div>
    </BaseNode>
  );
};

export default SummaryNode;
