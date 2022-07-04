import axios from 'axios';

axios.defaults.baseURL = "https://ahkbrasil.my.salesforce.com/services";

async function getToken() {
    const url = `/oauth2/token?grant_type=password
    &client_id=${import.meta.env.VITE_ACCESS_ID}
    &client_secret=${import.meta.env.VITE_ACCESS_SECRET}
    &username=${import.meta.env.VITE_USERNAME}
    &password=${import.meta.env.VITE_PASSWORD}
    `

    const response = await axios.post(url, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    return response
}

export { getToken };