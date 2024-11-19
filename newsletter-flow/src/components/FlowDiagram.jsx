import React, { useState, useEffect } from "react";
import ReactFlow, { Controls, Background } from "react-flow-renderer";

const FlowDiagram = ({ updateLogs }) => {
  const initialNodes = [
    { id: "1", type: "input", data: { label: "Send Initial Reminder" }, position: { x: 250, y: 0 } },
    { id: "2", data: { label: "Renewed?" }, position: { x: 250, y: 100 } },
    { id: "3", data: { label: "Thank You Email Sent" }, position: { x: 100, y: 200 } },
    { id: "4", data: { label: "Send Second Reminder" }, position: { x: 400, y: 200 } },
    { id: "5", data: { label: "Renewed After Second Reminder?" }, position: { x: 250, y: 300 } },
    { id: "6", data: { label: "Thank You Email Sent" }, position: { x: 100, y: 400 } },
    { id: "7", data: { label: "No Further Action" }, position: { x: 400, y: 400 } },
  ];

  const initialEdges = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e2-3", source: "2", target: "3", label: "Yes" },
    { id: "e2-4", source: "2", target: "4", label: "No" },
    { id: "e4-5", source: "4", target: "5", animated: true },
    { id: "e5-6", source: "5", target: "6", label: "Yes" },
    { id: "e5-7", source: "5", target: "7", label: "No" },
  ];

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Sequentially add nodes and edges with a delay
    const addFlowElements = () => {
      // Add nodes first
      initialNodes.forEach((node, index) => {
        setTimeout(() => {
          setNodes((prevNodes) => [...prevNodes, node]);
        }, index * 1000);
      });

      // Add edges and update logs
      initialEdges.forEach((edge, index) => {
        setTimeout(() => {
          if (!isCompleted) {
            setEdges((prevEdges) => [...prevEdges, edge]);
            updateLogs(`Edge Added: ${edge.label ? edge.label : "Flowing"} from ${edge.source} to ${edge.target}`);
          }

          // Mark flow as completed after the last edge
          if (index === initialEdges.length - 1) {
            setIsCompleted(true);
          }
        }, (index + initialNodes.length) * 1000);
      });
    };

    addFlowElements();
  }, [updateLogs, isCompleted]);

  return (
    <div
      className="h-[500px] w-full border rounded-lg bg-gray-50 p-4 shadow"
      style={{ height: "500px", width: "100%" }}
    >
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Controls />
        <Background />
      </ReactFlow>
      {isCompleted && <p className="text-center text-green-600 font-bold mt-4">Flow Completed!</p>}
    </div>
  );
};

export default FlowDiagram;
