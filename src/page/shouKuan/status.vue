<!-- 收款状态 -->
<template>
    <div class="SK_status">
        <x-header title="完成支付" :left-options="{showBack: true, backText: ''}"></x-header>
        <main>
            <div class="content">
                <i class="weui_icon_success weui_icon_msg"></i>
                <p class="price">￥20.00</p>
                <p class="text">完成收款</p>
            </div>
            <x-button type="primary" class="btn" @click.native="handlerClick">继续收银</x-button>

        </main>
    </div>
</template>

<script>
    import { XButton, Icon, XHeader  } from 'vux'
    export default{
        name: 'SK_status',
        components: {
            XButton, Icon, XHeader
        },
        data (){
            return {

            }
        },
        methods: {
            handlerClick () {
                this.$router.push('/shouKuan')
            }
        }
    }
</script>

<style scoped lang="less">
    .SK_status{
    }
    .weui_icon_success:before{
        color: @primary-color;
        font-size: 88px;
    }
    main{
        margin: 20px;
        text-align: center;
    }
    .content{
        background-color: #fff;
        padding: 36px;

    }
    .content .price{
        font-size: 15px;
        line-height: 30px;
        color: @primary-color;
    }
    .content .text{
        font-size: 20px;
    }
    .btn{
        margin: 60px 0;
    }
</style>
