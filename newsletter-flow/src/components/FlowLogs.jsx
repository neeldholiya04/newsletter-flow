import React from "react";

const FlowLogs = ({ logs }) => {
  return (
    <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Logs</h2>
      <ul className="space-y-3">
        {logs.map((log, index) => (
          <li
            key={index}
            className="text-gray-700 bg-white p-3 rounded-lg shadow-sm border border-gray-300"
          >
            {log}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlowLogs;
