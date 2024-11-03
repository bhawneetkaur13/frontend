import React from 'react';
import './submit.css';
import { useStore } from '../store'; // Adjust the import path as necessary

export const SubmitButton = () => {
    const { nodes, edges } = useStore(state => ({ nodes: state.nodes, edges: state.edges }));

    async function handleSubmit() {
        const data = {
            nodes: nodes.map(node => node.id),
            edges: edges.map(edge => ({
                from: edge.source,
                to: edge.target
            })),
        };
    
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorResponse.detail}`);
            }
    
            const result = await response.json();
            console.log(result);
    
            // Alert with better formatting
            alert(`Result: ${JSON.stringify(result, null, 2)}`); // Pretty-print with 2 spaces
    
        } catch (error) {
            console.error('Error:', error);
            alert(`Error: ${error.message}`);
        }
    }
    

    return (
        <div className="submit-container">
            <button type="button" className="submit-button" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};
