import {get} from 'native-request';

const api = 'https://api.ipify.org/?format=json';

export default cb => {
  get(api, (err, data, status) => {
    if (status !== 200) err = new Error(`STATUS ${status}`);
    data = JSON.parse(data);
    cb(err, data.ip);
  });
};
