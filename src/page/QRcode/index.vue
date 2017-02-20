<!-- 台卡(二维码) -->
<template>
    <div class="QRcode">
        <x-header title="台卡" :left-options="{showBack: true}">
            <router-link slot="right" to="/addQRcode">
                添加
            </router-link>
        </x-header>
        <group v-for="item in TKList" gutter="15px">
            <cell :link="'/QRcodeDetail?TKId='+item.TKId" :title="item.TKname" :inline-desc="'今日收入 ￥' + item.amount" is-link>
                <i class="iconfont icon-infenicon15"></i>
            </cell>
        </group>

    </div>
</template>

<script>
    import { XHeader, XButton, Group, Cell } from 'vux'

    export default {
        name: 'QRcode',
        components: {
            XHeader, XButton, Group, Cell
        },
        data() {
          return {
                TKList: [
                    {
                        TKId: 'id1234',
                        TKname: '7-ELEVEN黄村店台卡',
                        amount: '20.00'
                    },
                    {
                        TKId: 'id1234',
                        TKname: '7-ELEVEN黄村店台卡',
                        amount: '20.00'
                    },
                    {
                        TKId: 'id1234',
                        TKname: '7-ELEVEN黄村店台卡',
                        amount: '20.00'
                    }
                ]
          }
        },
        methods: {

        }
    }
</script>

<style lang="less">
    .icon-infenicon15{
        font-size: 24px;
        vertical-align: middle;
    }
</style>
