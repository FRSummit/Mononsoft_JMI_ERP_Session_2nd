import env from '../environment'
// import { authHeader } from '../router/auth-header'

export const userService = {
    login,
    logout
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ username, password })
    };

    console.log('I am here in user.service : ' + username + '    ' + password)

    // return fetch(`${env.apiBaseUrl}/users`, requestOptions)
    return fetch(`${env.apiBaseUrl}/api/auth/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            console.log('user.service => login()')
            console.log('user : ' + JSON.stringify(user))
            console.log(user)
            // login successful if there's a jwt token in the response
            if (user.data.access_token) {
                console.log('inside token')
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                // localStorage.setItem('access_token', user.accessToken);
                // localStorage.setItem('id_token', user.idToken);
                console.log(new Date())
                console.log(new Date().getTime())
                console.log(user)
            }
            console.log('done user service')

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    const requestOptions = {
        method: 'GET',
        body: null
    };
    fetch(`${env.apiBaseUrl}/api/logout`, requestOptions);
    localStorage.removeItem('user');
    console.log('logged out')
}

function handleResponse(response) {
    return response.text().then(text => {
        console.log('user.service => handleResponse()')
        console.log('handle : ' + text)
        const data = text && JSON.parse(text);
        console.log('data : ')
        console.log(data)
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}