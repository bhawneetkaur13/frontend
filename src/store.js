import { create } from 'zustand';
import { addEdge, applyNodeChanges, applyEdgeChanges, MarkerType } from 'reactflow';

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  nodeIDs: {},
  getNodeID: (type) => {
    const newIDs = { ...get().nodeIDs };
    if (newIDs[type] === undefined) {
      newIDs[type] = 0;
    }
    newIDs[type] += 1;
    set({ nodeIDs: newIDs });
    return `${type}-${newIDs[type]}`;
  },
  addNode: (node) => {
    set({ nodes: [...get().nodes, node] });
  },
  deleteNode: (nodeId) => {
    set({ nodes: get().nodes.filter(node => node.id !== nodeId) });
  },
  onNodesChange: (changes) => {
    set({ nodes: applyNodeChanges(changes, get().nodes) });
  },
  onEdgesChange: (changes) => {
    set({ edges: applyEdgeChanges(changes, get().edges) });
  },
  onConnect: (connection) => {
    console.log('Connecting:', connection);
    set({
      edges: addEdge({
        ...connection,
        type: 'smoothstep',
        animated: true,
        markerEnd: {
          type: MarkerType.Arrow,
          height: 20,
          width: 20,
        },
      }, get().edges),
    });
  },
  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, [fieldName]: fieldValue };
        }
        return node;
      }),
    });
  },
  updateCalculationNode: (nodeId, num1, num2, operation) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, num1, num2, operation };
        }
        return node;
      }),
    });
  },
updateDisplayValue: (nodeId, value) => {
  set({
    nodes: get().nodes.map((node) => {
      if (node.id === nodeId) {
        node.data = { ...node.data, value };
      }
      return node;
    }),
  });
},
updateConditionalNode: (nodeId, selectedOption) => {
  set({
    nodes: get().nodes.map((node) => {
      if (node.id === nodeId) {
        node.data = { ...node.data, selectedOption };
      }
      return node;
    }),
  });
},

  
}));

export default useStore
