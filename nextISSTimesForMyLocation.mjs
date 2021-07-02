import f from './fetch.mjs';

export default cb => {
  const apis = {
    ip: 'https://api.ipify.org/?format=json',
    geo: 'https://freegeoip.app/json/',
    pass: ['http://api.open-notify.org/iss-pass.json?lat=', '&lon='],
  };
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
