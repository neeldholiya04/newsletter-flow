import React, { useState } from "react";
import FlowDiagram from "../components/FlowDiagram";
import FlowLogs from "../components/FlowLogs";

const FlowPage = () => {
  const [logs, setLogs] = useState([]);

  const updateLogs = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prevLogs) => [...prevLogs, `[${timestamp}] ${message}`]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Newsletter Subscription Renewal Flow
      </h1>
      <FlowDiagram updateLogs={updateLogs} />
      <FlowLogs logs={logs} />
    </div>
  );
};

export default FlowPage;
