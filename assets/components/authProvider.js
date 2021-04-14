import { AUTH_LOGIN } from 'react-admin';
import { Accordion } from '@material-ui/core';

export default (type, params) => {

    console.log(type, params);
    if (type === AUTH_LOGIN) {
        alert('kama')
        const { username, password } = params;
        const request = new Request('https://localhost:8001/authenticate_token', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
            });
    }
    return Promise.resolve();
}