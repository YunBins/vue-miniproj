<template>
    <div>
        <h3>Login</h3>
        <form @submit="doLogin">
            id: <input type="text" v-model="id" required /><br />
            pwd: <input type="password" v-model="pwd" required /><br />
            <button type="submit">로그인</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

const checkUser = async (userid, password) => {
    const res = await axios.get('http://localhost:3003/login', {
        params: {
            username: userid,
            password: password,
        },
        withCredentials: true,
    });

    const data = res.data[0];
    if (data.user_id === userid && data.password === password) {
        return true;
    } else {
        return false;
    }
};

export default {
    data() {
        return { id: '', pwd: '' };
    },
    computed: {
        ...mapGetters({ user_info: 'user/getUserInfo' }),
    },
    methods: {
        doLogin(e) {
            e.preventDefault();
            console.log(this.id, this.pwd);
            checkUser(this.id, this.pwd).then((result) => {
                if (result) {
                    alert('로그인에 성공하였습니다.');
                    this.login({ user_id: this.id, check: true });
                    console.log(this.user_info);
                    this.$router.push('/');
                } else {
                    alert('아이디 또는 패스워드가 틀렸습니다.');
                    this.loginfail({ user_id: null, check: false });
                }
            });
        },
        ...mapActions({ login: 'user/login', logout: 'user/logout', loginfail: 'user/loginfail' }),
    },
};
</script>

<style scoped></style>
