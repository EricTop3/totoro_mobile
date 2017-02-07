<!-- 创建店铺 -->
<template>
    <div class="createStore">
        <group gutter="0">
            <x-input v-model="form.storeName" title="店铺名称" name="" placeholder="请填写您的店铺名"></x-input>
        </group>
        <div class="tip">
            创建店铺后可以在店铺信息中修改店铺名称
        </div>
        <group>
            <x-address v-model="form.address" title="选择地址" placeholder="请选择" :list="addressData"></x-address>
            <x-input v-model="form.detail" title="详细地址" name="" placeholder="街道门牌信息"></x-input>
        </group>
        <box gap="30px 10px">
            <x-button v-show="complete" type="primary" @click.native="handleCreate">创建</x-button>
            <x-button v-show="!complete" disabled>创建</x-button>
        </box>
    </div>
</template>

<script>
    import {ChinaAddressData, Box, Checklist, XInput, XButton, Group, XAddress} from 'vux'
    export default {
        name: 'createStore',
        components: {
            Box, Checklist, XInput, XButton, Group, XAddress
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

<style scoped>
    .tip {
        font-size: 14px;
        color: #333;
        text-align: center;
        margin-top: 10px;
        margin-bottom: -10px;
    }
</style>