<!-- 筛选 -->
<template>
    <div class="filter">
        <x-header title="筛选" :left-options="{ showBack: true, backText:'返回'}"></x-header>
        <search v-model="searchText" @on-change="getResult" @result-click="resultClick" :results="searchResults" placeholder="搜索" top="46px"></search>
        <flexbox class="flexbox" :gutter="0">
            <flexbox-item :span="1/4" class="flexbox-item">
                收款
            </flexbox-item>
            <flexbox-item :span="1/4" class="flexbox-item">
                退款
            </flexbox-item>
            <flexbox-item :span="1/4" class="flexbox-item">
                购物
            </flexbox-item>
            <flexbox-item :span="1/4" class="flexbox-item">
                提现
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
    import { XHeader, Search, Flexbox, FlexboxItem} from 'vux'
    export default {
        name: 'filter',
        components: {
            XHeader, Search, Flexbox, FlexboxItem
        },
        data (){
            return {
                searchText:'',
                searchResults:[1,2,3]
            }
        },
        methods: {
            getResult (val) {
                this.searchResults = val ? getResult(val) : []
            },
            resultClick (item) {
                window.alert('you click the result item: ' + JSON.stringify(item))
            }
        }
    }
    function getResult (val) {
        let rs = []
        for (let i = 0; i < 8; i++) {
            rs.push({
                title: `${val} result: ${i + 1} `,
                other: i
            })
        }
        return rs
    }
</script>

<style lang="less">
    .flexbox{
        padding: 15px 0;
    }
    .flexbox-item{
        text-align: center;
        border-right: solid 1px #d5d5d5;
    }
    .flexbox-item:last-child{
        border-right: 0;
    }
</style>