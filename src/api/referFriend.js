import apisauce from 'apisauce';
import { link_apigw } from './domain'
import qs from 'qs'

export const api = apisauce.create({
  baseURL: link_apigw,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

export const getReferFriend = (params) => {
  return api.get(`api/customer/ref-app-install?size=${params.size}`, {}, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': '19996a4883ea9acce9c91ec52d85da83',
      'Authorization': params.token,
    },
  });
};