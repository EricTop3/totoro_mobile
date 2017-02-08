<!-- 收入明细 -->
<template>
    <div class="incomeDetail">
        <x-header title="收入明细" :left-options="{showBack: true, backText:'返回'}"><router-link slot="right" to="/filter">筛选</router-link></x-header>
        <flexbox class="group-title">
            <flexbox-item>
                <div>今天</div>
            </flexbox-item>
            <flexbox-item>
                <div style="text-align: right;">收入:￥1245.50</div>
            </flexbox-item>
        </flexbox>
        <group gutter="0">
            <cell title="收款项目" value="￥100.00" inline-desc="13:00">
                <img slot="icon" src="" alt="icon" width="30" height="30" style="margin-right: 15px;">
            </cell>
            <cell title="收款项目" value="￥100.00" inline-desc="13:00">
                <img slot="icon" src="" alt="icon" width="30" height="30" style="margin-right: 15px;">
            </cell>
            <cell title="收款项目" value="￥100.00" inline-desc="13:00">
                <img slot="icon" src="" alt="icon" width="30" height="30" style="margin-right: 15px;">
            </cell>
        </group>
    </div>
</template>

<script>
    import { XHeader, Group, Cell, Flexbox, FlexboxItem } from 'vux'
    export default {
        name: 'incomeDetail',
        components: {
            XHeader, Group, Cell, Flexbox, FlexboxItem
        },
        data (){
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="less">
    .group-title{
        width: auto;
        font-size: 14px;
        padding: 0 15px;
        line-height: 30px;
    }
</style>