<template>
    <div>
        <x-dialog v-model="showDialog" class="m-dialog">
            <h4 style="font-size: 23px;color: #1a1e36;text-align: left;">添加台卡</h4>
            <p style="padding: 15px 0;margin: 20px 0;">
                <input v-model="value" type="text" class="weui_input" :placeholder="placeholder">
            </p>
            <flexbox :gutter="0" style="text-align: center;" justify="space-between">
                <flexbox-item>
                    <div class="m-dialog-btn plain" @click="handlerCancel">取消</div>
                </flexbox-item>
                <flexbox-item style="text-align: right;">
                    <div class="m-dialog-btn" @click="handlerSave">保存</div>
                </flexbox-item>
            </flexbox>
        </x-dialog>
    </div>
</template>

<script>
    import { XDialog, Flexbox, FlexboxItem } from 'vux'
    export default{
        name: 'MDialog',
        data(){
            return{
                showDialog: true,
                title: '测试台卡',
                placeholder:'请输入台卡名称',
                cancelText: '取消',
                OKtext: '保存',
                value: ''
            }
        },
        components:{
            XDialog, Flexbox, FlexboxItem
        },
        watch: {
            value (val){

            }
        },
        methods: {
            handlerSave (){

            },
            handlerCancel (){

            }
        }
    }
</script>

<style lang="less">

    .m-dialog .weui_input{
        line-height: 30px;
        padding: 4px 0;
        border-bottom: dashed 1px @text-color;
    }
    .m-dialog .weui_dialog{
        width: 280px;
        padding: 20px;
        border-radius: 6px;
    }
    .m-dialog .m-dialog-btn{
        width: 107px;
        margin: 0 auto;
        text-align: center;
        line-height: 33px;
        border-radius: 4px;
        background-color: @primary-color;
        color: #fff;
    }
    .m-dialog .m-dialog-btn.plain{
        background-color: #edeef4;
        color: #9499b6;
    }
</style>