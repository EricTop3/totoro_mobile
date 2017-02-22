<!-- 页面入口 -->
<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    // TODO:进入页面之前，进行权限验证
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '//at.alicdn.com/t/font_awaa3h6qaeylow29.css';

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

    input::-webkit-input-placeholder{
        color: @text-color;
    }
    .vux-header{
        border-bottom: solid 1px #dee1ed;
    }
    .vux-header-title{
        font-size: 16px;
    }
    .vux-header-right{
        font-size: 15px;
    }


</style>
