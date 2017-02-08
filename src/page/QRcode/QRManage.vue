<!-- 台卡 -->
<template>
    <div class="QRManage">
        <x-header title="台卡管理" :left-options="{showBack: true}">
            <router-link slot="right" to="/addQRcode">
                添加
            </router-link>
        </x-header>
    </div>
</template>

<script>
    import { XHeader } from 'vux'
    export default {
        name: 'QRMange',
        components: {
            XHeader
        },
        data () {
            return {

            }
        }
    }
</script>