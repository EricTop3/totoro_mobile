<template>
    <div>
        <x-dialog v-model="mValue" class="m-dialog">
            <h4 style="font-size: 23px;color: #1a1e36;text-align: left;">{{mTitle}}</h4>
            <p style="padding: 15px 0;margin: 20px 0;">
                <input v-model="inputVal" type="text" class="weui_input" :placeholder="mPlaceholder">
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
        props: ['value','title','placeholder'],
        data(){
            return{
                mValue: this.value,
                mTitle: this.title || '标题',
                mPlaceholder: this.placeholder || '请输入',
                inputVal: ''
            }
        },
        watch: {
            // 来自于组件v-model
            value (val){
                this.mValue = val;
            },
            mValue (val){
                this.$emit('input',val);
            },
            inputVal (val){
                this.$emit('change',val)
            }
        },
        components:{
            XDialog, Flexbox, FlexboxItem
        },
        methods: {
            handlerSave (){
                this.mValue = false;
                this.$emit('save',this.inputVal);
            },
            handlerCancel (){
                this.mValue = false;
                this.$emit('cancel');
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
