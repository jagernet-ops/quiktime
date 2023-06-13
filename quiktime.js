const { time } = require('console');

const execSync = require('child_process').execSync;

let timeArray = [];
// Replace America/Chicago with the country/state you require the local time from
const currentTime = JSON.parse(execSync('curl -s "http://worldtimeapi.org/api/timezone/America/Chicago"', {encoding: 'utf-8'  })).datetime;
for(let i = 0; i < currentTime.length; i++){
    timeArray.push(currentTime.charAt(i));
}
for(let i = 0; i < timeArray.length; i++){
    if(timeArray[i] === "T"){
        const innerArray = timeArray.slice(i+1, (i+1)+5);
        execSync(`time ${innerArray.join('')}`);
    }
    continue;
}
