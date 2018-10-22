import fetch from 'node-fetch';
import { IRates } from 'src/rates-manager/typings';

export const ratesManager = {
  get(): Promise<IRates> {
    return (
      fetch('http://data.fixer.io/api/latest?access_key=780070b33bed84b5003e036aa4704e5f&format=1')
        .then(response => response.json())
        .then(responseData => responseData.rates)
    );
  },
};
