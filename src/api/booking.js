import apisauce from 'apisauce';
import { link_cms, link_apigw } from './domain'
import qs from 'qs'

export const api = apisauce.create({
    baseURL: link_apigw,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 20000,
});

export const cancelBooking = (params) => {
    return api.post(`api/cancel-booking?order_code=${params.order_code}&merchant_code=${params.merchant_code}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '19996a4883ea9acce9c91ec52d85da83',
            'Authorization': params.token,
        },
    });
};

export const bookingTrip = (params) => {
    return api.post(`api/bookings`, params, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '19996a4883ea9acce9c91ec52d85da83',
            'Authorization': params.token,
        },
    })
}

export const getMyBooking = ({ token, ...params }) => {
    return api.get(`api/bookings?${qs.stringify(params)}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        },
    });
};

export const getDetailBookingCarTour = ({ token, ...params }) => {
    return api.get(`api/bookings/${params?.booking_code}?${qs.stringify(params)}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        },
    });
};

export const cancelSeatCarTour = (params) => {
    return api.post(`api/cancel-seat`, params, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': params.token
        },
    });
};

export const cancelBookingCarTour = (params) => {
    return api.post(`api/cancel-booking`, params, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': params.token
        },
    });
};

/// CarRental
export const getBookingCarRental = (params) => {
    return api.get(`api/cr/bookings`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': params.token
        },
    });
};

export const getDetailBookingCarRental = (params) => {
    return api.post(`api/cr/detail-booking`, { code: params.code }, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': params.token
        },
    });
};
export const checkTransit = (params) => {
    return api.get(`api/el/is_transit?location=${params.location}&trip_id=${params.trip_id}&merchant_code=${params.merchant_code}&place_id=${params.place_id}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '19996a4883ea9acce9c91ec52d85da83',
            'Authorization': params.token,
        },
    })
}

export const getInfoPayment = (params) => {
    return api.get(`api/info-payments?merchant_code=${params.merchant_code}&trip_id=${params.trip_id}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '19996a4883ea9acce9c91ec52d85da83',
            'Authorization': params.token,
        },
    })
}

export const getPayment = (params) => {
    return api.get(`api/payment/vnpay?return_url=http://mybus.vn&${qs.stringify(params)}`, {}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
};

export const updatePayment = (params) => {
    return api.post(`api/update-booking/${params.id_booking}?merchant_code=${params.merchant_code}`, params, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': params.token,
        },
    });
};

export const bookingCarrental = (params) => {
    return api.post(`api/cr/bookings`, params, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': '19996a4883ea9acce9c91ec52d85da83',
            'Authorization': params.token,
        },
    })
}



