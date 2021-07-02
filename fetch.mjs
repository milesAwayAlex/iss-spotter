import {get} from 'native-request';

export default (api, cb) => {
  get(api, (err, data, status) => {
    if (status !== 200) err = new Error(`STATUS ${status}`);
    data = JSON.parse(data);
    cb(err, data);
  });
};
