import {get} from 'native-request';
import f from 'node-fetch';

const fetch = (api, cb) => {
  get(api, (err, data, status) => {
    if (status !== 200) err = new Error(`STATUS ${status}`);
    data = JSON.parse(data);
    cb(err, data);
  });
};

const fetchPr = api => f(api).then(res => res.json());

export {fetch, fetchPr};
