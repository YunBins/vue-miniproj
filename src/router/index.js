import Vue from 'vue';
import VueRouter from 'vue-router';

import route from './route';
import pageNotFound from '@/components/PageNotFound.vue';

Vue.use(VueRouter);

const base_router = [{ path: '*', component: pageNotFound }];

export default new VueRouter({
    mode: 'history',
    routes: [...route, ...base_router],
});
