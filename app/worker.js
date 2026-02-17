
/*eslint-env node*/

var jobId = 0;

function processJob() {
  jobId += 1;
  console.log('Worker processed job #' + jobId);

  if (jobId >= 10) {
  console.log('Reached job limit. Closing worker.');
  clearInterval(intervalId);

  setImmediate(() => process.exit(0));
}
}

console.log('Worker started. Polling every 2s.');
setInterval(processJob, 2000);
