<!-- 收入 -->
<template>
    <div class="income">
        <header>
            <div class="cash">
                <p>￥<span>20.00</span></p>
                可提现金额
            </div>
            <p class="tip">资金由中国人寿保险保障</p>
        </header>
        <flexbox :gutter="0">
            <flexbox-item>
                <x-button style="border-right: 1px solid rgba(79, 79, 79, 0.2);border-radius: 0;">提现</x-button>
            </flexbox-item>
            <flexbox-item>
                <x-button>收支明细</x-button>
            </flexbox-item>
        </flexbox>
        <group :gutter="'10px'">
            <cell title="今日收入" :value="100.00" is-link></cell>
            <cell title="近七天收入" :value="100.00" is-link></cell>
            <cell title="近30天收入" :value="100.00" is-link></cell>
        </group>
        <!-- 图表 -->
    </div>
</template>

<script>
    import { Cell, Group, XButton, Flexbox, FlexboxItem } from 'vux'
    export default {
        name: 'income',
        components: {
            Cell, Group, XButton, Flexbox, FlexboxItem
        },
        data () {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .income{background-color: #eeeeee;}
    header{
        position: relative;
        background-color: #000;
        color: #fff;
        padding: 40px 20px;
        text-align: center;
    }
    header .cash{
        font-size: 15px;
    }
    header .cash p span{
        font-size: 30px;
    }
    header .tip{
        left: 0;
        right: 0;
        position: absolute;
        bottom: 8px;
        font-size: 12px;
        color: #cdcdcd;
    }
    .weui_btn:after{
        border-radius: 0;
        border: none;
    }

</style>