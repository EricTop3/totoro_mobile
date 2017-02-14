<!-- 收款 -->
<template>
    <div class="shouKuang">
        <x-header title="收款" :left-options="{ showBack: true, backText:''}"></x-header>
        <div class="compute">
            <div class="formula">{{formula}}</div>
            <div class="money">{{total.toFixed(2)}}</div>
            <div class="compute_content">
                <div class="weui_cell">
                    <div class="weui_cell_hd weui_cell_primary">优惠金额:{{discount.toFixed(2)}}</div>
                    <div class="weui_cell_bd">应收金额:{{actual.toFixed(2)}}</div>
                </div>
                <div class="compute_number">
                    <flexbox  :gutter="0">
                        <flexbox-item :span="1/4" @click.native="handlerClickNum(7)">7</flexbox-item>
                        <flexbox-item :span="1/4" @click.native="handlerClickNum(8)">8</flexbox-item>
                        <flexbox-item :span="1/4" @click.native="handlerClickNum(9)">9</flexbox-item>
                        <flexbox-item :span="1/4" @click.native="handlerDel"><i class="iconfont icon-jiantouzuo"></i></flexbox-item>
                    </flexbox>
                    <flexbox :gutter="0">
                        <flexbox-item :span="1/4" @click.native="handlerClickNum(4)">4</flexbox-item>
                        <flexbox-item :span="1/4" @click.native="handlerClickNum(5)">5</flexbox-item>
                        <flexbox-item :span="1/4" @click.native="handlerClickNum(6)">6</flexbox-item>
                        <flexbox-item :span="1/4" @click.native="handlerAdd"><i class="iconfont icon-jiajian02"></i></flexbox-item>
                    </flexbox>
                    <flexbox :gutter="0" align="stretch">
                        <flexbox-item :span="3/4">
                            <flexbox :gutter="0">
                                <flexbox-item :span="1/3" @click.native="handlerClickNum(1)">1</flexbox-item>
                                <flexbox-item :span="1/3" @click.native="handlerClickNum(2)">2</flexbox-item>
                                <flexbox-item :span="1/3" @click.native="handlerClickNum(3)">3</flexbox-item>
                            </flexbox>
                            <flexbox :gutter="0">
                                <flexbox-item :span="1/3" @click.native="handlerClickNum('00')">00</flexbox-item>
                                <flexbox-item :span="1/3" @click.native="handlerClickNum(0)">0</flexbox-item>
                                <flexbox-item :span="1/3" @click.native="handlerClickNum('.')">.</flexbox-item>
                            </flexbox>
                        </flexbox-item>
                        <flexbox-item :span="1/4" class="btn" @click.native="handlerCollect">收款</flexbox-item>
                    </flexbox>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Flexbox, FlexboxItem, XHeader } from 'vux'
    export default {
        name: 'shouKuang',
        components: {
            Flexbox, FlexboxItem, XHeader
        },
        data () {
            return {
                // 公式
                formula:'',
                total: 0,
                discount:0,
                actual:0,
                // 当前环境 (加/小数)(add/dot)
                environment:'add'
            }
        },
        methods: {
            // 点击键盘事件
            handlerClickNum (val) {
                this.total = String(this.total);
                this.total = Number(String(this.total) + val)
                this.total = Number(this.total);
            },
            // 收款
            handlerCollect (){

            },
            handlerAdd (){

            },
            handlerDel (){
                this.total = String(this.total);
                this.total =  this.total.length ? this.total.slice(0,-1) : 0 ;
            }
        }
    }
</script>

<style scoped lang="less">
    .iconfont{
        color: #333;
        font-size: 20px;
    }

    .compute{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
    }
    .money{
        text-align: right;
        background-color: @background-color;
        color: #000;
        font-size: 25px;
        padding-right: 15px;
        line-height: 2;
    }
    /*.weui_cell{height: 90px;}*/
    .compute_number{
        text-align: center;
    }
    .btn.vux-flexbox-item{
        background-color: @primary-color;
        color: #fff;
        line-height: 90px;
    }
    .vux-flex-row{
     text-align: center;
        font-size: 23px;
        color: #333;
        border-bottom: solid 1px #e2e2e7;
    }
    .weui_cell{
        border-bottom: solid 1px #e2e2e7;
        color: @text-color;
    }
    .vux-flexbox-item{
        border-right: solid 1px #e2e2e7;
        line-height: 45px;
    }
    .vux-flexbox-item:last-of-type{
        border: none;
    }

</style>
