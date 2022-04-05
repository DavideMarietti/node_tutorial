// OS module -> interaction with server and OS

const os = require('os'); // doesn't need ./ becaus it is a built in module

// info about current user
const user = os.userInfo();
console.log(user);

//  return the system runtime in seconds
console.log('System uptime is ' + os.uptime() + ' seconds');

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)