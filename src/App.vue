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
    @import '//at.alicdn.com/t/font_bu0si0eqzykqpvi.css';

    body {
        background-color: @background-color;
    }
    a {
        color: @primary-color;
    }
    div,p,a,span,ul,li,img{box-sizing: border-box;}

    .iconfont{
        color: @primary-color;
    }

    button.weui_btn_primary{
        background-color: @primary-color;
    }
    button.weui_btn_plain_primary{
        color: @primary-color;
        border: 1px solid @primary-color;
    }
    button.weui_btn_primary:not(.weui_btn_disabled):active{
        background-color: @primary-color;
    }


</style>
