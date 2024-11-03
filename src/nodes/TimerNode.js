import React, { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode/BaseNode'; 

const TimerNode = ({ id, data }) => {
  const [duration, setDuration] = useState(data?.duration || 1000); 
  const [timerActive, setTimerActive] = useState(false);

  const handleStart = () => {
    setTimerActive(true);
  };

  useEffect(() => {
    let timer;
    if (timerActive) {
      timer = setTimeout(() => {
        alert(`Timer finished for node ${id}`);
        setTimerActive(false);
      }, duration);
    }
    return () => clearTimeout(timer);
  }, [duration, timerActive, id]);

  return (
    <BaseNode
      id={id}
      data={{ ...data, duration }}
      headerText="Timer Node"
      showTextarea={true}
      showLabelInput={true}
      showSelect={false}
    >
      <label>
        Duration (ms):
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          style={{ width: '100%', marginTop: '5px' }}
        />
      </label>
      <button onClick={handleStart} style={{ marginTop: '5px' }}>Start Timer</button>
    </BaseNode>
  );
};

export default TimerNode;
