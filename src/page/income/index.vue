<!-- 收入 -->
<template>
    <div class="income">
        <x-header title="收入" :left-options="{showBack: true, backText: ''}"></x-header>
        <header>
            <div class="cash">
                <p>￥<span>20.00</span></p>
                可提现金额
            </div>
            <p class="tip"><i class="iconfont icon-11"></i>资金由中国人寿保险保障</p>
        </header>
        <flexbox :gutter="0" class="flexbox">
            <flexbox-item class="flexbox-item border-right">
                <router-link to="/cash">
                    提现
                </router-link>
            </flexbox-item>
            <flexbox-item class="flexbox-item">
                <router-link to="/incomeList">
                    收支明细
                </router-link>
            </flexbox-item>
        </flexbox>
        <group :gutter="'10px'">
            <cell title="今日收入" is-link><span class="cell_value">￥100.00</span></cell>
            <cell title="近七天收入" is-link><span class="cell_value">￥100.00</span></cell>
            <cell title="近30天收入" is-link><span class="cell_value">￥100.00</span></cell>
        </group>
        <!-- 图表 -->
        <div class="chart_content">
            <div class="chart">
                <canvas id="myChart" ></canvas>
            </div>
        </div>

    </div>
</template>

<script>
    import store from 'src/store.js'
    import { Cell, Group, XButton, XHeader, Flexbox, FlexboxItem } from 'vux'
    import Chart from 'chart.js'

    export default {
        name: 'income',
        components: {
            Cell, Group, XButton, XHeader, Flexbox, FlexboxItem
        },
        data () {
            return {

            }
        },
        methods: {

        },
        created () {

            setTimeout(function () {
                initChart();
            },500)
        }
    }

    function initChart() {
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['16','17','18','19','20','21','22'],
                datasets: [
                    {
                        label: '近7天收入趋势',
                        backgroundColor:'transparent',
                        borderWidth: '1',
                        strokeColor : "rgba(46, 147, 230, 0.92)",
                        borderColor: "rgba(46, 147, 230, 0.92)",
                        pointBackgroundColor : "rgba(46, 147, 230, 0.92)",
                        pointBorderColor : "#fff",
                        data : [65,59,90,81,56,55,40]
                    }
                ]
            },
            options: {
                legend: {
                    display: true
                },
                scales: {
                    xAxes: [{
                        display: true
                    }]
                }
            }
        })
    }
</script>

<style  lang="less">
    .income{background-color: #eeeeee;padding-bottom: 40px;}
    .income .vux-header{
        background-color: rgba(46, 147, 230, 0.95);
        border-color: rgba(46, 147, 230, 0.95);
        color: #fff;
    }
    .income .vux-header-title{color: #fff;}
    .income .vux-header .vux-header-left .left-arrow:before{
        border-color: #fff;
    }
    .income header{
        position: relative;
        background-color: #2e93e6;
        color: #fff;
        padding: 40px 20px;
        text-align: center;
    }
    .income header .cash{
        font-size: 15px;
    }
    .income header .cash p span{
        font-size: 30px;
    }
    .income header .tip{
        left: 0;
        right: 0;
        position: absolute;
        bottom: 8px;
        font-size: 12px;
    }
    .income .weui_btn:after{
        border-radius: 0;
        border: none;
    }
    .income .icon-11{
        color: #fff;
        font-size: 12px;
        vertical-align: middle;
        margin: 0 5px;
    }

    .income .flexbox-item{
        background-color: #fff;
        line-height: 45px;
        text-align: center;
    }
    .income .flexbox-item a{
        color: #000;
    }
    .income .flexbox{
        padding: 0;
        border-bottom: solid 1px #d5d5d5;
    }
    .income .cell_value{
        color: @text-color;
    }
    .income .weui_cell_ft.with_arrow:after{
        border-color: @text-color;
    }
    .border-right{
        border-right: solid 1px #e2e2e7;
    }
    .chart_content{
        margin: 15px 0;
        padding: 15px;
        background-color: #fff;
    }
    .chart{
        background-color: #fff;
        /*height: 150px;*/
    }
</style>