import apisauce from 'apisauce';
import { link_api } from './domain'

export const api = apisauce.create({
    baseURL: link_api,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 20000,
});


export const getOtpRequest = (params) => {
    return api.get(`/api/get-otp`, params, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
};


export const verifyOtpRequest = (params) => {
    return api.post(`api/verify-otp`, params, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
};

export const getProfileRequest = (params) => {
    return api.get(`api/accounts-info`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': params.token
        },
    });
};


// export const getProfile = (params) => {
//     return api.get(`api/user`, {}, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': params.token
//         },
//     });
// };

// export const getInfoUser = (params) => {
//     return api.get(`api/user-info`, {}, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': params.token
//         },
//     });
// };

// export const updateInfoUser = (params) => {
//     return api.put(`api/user`, params, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': params.token
//         },
//     });
// };

// export const getInfoCustomer = (params) => {
//     return api.get(`api/customer/customers`, {}, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': params.token
//         },
//     });
// };


// export const getListNotifi = (params) => {
//     return api.get(`api/noti/notification`, params, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'token': '19996a4883ea9acce9c91ec52d85da83',
//             'Authorization': params.token,
//         },
//     });
// };

// export const deteleItemNoti = (params) => {
//     return api.post(`api/noti/noti-delete`, params, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'token': '19996a4883ea9acce9c91ec52d85da83',
//             'Authorization': params.token,
//         },
//     });
// };

// export const updateItemNoti = (params) => {
//     return api.post(`api/noti/noti-update`, params, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'token': '19996a4883ea9acce9c91ec52d85da83',
//             'Authorization': params.token,
//         },
//     });
// };

// export const getDefinition = (params) => {
//     return api.get(`api/customer/definition`, params, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'token': '19996a4883ea9acce9c91ec52d85da83',
//             'Authorization': params.token,
//         },
//     });
// };


// export const updateInfoCustomer = (params) => {
//     return api.put(`api/customer/customers`, params, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': params.token
//         },
//     });
// };

// export const registryCustomer = (params) => {
//     return api.post(`api/customer/customers`, params, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': params.token
//         },
//     });
// };

// export const deteleAllNoti = (params) => {
//     return api.post(`api/noti/delete-all`, params, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'token': '19996a4883ea9acce9c91ec52d85da83',
//             'Authorization': params.token,
//         },
//     });
// };


// export const updateInvoiceInfo = (params) => {
//     return api.post(`api/customer/customers/tax`, params, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'token': '19996a4883ea9acce9c91ec52d85da83',
//             'Authorization': params.token,
//         },
//     });
// };

// export const updateFcmToken = (params) => {
//     console.log("params", params)
//     return api.put(`api/user`, params, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'token': '19996a4883ea9acce9c91ec52d85da83',
//             'Authorization': params.token,
//         },
//     });
// };

// export const getDetailItemNoti = (params) => {
//     return api.get(`api/noti/noti-detail/${params?.id}`, params, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'token': '19996a4883ea9acce9c91ec52d85da83',
//             'Authorization': params.token,
//         },
//     });
// };

// export const createAccount = (params) => {
//     return api.post(`api/register`, params, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//     });
// };

