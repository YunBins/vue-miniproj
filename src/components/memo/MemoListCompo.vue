<template>
    <div>
        <h3>리스트</h3>
        <section>
            <table border="1">
                <thead>
                    <th style="width: 50px">번호</th>
                    <th>제목</th>
                    <th style="width: 100px">등록일</th>
                </thead>
                <tbody>
                    <tr v-for="(memo, idx) in memos" :key="idx">
                        <td>{{ memo.id }}</td>
                        <td>
                            <router-link :to="'memo/input/' + memo.id">{{ memo.title }}&nbsp;</router-link>
                            <!-- 제목 없을 경우 대비해서 공백 넣어 줌 -> 공백 클릭해도 이동할 수 있음 -->
                        </td>
                        <td>{{ memo.createdAt.substring(0, 10) }}</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" @click="$router.push('/memo/input')">등록</button>
            <div>검색: <input type="text" @input="searchMemo" /></div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';

const loadMemo = async () => {
    const res = await axios.get('http://localhost:3003/memos', {
        withCredentials: true,
    });

    return res.data;
};

const searchMemo = async (keyword) => {
    const res = await axios.get('http://localhost:3003/memos', {
        params: { keyword: keyword },
        withCredentials: true,
    });

    return res.data;
};

export default {
    data() {
        return {
            memos: [],
        };
    },
    mounted: function () {
        loadMemo().then((result) => (this.memos = result));
    },
    methods: {
        searchMemo: function (e) {
            const keyword = e.currentTarget.value;
            searchMemo(keyword).then((result) => (this.memos = result));
        },
    },
};
</script>

<style scoped></style>
