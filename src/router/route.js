import MiddleFrontCompo from '@/components/MiddleFrontCompo.vue';
import PageMainCompo from '@/components/PageMainCompo.vue';
import PageMyPageCompo from '@/components/PageMyPageCompo.vue';
import PageLoginCompo from '@/components/PageLoginCompo.vue';
import PageLogoutCompo from '@/components/PageLogoutCompo.vue';
import PageMemoCompo from '@/components/memo/PageMemoCompo.vue';

export default [
    {
        path: '/',
        component: MiddleFrontCompo,
        children: [
            {
                path: 'main',
                component: PageMainCompo,
                alias: ['/'],
            },
            {
                path: '/mypage',
                component: PageMyPageCompo,
            },
            {
                path: '/login',
                component: PageLoginCompo,
            },
            {
                path: '/logout',
                component: PageLogoutCompo,
            },
            {
                path: '/memo',
                component: PageMemoCompo,
                children: [
                    {
                        path: '',
                        component: () => import('@/components/memo/MemoListCompo.vue'),
                    },
                    {
                        path: '/memo/input/:idx?',
                        component: () => import('@/components/memo/MemoInputCompo.vue'),
                    },
                ],
            },
        ],
    },
];
