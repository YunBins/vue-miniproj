import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import UserStore from '@/store/user-store';

const store = new Vuex.Store({
    modules: {
        user: UserStore,
    },
});

export default store;
