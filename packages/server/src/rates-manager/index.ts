import fetch from 'node-fetch';
import { IRates } from 'src/rates-manager/typings';

export const ratesManager = {
  async get(): Promise<IRates> {
    const response = await fetch('https://ratesapi.io/api/latest?base=USD');
    const responseData = await response.json();
    return responseData.rates;
  },
};
