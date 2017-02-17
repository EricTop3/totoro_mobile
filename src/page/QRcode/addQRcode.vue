<!-- 添加台卡 -->
<template>
    <div class="addQRcode">
        <x-header title="添加台卡" :left-options="{showBack: true }"></x-header>
        <group>
            <cell title="添加台卡" is-link>
                <i slot="icon" class="iconfont icon-tianjia"></i>
            </cell>
            <cell title="扫一扫绑定台卡" is-link>
                <i slot="icon" class="iconfont icon-bangding"></i>
            </cell>
        </group>
    </div>
</template>

<script>
    import { XHeader, Group, Cell } from 'vux'
    export default {
        name: 'addQRcode',
        components: {
            XHeader, Group, Cell
        },
        data () {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="less">
   .addQRcode .iconfont{font-size: 18px;margin-right: 10px;}
</style>