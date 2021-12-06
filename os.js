var os = require('os');
console.log("OS CPU architecture Architecture: " + os.arch());
console.log("Free memory of the system: " + ((os.freemem() / 1024 / 1024 / 1024) * 100)) / 100 + " GB";
console.log("Total memory of the system: " + ((os.totalmem() / 1024 / 1024 / 1024) * 100)) / 100 + " GB";
console.log("OS Platform: " + os.platform());
console.log("Current User: " + os.userInfo().username);
