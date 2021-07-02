import {fetch as f, fetchPr} from './fetch.mjs';

const apis = {
  ip: 'https://api.ipify.org/?format=json',
  geo: 'https://freegeoip.app/json/',
  pass: ['http://api.open-notify.org/iss-pass.json?lat=', '&lon='],
};

const getTimes = cb => {
  f(apis.ip, (err, ipObj) => {
    if (err) {
      cb(err, null);
      return;
    }
    f(apis.geo + ipObj.ip, (err, data) => {
      if (err) {
        cb(err, null);
        return;
      }
      f(
        apis.pass[0] + data.latitude + apis.pass[1] + data.longitude,
        (err, data) => {
          if (err) {
            cb(err, null);
            return;
          }
          cb(null, data.response);
        }
      );
    });
  });
};

const getPromise = () =>
  fetchPr(apis.ip)
    .then(data => fetchPr(apis.geo + data.ip))
    .then(data =>
      fetchPr(apis.pass[0] + data.latitude + apis.pass[1] + data.longitude)
    )
    .then(data => data.response);

export {getTimes, getPromise};
