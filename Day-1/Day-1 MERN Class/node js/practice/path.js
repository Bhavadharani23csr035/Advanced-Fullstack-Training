const path = require('path');

const result = path.join("folder", "subfolder", "file.txt");
console.log(result);
console.log(path.basename("/user/local/test.txt"));
console.log(path.resolve("folder", "file.js"));
const os = require('os');

console.log("System Uptime (seconds):", os.uptime());
