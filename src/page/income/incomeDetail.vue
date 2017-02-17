<!-- 收入详情 -->
<template>
    <div class="incomeDetail">
        <x-header title="交易详情" :left-options="{showBack: true, backText: ''}"></x-header>
        <form-preview :header-label="付款金额" header-value="¥2400.00" :body-items="list" :footer-buttons="buttons1"></form-preview>

    </div>
</template>

<script>
    import { XHeader, FormPreview  } from 'vux'
    export default{
        name: 'incomeDetail',
        components: {
            XHeader, FormPreview
        },
        data (){
            return {
                list: [{
                    label: '商品',
                    value: '电动打蛋机'
                }, {
                    label: '标题标题',
                    value: '名字名字名字'
                }, {
                    label: '标题标题',
                    value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
                }],
                buttons1: [{
                    style: 'default',
                    text: '辅助操作'
                }, {
                    style: 'primary',
                    text: '跳转到首页',
                    link: '/'
                }],
            }
        },

    }
</script>