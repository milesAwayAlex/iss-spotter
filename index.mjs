import f from './fetch.mjs';

const api = {
  ip: 'https://api.ipify.org/?format=json',
  geo: 'https://freegeoip.app/json/',
  pass: ['http://api.open-notify.org/iss-pass.json?lat=', '&lon='],
};

f(api.ip, (err, ipObj) => {
  if (err) throw err;
  f(api.geo + ipObj.ip, (err, data) => {
    if (err) throw err;
    f(
      api.pass[0] + data.latitude + api.pass[1] + data.longitude,
      (err, data) => {
        if (err) throw err;
        const passes = data.response.map(r => ({
          dur: r.duration,
          rise: r.risetime,
        }));
        passes.forEach(pass => {
          console.log(pass);
        });
      }
    );
  });
});
