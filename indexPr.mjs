import {getPromise} from './nextISSTimesForMyLocation.mjs';

const printPromises = () => {
  getPromise()
    .then(data => {
      data.forEach(pass => {
        const datetime = new Date(0);
        datetime.setUTCSeconds(pass.risetime);
        let timeStr = datetime.toString();
        timeStr = timeStr.slice(0, timeStr.indexOf(' GMT'));
        console.log(
          `Next pass with Promises: ${timeStr} for ${pass.duration} seconds`
        );
      });
    })
    .catch(err => {
      throw err;
    });
};
printPromises();
