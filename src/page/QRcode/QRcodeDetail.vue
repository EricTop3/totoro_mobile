<!-- 台卡详情 -->
<template>
    <div class="QRcodeDetail">
        <x-header title="台卡" :left-options="{showBack: true, backText: ''}"></x-header>
        <main>
            <div class="content">
                <cell :title="'台卡名称:'+TKname" class="content_title" @click.native="showDialog = true">
                    <i slot="child" class="iconfont icon-modify" style="color: #333;"></i>
                </cell>
                <img src="" alt="" width="160" height="160" style="margin: 20px 0 15px;">
                <div>
                    <i class="iconfont icon-weixin"></i>
                    <i class="iconfont icon-zhifubao"></i>
                </div>
                <p class="tip">扫一扫，即可付款！</p>
            </div>
            <div class="btn_group">
                <x-button type="primary" class="submit" @click.native="handlerSave">保存到相册</x-button>
                <x-button type="primary" plain class="submit" @click.native="handlerFilter">查看流水</x-button>
            </div>
        </main>
        <m-dialog v-model="showDialog" title="修改台卡名称" placeholder="请输入台卡名称"  @save="changeTKname"></m-dialog>
    </div>
</template>

<script>
    import MDialog from 'components/MDialog/MDialog.vue'
    import { XHeader, XButton, Cell } from 'vux'
    export default {
        name: 'QRcodeDetail',
        components: {
            XHeader, XButton, Cell,MDialog
        },
        data (){
            return {
                TKname: '7-ELEVEN黄村店台卡',
                showDialog: false
            }
        },
        methods: {
            // 修改台卡名称
            changeTKname (val){
                // TODO修改台卡名称
                console.log(val);
                this.TKname = val;
            },
            // 查看当前台卡流水
            handlerFilter (){

            },
            // 保存二维码
            handlerSave (){

            }
        },
        created (){
            // 根据台卡id获取台卡信息
            var TKId = this.utils.getUrlParam('TKId');
            if(TKId){

            }
        }
    }
</script>

<style lang="less">
    .QRcodeDetail main{
        margin: 20px;
        text-align: center;
    }
    .QRcodeDetail .content{
        background-color: #fff;
        border-radius: 6px;
        font-size: 15px;
        border:  solid 1px #e2e2e7;
    }
    .QRcodeDetail .icon-weixin{
        color: #68c000;
        font-size: 24px;
        margin-right: 10px;
    }
    .QRcodeDetail .icon-zhifubao{
        font-size: 24px;
    }
    .QRcodeDetail .tip{
        font-size: 12px;
        color: @text-color;
        padding-bottom: 15px;
    }
    .QRcodeDetail .btn_group{
        margin: 30px 0;
    }
    .QRcodeDetail .content_title{
        border-bottom: solid 1px #e2e2e7;
    }
</style>
