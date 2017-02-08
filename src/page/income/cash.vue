<!-- 提现 -->
<template>
    <div class="cash">
        <div style="padding:20px 15px;">
            <button-tab v-model="form.type">
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
            <x-input title="卡号" placeholder="仅支持提现至储蓄卡"></x-input>
            <x-input v-if="form.type == 0" title="开户人姓名" placeholder="与银行开户姓名一致"></x-input>
            <x-input v-else title="公司名称" placeholder="与银行开户名称一致"></x-input>
        </group>

        <group gutter="10px" labelAlign="left" label-width="90px" label-margin-right="10px">
            <x-input title="验证码" placeholder="输入验证码">
                <x-button slot="right" mini plain type="primary">发送验证码</x-button>
            </x-input>
        </group>
        <p class="tip">验证码以短信方式发送至手机18825144569,请注意查收</p>
        <div style="margin: 30px 15px;">
            <x-button type="primary">提现</x-button>
        </div>
    </div>
</template>

<script>
    import { PopupPicker, Cell, XInput, XButton, Group, ButtonTab, ButtonTabItem } from 'vux'
    export default {
        name: 'cash',
        components: {
            PopupPicker, Cell, Group, XInput, XButton, ButtonTab, ButtonTabItem
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
                }
            }
        }
    }
</script>

<style>
    .cash .tip{
        font-size: 12px;
        color: #999;
        padding:5px 15px;
    }
    .cash .vux-popup-picker-select span.vux-popup-picker-value + span{
        color: #999;
        margin-left: -15px;
    }
</style>