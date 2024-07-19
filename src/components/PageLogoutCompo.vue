<template>
    <div>
        <h3>로그아웃</h3>
        <button type="button" @click="doLogout">로그아웃</button>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

const checkLogout = async (userid, password) => {
    // 할 때는 서비스단 따로 만들어서 하기
    const res = await axios.get('http://localhost:3003/logout', {
        params: { username: userid, password: password },
        withCredentials: true,
    });

    const data = res.data;
    if (data.code === '200') {
        return true;
    } else {
        return false;
    }
};

export default {
    methods: {
        doLogout() {
            checkLogout().then((result) => {
                if (result) {
                    alert('로그아웃 되었습니다.');
                    this.logout({ user_id: null, check: false });
                    this.$router.push('/');
                }
            });
        },
        ...mapActions({ logout: 'user/logout' }),
    },
};
</script>

<style scoped></style>
