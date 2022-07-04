import axios from 'axios';

async function getToken() {
    const url = `https://login.salesforce.com/services/oauth2/token?grant_type=password
    &client_id=${import.meta.env.VITE_ACCESS_ID}
    &client_secret=${import.meta.env.VITE_ACCESS_SECRET}
    &username=${import.meta.env.VITE_USERNAME}
    &password=${import.meta.env.VITE_PASSWORD}
    `


    const response = await axios.get(url, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });

    if (response.status === 200) {
        return response;
    }
}

export { getToken };