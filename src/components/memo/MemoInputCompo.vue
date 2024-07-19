<template>
    <div>
        <h3>내용</h3>
        <form>
            id:{{ memo.id }}<br />
            title: <input type="text" v-model="memo.title" /><br />
            content: <textarea v-model="memo.content" /><br />
            createdAt: {{ memo.createdAt }}<br />
            updatedAt: {{ memo.updatedAt }}<br />
            <button type="submit" v-if="!idx" @click="handleInsert">등록</button>
            <button type="button" v-if="idx" @click="handleUpdate">수정</button>
            <button type="button" v-if="idx" @click="handleDelete">삭제</button>
            <button type="button" @click="$router.push('/memo')">리스트</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

const loadMemo = async (idx) => {
    const res = await axios.get(`http://localhost:3003/memos/${idx}`, {
        params: {},
        withCredentials: true,
    });

    return res.data;
};

const insertMemo = async (memo) => {
    const { id, createdAt, updatedAt, ...data } = memo;
    console.log(memo, data);
    const res = await axios.post('http://localhost:3003/memos', data, {
        withCredentials: true,
    });

    return res.data;
};

const deleteMemo = async (idx) => {
    console.log(idx);
    const res = await axios.delete(`http://localhost:3003/memos/${idx}`, {
        withCredentials: true,
    });

    return res.data;
};

const updateMemo = async (memo) => {
    const { id, createdAt, updatedAt, ...data } = memo;
    console.log(memo, data);

    const res = await axios.put(`http://localhost:3003/memos/${memo.id}`, data, {
        withCredentials: true,
    });

    return res.data;
};

export default {
    data() {
        return {
            idx: this.$route.params.idx,
            memo: { id: '', title: '', content: '', createdAt: '', updatedAt: '' },
        };
    },
    mounted: function () {
        console.log(this.idx);
        if (this.idx !== undefined) {
            loadMemo(this.idx).then(
                function (result) {
                    this.memo = result;
                }.bind(this),
            );
        }
    },
    methods: {
        handleInsert: function (e) {
            e.preventDefault();
            insertMemo(this.memo).then(() => {
                alert('등록완료');
                this.$router.push('/memo');
            });
        },
        handleUpdate: function () {
            updateMemo(this.memo).then(() => {
                alert('수정완료');
                this.$router.push('/memo');
            });
        },
        handleDelete: function () {
            deleteMemo(this.idx).then((result) => {
                alert(result.message);
                this.$router.push('/memo');
            });
        },
    },
};
</script>

<style scoped></style>
