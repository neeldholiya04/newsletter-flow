const simulateWait = (ms, callback) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        callback();
        resolve();
      }, ms);
    });
  };
  
  module.exports = simulateWait;
  