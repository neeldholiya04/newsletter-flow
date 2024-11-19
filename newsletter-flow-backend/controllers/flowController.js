const Log = require("../models/logModel");
const simulateWait = require("../utils/simulateWait");

const flowLogs = [];

const addLog = async (flowId, message) => {
  flowLogs.push(message);
  await Log.create({ flowId, message });
};

const startFlow = async (req, res, next) => {
  const flowId = "flow-" + Date.now();

  try {
    await addLog(flowId, "Step 1: Sending Initial Reminder");
    await simulateWait(5000, () => {});

    let renewed = Math.random() < 0.5; 
    if (renewed) {
      await addLog(flowId, "Renewal Confirmed. Sending Thank You email.");
      return res.json({ logs: flowLogs });
    }

    await addLog(flowId, "Step 3: Sending Second Reminder");
    await simulateWait(2000, () => {});

    renewed = Math.random() < 0.5;
    if (renewed) {
      await addLog(flowId, "Renewal Confirmed. Sending Thank You email.");
    } else {
      await addLog(flowId, "Flow Complete: No Further Action");
    }

    res.json({ logs: flowLogs });
  } catch (error) {
    next(error); 
  }
};

module.exports = { startFlow };
