<!-- 提现 -->
<template>
    <div class="cash">
        <x-header title="提现" :left-options="{showBack: true, backText: '' }"></x-header>

        <div style="padding:20px 15px;">
            <button-tab v-model="form.type" :height="40">
                <button-tab-item selected>
                    提现至个人账户
                </button-tab-item>
                <button-tab-item>
                    提现至公司账户
                </button-tab-item>
            </button-tab>
        </div>
        <group gutter="0" labelAlign="left" label-width="90px" label-margin-right="10px">
            <popup-picker v-model="form.bankName" title="开户银行" :data="bankList" value-text-align="left" placeholder="目前已支持14家银行"></popup-picker>
            <x-input v-model="form.cardNo" title="卡号" placeholder="仅支持提现至储蓄卡"></x-input>
            <x-input v-model="form.name" v-if="form.type == 0" title="开户人姓名" placeholder="与银行开户姓名一致"></x-input>
            <x-input v-model="form.name" v-else title="公司名称" placeholder="与银行开户名称一致"></x-input>
        </group>

        <group gutter="10px" labelAlign="left" label-width="90px" label-margin-right="10px">
            <x-input v-model="form.vcode" title="验证码" placeholder="输入验证码">
                <x-button v-show="!showNumber" slot="right" mini  type="primary" @click.native="handlerClickVcode" style="height: 30px;">获取验证码</x-button>
                <x-button v-show="showNumber" slot="right" mini plain type="primary" style="height: 30px;">{{number}}</x-button>
            </x-input>
        </group>
        <p class="tip">验证码以短信方式发送至手机18825144569,请注意查收</p>
        <div style="margin: 30px 15px;">
            <x-button type="primary" @click.native="handlerSubmit">提现</x-button>
        </div>
    </div>
</template>

<script>
    import { PopupPicker, Cell, XInput, XButton, XHeader, Group, ButtonTab, ButtonTabItem } from 'vux'
    export default {
        name: 'cash',
        components: {
            PopupPicker, Cell, Group, XInput, XButton, XHeader, ButtonTab, ButtonTabItem
        },
        data (){
            return {
                bankList:[['中国银行',
                    '华夏银行',
                    '民生银行',
                    '招商银行']],
                form:{
                    // 提现方式，0提现至个人帐号，1提现至公司账户
                    type: 0,
                    bankName: [],
                    cardNo:'',
                    name:'',
                    vcode:''
                },
                number: 60,
                showNumber: false
            }
        },
        methods: {
            // 表单验证
            formCheck (){
                let form = this.form;
                if(!form.bankName.length){
                    this.showInfo('请选择开户银行');
                }else if(!form.cardNo){
                    this.showInfo('请填写银行卡号')
                }else if(!form.name){
                    switch (form.type){
                        case 0:
                            this.showInfo('请填写开户人姓名');
                            break;
                        default:
                            this.showInfo('请填写公司名称');
                            break
                    }
                }else if(!form.vcode){
                    this.showInfo('请填写验证码')
                }else {
                    return true
                }
                return false

            },
            // 获取验证码
            handlerClickVcode () {
                this.showNumber = true;
                let self = this;
                let interval = setInterval(function () {
                    if(self.number > 0){
                        self.number --
                    }else {
                        clearInterval(interval)
                    }
                },1000)
            },
            handlerSubmit (){
                if(this.formCheck()){
                    console.log('提交表单');
                }
            }
        }
    }
</script>

<style  lang="less">
    .cash .tip{
        font-size: 15px;
        color: @text-color;
        padding:5px 15px;
    }
    .cash .vux-popup-picker-select span.vux-popup-picker-value + span{
        color: @text-color;
        margin-left: -15px;
    }
    .cash .vux-button-group > a.vux-button-group-current,.cash .vux-button-group > a.hover,.cash .vux-button-group > a:active{
        border-color: @primary-color;
        background: @primary-color;
    }
    .cash .vux-button-group > a{
        color: @text-color;
    }
    .cash .vux-button-group > a:first-child{
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    .cash .vux-button-group > a:last-child{
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    .cash .weui_btn + .weui_btn{
        margin-top: 0;
        min-width: 93px;
    }
</style>