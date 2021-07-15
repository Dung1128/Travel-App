import apisauce from 'apisauce';
import { link_cms, link_apigw } from './domain'

export const api = apisauce.create({
    baseURL: link_cms,
    timeout: 20000,
});

export const apiCMS = apisauce.create({
    baseURL: link_cms,
    timeout: 20000,
});

export const apiSearchLocation = apisauce.create({
    baseURL: 'https://place.havaz.vn/',
    timeout: 20000,
});

export const apiMybus = apisauce.create({
    baseURL: link_apigw,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 20000,
});

export const getPopularTrip = () => {
    return api.get(`api/homewayroads`);
};


export const getPromotions = () => {
    return apiCMS.get(`api/promotion-listing`);
};

export const getBanner = () => {
    return apiCMS.get(`api/list-banner`);
};


export const getLocation = (params) => {
    // return apiSearchLocation.get(`api/v1/places?api_token=63AOaENa1cV2YnEa025glS1inVAm0bQS94yzKJQErNaSINGyvdo9VvEu6eeW&input=${params.text}`);
    return apiMybus.get(`api/maps/places?input=${params.text}&channel=APPHAIVAN`)
};

export const getDetailLocation = (params) => {
    // 
    // return apiSearchLocation.get(`api/v1/places/${params.key}?api_token=6tihDYHMeDKem5nvi2SnZ04o4cXRloZsyoMkJ6RsltPy5irdkCpR0QTyCk2v`);
    return apiMybus.get(`api/maps/places/detail?place_id=${params.key}&channel=APPHAIVAN`);
};

export const getMyLocation = (params) => {
    return apiMybus.get(`api/maps/points/reverse?point=${params.location}&channel=APPHAIVAN`);
};


export const getPlaceDefine = (params) => {
    return apiMybus.get(`api/places?type=${params.type}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
};


export const getProduct = () => {
    return apiMybus.get(`api/admin/product?limit=10&page=1`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '19996a4883ea9acce9c91ec52d85da83',
        },
    });
};



