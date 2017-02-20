<!-- 筛选 -->
<template>
    <div class="filter">
        <x-header title="筛选" :left-options="{ showBack: true, backText:''}"></x-header>
        <main>
            <group gutter="10px" class="group">
                <flexbox>
                    <flexbox-item>
                        <div class="filter-title">交易时间</div>
                    </flexbox-item>
                    <flexbox-item>
                        <div @click="handlerClear" style="font-size: 12px;color: #999;text-align: right;">清除时间范围</div>
                    </flexbox-item>
                </flexbox>
                <checker v-model="recently" default-item-class="checker-item" selected-item-class="checker-item-selected" >
                    <checker-item value="7">近7天</checker-item>
                    <checker-item value="30">近30天</checker-item>
                    <checker-item value="90">近3个月</checker-item>
                </checker>
            </group>

            <group>
               <cell title="开始时间">
                   <input v-model="tradstartTime" class="weui_input" type="date">
               </cell>
               <cell title="结束时间">
                   <input v-model="tradendTime" class="weui_input" type="date">
               </cell>
           </group>

            <group class="group">
                <div class="filter-title">交易类型</div>
                <checker v-model="tradType" default-item-class="checker-item" selected-item-class="checker-item-selected" >
                    <checker-item value="0">收款</checker-item>
                    <checker-item value="1">退款</checker-item>
                    <checker-item value="2">提现</checker-item>
                </checker>
            </group>

            <group class="group">
                <div class="filter-title">台卡</div>
                <checker v-model="TKName" default-item-class="checker-item" selected-item-class="checker-item-selected" >
                    <checker-item value="台卡1">台卡1</checker-item>
                    <checker-item value="台卡2">台卡2</checker-item>
                    <checker-item value="台卡3">台卡3</checker-item>
                </checker>
            </group>
        </main>

        <footer>
            <flexbox>
                <flexbox-item :span="1/3">
                    <x-button type="primary" plain @click.native="handlerReset">重置</x-button>
                </flexbox-item>
                <flexbox-item :span="155/240">
                    <x-button type="primary" @click.native="handlerFilter">筛选</x-button>
                </flexbox-item>
            </flexbox>
        </footer>
    </div>
</template>

<script>
    import store from 'src/store.js'

    import { Group, XButton, XHeader, Cell, Checker, CheckerItem, Flexbox, FlexboxItem} from 'vux'
    export default {
        name: 'filter',
        components: {
            Group, XButton, XHeader, Cell, Checker, CheckerItem, Flexbox, FlexboxItem
        },
        data (){
            return {
                recently: '7',
                tradstartTime: '2017-01-01',
                tradendTime: '2017-02-16',
                tradType: '0',
                TKName: '台卡1'
            }
        },
        methods: {
            // 清除时间范围
            handlerClear (){
                this.recently = this.tradstartTime = this.tradendTime = '';
            },
            // 重置
            handlerReset (){
                this.recently = this.tradstartTime = this.tradendTime = this.tradType = this.TKName ='';
            },
            // 筛选
            handlerFilter (){
                let data = this.$data;
                this.$router.beforeEach(function (to, from, next) {
                    store.commit('getTradList', {
                        success: function () {
                            console.log('测试回调函数');
                            next();
                        }
                    });
                });
                this.$router.push('/incomeList');
            }
        }
    }

</script>

<style lang="less">
    .filter{
        padding-bottom: 70px;
    }
    main{
        font-size: 12px;
    }
   .filter .flexbox{
        padding: 15px 0;
    }
   .filter .flexbox-item{
        text-align: center;
        border-right: solid 1px #d5d5d5;
    }
   .filter .flexbox-item:last-child{
        border-right: 0;
    }
    .filter footer{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 10px;
        background-color: #fff;
    }

   .filter .checker-item {
       width: 70px;
       line-height: 30px;
       font-size: 12px;
       text-align: center;
       border-radius: 3px;
       border: 1px solid #d4d4d7;
       background-color: #fff;
       margin-right: 6px;
   }
   .filter .checker-item-selected {
       background: #d7edff url(../../../static/img/checker.png) no-repeat right top;
       background-size: 14px 13px;
       border-color: @primary-color;
       color: @primary-color;
   }

   .filter .group .weui_cells{
       padding: 15px;
       padding-top: 0;
   }
   .filter .filter-title{
        font-size: 12px;
       line-height: 40px;
   }

</style>