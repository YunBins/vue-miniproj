const store = {
    namespaced: true,
    state() {
        return {
            user_info: {},
        };
    },
    mutations: {
        login(state, payload) {
            state.user_info = payload;
        },
        logout(state, payload) {
            state.user_info = payload;
        },
        loginfail(state, payload) {
            state.user_info = payload;
        },
    },
    actions: {
        login(context, payload) {
            context.commit('login', payload);
        },
        logout(context, payload) {
            context.commit('logout', payload);
        },
        loginfail(context, payload) {
            context.commit('loginfail', payload);
        },
    },
    getters: {
        getUserInfo(state) {
            return state.user_info;
        },
    },
};

export default store;
