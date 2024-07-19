<template>
    <div>
        <h3 v-if="user_info.check">MyPage</h3>
        <h3 v-if="!user_info.check">로그인필요</h3>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({ user_info: 'user/getUserInfo' }),
    },
};
</script>

<style></style>
