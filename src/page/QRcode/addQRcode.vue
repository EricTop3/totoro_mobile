<!-- 添加台卡 -->
<template>
    <div class="addQRcode">
        <x-header title="添加台卡" :left-options="{showBack: true }"></x-header>
        <group>
            <cell title="添加台卡" is-link @click.native="showDialog = true">
                <i slot="icon" class="iconfont icon-tianjia"></i>
            </cell>
            <cell title="扫一扫绑定台卡" is-link>
                <i slot="icon" class="iconfont icon-bangding"></i>
            </cell>
        </group>
        <m-dialog v-model="showDialog" title="台卡" placeholder="请输入台卡名称"  @save="addTK"></m-dialog>

    </div>
</template>

<script>
    import MDialog from 'components/MDialog/MDialog.vue'

    import { XHeader, Group, Cell } from 'vux'
    export default {
        name: 'addQRcode',
        components: {
            XHeader, Group, Cell,MDialog
        },
        data () {
            return {
                showDialog: false
            }
        },
        methods: {
            // 添加台卡
            addTK(val){
                console.log('台卡名称:'+val);
            }
        }
    }
</script>

<style lang="less">
   .addQRcode .iconfont{font-size: 18px;margin-right: 10px;}
</style>