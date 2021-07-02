import getIp from './fetch.mjs';

getIp((err, ip) => {
  if (err) throw err;
  console.log(ip);
});
