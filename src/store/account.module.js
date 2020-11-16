import env from '../environment'
import { userService } from '../service/user.service'
import { router } from '../router'


const user = JSON.parse(localStorage.getItem('user'));
console.log('User >>> ' + user)
const state = user ? { status: { loggedIn: true }, user } : { status: {}, user: null };

const actions = {
    login({ dispatch, commit }, loginData) {
        commit('loginRequest');
        console.log('I am here : ' + loginData.username + '    ' + loginData.password)
        // console.log(loginData)
        console.log(env)
        userService.login(loginData.username, loginData.password)
            .then(
                user => {
                    commit('loginSuccess', user);
                    router.push('/landing-page');
                },
                error => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    }
};

const mutations = {
    loginRequest(state, user) {
        console.log('login request')
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state, user) {
        console.log('login success')
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state) {
        console.log('login failure')
        state.status = {};
        state.user = null;
    },
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};