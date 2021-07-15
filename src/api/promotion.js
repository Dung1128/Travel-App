import apisauce from 'apisauce';
import qs from 'qs'
import { link_cms, link_apigw } from './domain'

export const api = apisauce.create({
    baseURL: link_apigw,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 20000,
});

export const apiCMS = apisauce.create({
    baseURL: link_cms,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 20000,
});


export const getPromotion = ({ token, ...params }) => {
    return api.get(`api/promotion/get-promotions?${qs.stringify(params)}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '19996a4883ea9acce9c91ec52d85da83',
            'Authorization': token,
        },
    });
};

export const getAllPromotion = ({ token, ...params }) => {
    return api.get(`api/promotion/promotional_code_list_all${qs.stringify(params)}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '19996a4883ea9acce9c91ec52d85da83',
            'Authorization': token,
        },
    });
};

export const checkPromotionRequest = (params) => {
    return api.post(`api/promotion/check-promotions?merchant_code=${params.merchant_code}`, params, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '19996a4883ea9acce9c91ec52d85da83',
            'Authorization': params.token,
        },
    });
};


export const getReward = ({ token, ...params }) => {
    return api.get(`api/customer/customers?${qs.stringify(params)}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '19996a4883ea9acce9c91ec52d85da83',
            'Authorization': token,
        },
    });
};

export const getDetailPromotion = (params) => {
    return apiCMS.get(`api/promotion-detail?id=${params.id}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
};
// https://api.mybus.vn/api/admin/search-code-hide?code=HAVAZ50k

export const searchCoupon = ({ token, ...params }) => {
    return api.get(`api/admin/search-code-hide?${qs.stringify(params)}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token,
        },
    });
};


