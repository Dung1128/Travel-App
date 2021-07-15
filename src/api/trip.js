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

export const getSearchTrip = (params) => {
    return api.get(`api/el/trips?${qs.stringify(params)}`);
};


export const getTripDetail = ({ token, ...params }) => {
    return api.get(`api/trips/${params.trip_id}?${qs.stringify(params)}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '19996a4883ea9acce9c91ec52d85da83',
            'Authorization': token,
        },
    });
};


export const holdBooking = (params) => {
    return api.post(`api/hold-booking`, params, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '19996a4883ea9acce9c91ec52d85da83',
            'Authorization': params.token,
        },
    });
}
//api/route-listing?route=ha-noi/lao-cai
export const getRoute = (params) => {
    return apiCMS.get(`api/route-listing?route=${params.route}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '19996a4883ea9acce9c91ec52d85da83',
        },
    });
}

export const getTripJourney = (params) => {
    return api.get(`api/el/trip_detail?trip_id=${params.trip_id}&merchant_code=${params.merchant_code}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
}