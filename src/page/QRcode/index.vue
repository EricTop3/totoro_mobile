<!-- 台卡(二维码) -->
<template>
    <div class="QRcode">
        <x-header title="台卡" :left-options="{showBack: true}">
            <router-link slot="right" to="/addQRcode">
                添加
            </router-link>
        </x-header>
        <group>
            <cell title="7-ELEVEN黄村店台卡" inline-desc="今日收入 ￥20.00" is-link>
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