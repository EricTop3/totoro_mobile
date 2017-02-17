<!-- 收款二维码 -->
<template>
    <div class="SK_QRcode">
        <x-header title="收款" :left-options="{showBack: true, backText: ''}"><a href="" slot="right">作废</a></x-header>
        <main>
            <div class="content">
                <p style="padding-top: 40px;">应收款金额</p>
                <p>￥<span style="font-size: 25px;color: #007de2;">20.00</span></p>
                <img src="" alt="" width="160" height="160" style="margin: 20px 0 15px;">
                <div>
                    <i class="iconfont icon-weixin"></i>
                    <i class="iconfont icon-zhifubao"></i>
                </div>
                <p class="tip">让顾客扫一扫收款码，向我付款</p>
            </div>
            <x-button type="primary" plain class="submit" @click.native="handlerClick">确定</x-button>
        </main>
    </div>
</template>

<script>
    import { XHeader, XButton } from 'vux'
    export default {
        name: 'SK_QRcode',
        components: {
            XHeader, XButton
        },
        data (){
            return {
                gather: '',
                QRcode: ''
            }
        },
        methods: {
            handlerClick (){
                this.$router.push('/SK_status')
            }
        }
    }
</script>

<style scoped lang="less">
    .SK_QRcode main{
        margin: 20px;
        text-align: center;
    }
    .SK_QRcode .content{
        background-color: #fff;
        border-radius: 6px;
        font-size: 15px;
    }
    .SK_QRcode .icon-weixin{
        color: #68c000;
        font-size: 24px;
        margin-right: 10px;
    }
    .SK_QRcode .icon-zhifubao{
        font-size: 24px;
    }
    .SK_QRcode .tip{
        font-size: 12px;
        color: @text-color;
        padding-bottom: 15px;
    }
    .SK_QRcode .submit{
        margin: 30px 0;
    }
</style>