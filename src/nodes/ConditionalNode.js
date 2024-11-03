import React, { useState } from 'react';
import { BaseNode } from './BaseNode/BaseNode';

const ConditionalNode = ({ id, data }) => {
  const [selectedOption, setSelectedOption] = useState(data?.selectedOption || 'Option 1');

  return (
    <BaseNode
      id={id}
      data={{ selectedOption }}
      showLabelInput={false}
      showTextarea={false}
      showSelect={false}
      headerText="Conditional Node"
    >
      <div>
        <label>
          Choose an option:
          <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
          </select>
        </label>
        <div>
          {selectedOption === 'Option 1' ? (
            <p>You selected Option 1!</p>
          ) : (
            <p>You selected Option 2!</p>
          )}
        </div>
      </div>
    </BaseNode>
  );
};

export default ConditionalNode;
