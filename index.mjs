import f from './fetch.mjs';

const api = {
  ip: 'https://api.ipify.org/?format=json',
  geo: 'https://freegeoip.app/json/',
};

f(api.ip, (err, ipObj) => {
  if (err) throw err;
  f(api.geo + ipObj.ip, (err, data) => {
    console.log(err, data);
  });
});
