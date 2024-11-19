const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  flowId: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
