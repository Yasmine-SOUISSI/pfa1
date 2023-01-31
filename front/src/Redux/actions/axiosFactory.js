import axios from 'axios';

export const METHOD_GET = 'GET';
export const METHOD_POST = 'POST';
export const METHOD_PUT = 'PUT';
export const METHOD_DELETE = 'DELETE';

export default async function axiosFactory({
    url,
    method,
    data,
}) {
    const header = getHeader(url, method, data);
    let response = {};
    try {
        switch (method) {
            case METHOD_GET:
                response = await axios.get(url, header);
                break;
            case METHOD_POST:
                response = await axios.post(url, data, header);
                break;
            case METHOD_PUT:
                response = await axios.put(url, data, header);
                break;
            case METHOD_DELETE:
                response = await axios.delete(url, header);
                break;
            default:
                new Error('Method not supported');
        }
    } catch (error) {
        if (error.response.status === 401) {
            window.location.href = '/';
            sessionStorage.removeItem('token');
        }
        if (error.response) {
            response.error = error.response.data;
            response.status = error.response.status;
        } else if (error.request) {
            response.error = error.request;
        } else {
            response.error = 'Network Error';
            response.status = 307;
        }
    }
    return {
        data: response.data,
        status: response.status,
        error: response.error
    };

}

function getHeader(url, method, data) {
    const header = {
        'Content-Type': 'application/json'
    };
    if (!url.includes('/login')) {
        header.authorization = localStorage.getItem('token');
    }
    if (method === METHOD_DELETE) {
        return { headers: header, data };
    }
    return { headers: header };
}
