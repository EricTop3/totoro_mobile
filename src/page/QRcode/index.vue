<!-- 台卡(二维码) -->
<template>
    <div class="QRcode">
        <x-header title="台卡" :left-options="{showBack: true}">
            <router-link slot="right" to="/QRManage">
                台卡管理
            </router-link>
        </x-header>
    </div>
</template>

<script>
    import { XHeader, XButton } from 'vux'

    export default {
        name: 'QRcode',
        components: {
            XHeader, XButton
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

</style>