<!-- 创建店铺 -->
<template>
    <div class="createStore">
        <x-header title="创建店铺" :left-options="{showBack: true, backText: '' }"></x-header>

        <group gutter="20px">
            <cell title="店铺logo" is-link>
                <input slot="child" type="file" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg" class="uploader_img">
                <img  src="static/img/bg_01.png" alt="" width="40" height="40" style="vertical-align: middle;">
            </cell>
            <x-input v-model="form.storeName" title="店铺名称" name="" placeholder="请填写您的店铺名"></x-input>
        </group>
        <div class="tip">
            创建店铺后可以在店铺信息中修改店铺名称
        </div>
        <group gutter="0">
            <x-address v-model="form.address" title="选择地址" placeholder="点击选择省市区" :list="addressData"></x-address>
            <x-input v-model="form.detail" title="详细地址" name="" placeholder="街道门牌信息"></x-input>
        </group>
        <box gap="60px 10px">
            <x-button v-show="complete" type="primary" @click.native="handleCreate">创建</x-button>
            <x-button v-show="!complete" disabled>创建</x-button>
        </box>
    </div>
</template>

<script>
    import {ChinaAddressData, Box, Cell, Checklist, XInput, XButton, XHeader, Group, XAddress} from 'vux'
    export default {
        name: 'createStore',
        components: {
            Box, Checklist, Cell, XInput, XHeader, XButton, Group, XAddress
        },
        data () {
            return {
                addressData: ChinaAddressData,
                form: {
                    storeName: '',
                    address: [],
                    detail: '',
                },
                complete: false
            }
        },
        watch: {
            form: {
                handler: function () {
                    this.complete = !!(this.form.storeName && this.form.address.length == 3 && this.form.detail)
                },
                deep: true
            }
        },
        methods: {
            // 创建
            handleCreate () {
                const _this = this;
                this.$vux.toast.show({
                    text:'帐号创建成功,即将跳转到登录页面',
                    time: '1000',
                    onHide (){
                        _this.$router.push('/signIn')
                    }
                })

            }
        }
    }
</script>

<style  lang="less">
    .createStore .tip {
        font-size: 13px;
        color: @text-color;
        padding-left: 15px;
        margin-top: 30px;
    }
    .createStore .weui_cell{position: relative;}
    .createStore .uploader_img{
        width: 100%;
        position:absolute;left:0;top:0;right:0;bottom:0;opacity: 0;
    }

    .createStore .weui_label{ width: auto;}
    .createStore .vux-popup-picker-select{
        text-align: left!important;
        padding-left: 15px;
    }
    .createStore .vux-popup-picker-select span:not(.vux-popup-picker-value){
        margin-left: -15px;
        color: @text-color;
    }

</style>