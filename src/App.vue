<template>
    <div style="width: 1024px; margin: 0 auto; border: 1px solid navy">
        <header-compo></header-compo>
        <middle-compo></middle-compo>
        <footer-compo></footer-compo>
    </div>
</template>

<script>
import FooterCompo from './components/FooterCompo.vue';
import HeaderCompo from './components/HeaderCompo.vue';
import MiddleCompo from './components/MiddleCompo.vue';

export default {
    name: 'App',
    components: {
        HeaderCompo,
        FooterCompo,
        MiddleCompo,
    },
};
</script>

<style>
@import 'assets/base.css';
div {
    color: #2a2b2c;
}
</style>
