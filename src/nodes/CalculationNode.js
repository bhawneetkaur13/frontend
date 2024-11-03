// CalculationNode.js
import React, { useState } from 'react';
import { BaseNode } from './BaseNode/BaseNode'; 

const CalculationNode = ({ id, data, onConnect }) => {
  const [num1, setNum1] = useState(data?.num1 || 0);
  const [num2, setNum2] = useState(data?.num2 || 0);
  const [operation, setOperation] = useState(data?.operation || '+');
  const [result, setResult] = useState(0);

  const calculateResult = () => {
    let res;
    switch (operation) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? num1 / num2 : 'Error';
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <BaseNode
      id={id}
      data={{ ...data, num1, num2, operation }}
      handlePositions={[{ id: 'default', position: 'bottom' }]}
      onConnect={onConnect}
      headerText="Calculation Node"
      showTextarea={false}
      showLabelInput={true}
      showSelect={false}
    >
      <label>
        Number 1:
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          style={{ width: '100%', marginTop: '5px' }}
        />
      </label>
      <label>
        Number 2:
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          style={{ width: '100%', marginTop: '5px' }}
        />
      </label>
      <label>
        Operation:
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          style={{ width: '100%', marginTop: '5px' }}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </label>
      <button onClick={calculateResult} style={{ marginTop: '5px' }}>Calculate</button>
      <div>Result: {result}</div>
    </BaseNode>
  );
};

export default CalculationNode;
