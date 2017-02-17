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
                    <flexbox :gutter="0" align="stretch" class="noborder_bottom">
                        <flexbox-item :span="3/4" class="noborder_bottom">
                            <flexbox :gutter="0">
                                <flexbox-item :span="1/3" @click.native="handlerClickNum(1)">1</flexbox-item>
                                <flexbox-item :span="1/3" @click.native="handlerClickNum(2)">2</flexbox-item>
                                <flexbox-item :span="1/3" @click.native="handlerClickNum(3)">3</flexbox-item>
                            </flexbox>
                            <flexbox :gutter="0" class="noborder_bottom">
                                <flexbox-item :span="1/3" @click.native="handlerClickDouble0">00</flexbox-item>
                                <flexbox-item :span="1/3" @click.native="handlerClickNum(0)">0</flexbox-item>
                                <flexbox-item :span="1/3" @click.native="handlerClickDot('.')">.</flexbox-item>
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
        watch: {
            formula (val){
                var _this = this;
                this.total = 0;
                String(val).split('+').forEach(function (item) {
                    _this.total += Number(item);
                })
            }
        },
        methods: {
            // 点击键盘事件
            handlerClickNum (val) {
                this.formula += val;
            },
            // 收款
            handlerCollect (){
                if(Number(this.total)){
                    this.$router.push('/SK_QRcode')
                }else {
                    this.$vux.toast.show({
                        text: '请输入收款金额',
                        type: 'text'
                    })
                }
            },
            // 点击加号
            handlerAdd (){
                var last = this.formula.split('+').pop();
                if(/^[\d\.]+$/.test(last) && last.slice(-1) !== '.'){
                    this.formula += '+';
                }
            },
            // 点击删除
            handlerDel (){
                this.formula = this.formula.slice(0, -1);
            },
            // 点击小数点
            handlerClickDot (){
                var last = this.formula.split('+').pop();
                if(/^\d+$/.test(last)){
                    this.formula += '.';
                }
            },
            // 点击 00
            handlerClickDouble0 (){
                var last = this.formula.split('+').pop();
                if(last !== '0' && last !== ''){
                    this.formula += '00';
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .shouKuang .iconfont{
        color: #333;
        font-size: 20px;
    }

    .shouKuang .compute{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
    }
    .shouKuang .money,.shouKuang .formula{
        text-align: right;
        background-color: @background-color;
        color: #000;
        font-size: 25px;
        padding-right: 15px;
        line-height: 2;
    }
    .shouKuang .formula{
        color: #333;
        font-size: 20px;
    }
    /*.weui_cell{height: 90px;}*/
    .shouKuang .compute_number{
        text-align: center;
    }
    .shouKuang .btn.vux-flexbox-item{
        background-color: @primary-color;
        color: #fff;
        line-height: 108px;

    }


    .shouKuang .vux-flex-row{
        text-align: center;
        font-size: 23px;
        color: #333;
        border-bottom: solid 1px #e2e2e7;
    }
    .shouKuang .noborder_bottom{
        border-bottom: none;
    }
    .shouKuang .weui_cell{
        border-bottom: solid 1px #e2e2e7;
        color: @text-color;
    }
    .shouKuang .vux-flexbox-item{
        border-right: solid 1px #e2e2e7;
        line-height: 54px;
    }
    .shouKuang .vux-flexbox-item:last-of-type{
        border: none;
    }

</style>
