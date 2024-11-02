import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Handle } from 'reactflow';
import './baseNode.css';
import DeleteIcon from '../../assets/DeleteIcon';
import { useStore } from '../../store';

export const BaseNode = ({
  id,
  data,
  handlePositions,
  children,
  showTextarea = false,
  showSelect = false,
  showLabelInput = true,
  onConnect,
  headerText,
}) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [currName, setCurrName] = useState(data?.name || id);
  const [inputType, setInputType] = useState(data?.inputType || 'Text');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dynamicHandles, setDynamicHandles] = useState([]);

  const deleteNode = useStore((state) => state.deleteNode);
  const updateNodeField = useStore((state) => state.updateNodeField);
  const nodeRef = useRef(null);
  const textareaRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
    adjustNodeSize();
  };

  const adjustNodeSize = () => {
    if (textareaRef.current && nodeRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.width = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      const textareaWidth = textareaRef.current.scrollWidth + 16;
      const maxWidth = window.innerWidth - 40;
      const newWidth = Math.min(textareaWidth, maxWidth);
      textareaRef.current.style.width = `${newWidth}px`;
      nodeRef.current.style.width = `${newWidth}px`;
      nodeRef.current.style.height = 'auto';
    }
  };

  const handleSelectChange = (e) => {
    setInputType(e.target.getAttribute('data-value'));
    setDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const createHandleFromText = useCallback(
    (text) => {
      const matches = text.match(/{{\s*[\w]+\s*}}/g);
      if (matches) {
        const handles = matches.map((match, index) => ({
          id: `${id}-dynamic-${index}-${match}`,
          type: 'source',
          position: 'left',
          style: { left: 0 },
        }));
        setDynamicHandles(handles);
        updateNodeField(id, 'handles', handles);
      } else {
        setDynamicHandles([]);
        updateNodeField(id, 'handles', []);
      }
    },
    [id, updateNodeField] // Add id and updateNodeField to dependencies
  );
  

  const handleDelete = () => { deleteNode(id); };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    adjustNodeSize();
    createHandleFromText(currName);
  }, [currName, currText, createHandleFromText]); // Added createHandleFromText to the dependency array
  
  return (
    <div className="node-container" ref={nodeRef}>
      <div className="node-header">
        <span>{headerText}</span>
        <DeleteIcon onClick={handleDelete} className="delete-icon" />
      </div>
      {showLabelInput && (
        <div>
          <label>
            Name:
            <textarea
              ref={textareaRef}
              value={currName}
              onChange={handleNameChange}
              style={{ resize: 'none', overflow: 'hidden' }}
            />
          </label>
        </div>
      )}
      {showTextarea && (
        <div>
          <label>
            Text:
            <textarea
              value={currText}
              onChange={(e) => {
                setCurrText(e.target.value);
                adjustNodeSize();
                createHandleFromText(e.target.value);
              }}
              style={{ resize: 'none', overflow: 'hidden' }}
            />
          </label>
        </div>
      )}
      {showSelect && (
        <div>
          <label>
            Type:
            <div
              className={`custom-dropdown ${dropdownOpen ? 'open' : ''}`}
              ref={dropdownRef}
            >
              <div
                className="custom-select"
                onClick={toggleDropdown}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggleDropdown()}
                aria-expanded={dropdownOpen}
              >
                {inputType}
                <span className="dropdown-arrow">&#9662;</span>
              </div>
              {dropdownOpen && (
                <div className="dropdown-options">
                  <div
                    className="dropdown-option"
                    data-value="Text"
                    onClick={handleSelectChange}
                  >
                    Text
                  </div>
                  <div
                    className="dropdown-option"
                    data-value="File"
                    onClick={handleSelectChange}
                  >
                    File
                  </div>
                </div>
              )}
            </div>
          </label>
        </div>
      )}
      {handlePositions &&
        handlePositions.map((handle, index) => (
          <Handle
            key={`${id}-handle-${index}`}
            type={handle.type}
            position={handle.position}
            id={`${id}-${handle.id}`}
            style={handle.style}
          />
        ))}
      {dynamicHandles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
          onConnect={onConnect}
        />
      ))}
      {children}
    </div>
  );
};
