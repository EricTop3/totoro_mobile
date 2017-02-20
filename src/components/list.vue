<!-- 收入明细列表 -->
<template>
    <div class="list">
        <x-header title="收入明细" :left-options="{showBack: true, backText:''}">
            <router-link slot="right" to="/filter">筛选</router-link>
        </x-header>
        <div class="group-title">总收入:￥20.00</div>
        <template v-for="item in tradList">
            <group gutter="10px">
                <!-- 收款 -->
                <cell v-if="item.tradType == 0" title="收款项目" inline-desc="2017.01.28 台卡1">
                    <span class="cell_ft">￥{{item.tradAmount}}</span>
                    <i slot="icon" class="iconfont icon-shoukuan2"></i>
                </cell>

                <!-- 退款 -->
                <cell v-if="item.tradType == 1" title="退款项目" inline-desc="2017.01.28 台卡1">
                    <div v-if="item.tradStatus == 0" class="InProcess">
                        <span class="cell_ft">-￥{{item.tradAmount}}</span>
                        <p>正在退款</p>
                    </div>
                    <div v-if="item.tradStatus == 1" class="success">
                        <span class="cell_ft">-￥{{item.tradAmount}}</span>
                        <p>退款成功</p>
                    </div>
                    <div v-if="item.tradStatus == -1" class="failed">
                        <span class="cell_ft">-￥{{item.tradAmount}}</span>
                        <p>退款失败</p>
                    </div>
                    <i slot="icon" class="iconfont icon-tuikuan"></i>
                </cell>

                <!-- 提现 -->
                <cell v-if="item.tradType == 2" title="提现项目" inline-desc="2017.01.28 台卡1">
                    <div v-if="item.tradStatus == 0" class="InProcess">
                        <span class="cell_ft">-￥{{item.tradAmount}}</span>
                        <p>正在提现</p>
                    </div>
                    <div v-if="item.tradStatus == 1" class="success">
                        <span class="cell_ft">-￥{{item.tradAmount}}</span>
                        <p>提现成功</p>
                    </div>
                    <div v-if="item.tradStatus == -1" class="failed">
                        <span class="cell_ft">-￥{{item.tradAmount}}</span>
                        <p>提现失败</p>
                    </div>
                    <i slot="icon" class="iconfont icon-tixian"></i>
                </cell>
            </group>
        </template>
    </div>
</template>

<script>
    import store from 'src/store.js'
    import { XHeader, Group, Cell, Flexbox, FlexboxItem } from 'vux'
    export default {
        name: 'list',
        components: {
            XHeader, Group, Cell, Flexbox, FlexboxItem
        },
        data (){
            return {
                tradList: []
            }
        },
        mounted (){
            this.tradList = store.state.tradList;
        }
    }
</script>

<style lang="less">
    .list .group-title {
        font-size: 15px;
        padding: 10px 15px 0;
        line-height: 20px;
        text-align: center;
    }
    .list .iconfont{
        font-size: 40px;
        margin-right: 15px;
    }
    .list .weui_cell_ft{
        color: #333;
    }
    .icon-shoukuan2{
        color: #f04e7c;
    }
    .icon-tuikuan{
        color: #77bb00;
    }
    .list .InProcess{
        color:#333;
    }
    .list .success{
        color: @primary-color;
    }
    .list .failed{
        color: #e90000;
    }
</style>