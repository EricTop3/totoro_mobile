<!-- 页面入口 -->
<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';

    body {
        background-color: @background-color;
    }
    a {
        color: @primary-color;
    }
</style>
