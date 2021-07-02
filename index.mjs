import {getTimes} from './nextISSTimesForMyLocation.mjs';

getTimes((err, data) => {
  if (err) return console.log('ERROR:', err);
  data.forEach(pass => {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    let timeStr = datetime.toString();
    timeStr = timeStr.slice(0, timeStr.indexOf(' GMT'));
    console.log(`Next pass: ${timeStr} for ${pass.duration} seconds`);
  });
});
