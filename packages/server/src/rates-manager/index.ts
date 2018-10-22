import fetch from 'node-fetch';
import { IRates } from 'src/rates-manager/typings';

export const ratesManager = {
  get(): Promise<IRates> {
    return (
      fetch('https://ratesapi.io/api/latest?base=USD')
        .then(response => response.json())
        .then(responseData => responseData.rates)
    );
  },
};
