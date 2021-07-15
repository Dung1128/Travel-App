import apisauce from 'apisauce';
import { link_cms, link_apigw } from './domain'

export const api = apisauce.create({
    baseURL: link_apigw,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 20000,
});

export const getIssuesRating = (params) => {
    return api.get(`api/rating/get-issuess?merchant_code=${params.merchant_code}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '19996a4883ea9acce9c91ec52d85da83',
            'Authorization': params.token,
        },
    });
};

export const createRating = (params) => {
    return api.post(`api/rating/create-rating`, params, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '19996a4883ea9acce9c91ec52d85da83',
            'Authorization': params.token,
        },
    });
};


