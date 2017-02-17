<!-- 注册页面 -->
<template>
    <div class="signUp">
        <x-header title="注册" :left-options="{showBack: true, backText: '' }"></x-header>
        <group gutter="25px">
            <cell>
                <i slot="icon" class="iconfont icon-mobile"></i>
                <input v-model="form.tel" slot="child" class="weui_input" placeholder="请输入手机号" type="text" required>
            </cell>
        </group>
        <group gutter="5px">
            <cell>
                <i slot="icon" class="iconfont icon-yanzhengma"></i>
                <input v-model="form.vcode" slot="child" class="weui_input" placeholder="请输入验证码" type="text" required style="width: 65%;">
                <x-button v-show="showBtn" slot="child" type="primary" class="vcode_btn" @click.native="getVcode">获取验证码</x-button>
                <x-button v-show="!showBtn" slot="child" type="primary" plain class="vcode_btn" style="margin-top: 0;height: 30px;">{{number}}</x-button>
            </cell>
        </group>
        <label for="checkbox" class="checkbox-label">
            <input v-model="form.hasRead" type="checkbox" id="checkbox" class="checkbox">
            我已阅读并同意
            <a href="">支付吧商户服务协议</a>
        </label>

        <box class="btn_group">
            <div style="margin-top: 40px;">
                <x-button  v-show="!complete" disabled class="submit">下一步</x-button>
                <x-button v-show="complete" type="primary" class="submit" @click.native="handleNextStep">下一步</x-button>
            </div>
        </box>
    </div>
</template>

<script>
    import { Box, Cell, Checklist, XInput, XButton, XHeader ,Group} from 'vux'
    export default {
        name: 'signUp',
        components: {
         Box, Cell, XInput, Checklist, XButton, XHeader, Group
        },
        data () {
            return {
                form:{
                    tel:'',
                    vcode:'',
                    hasRead:''
                },
                complete: false,
                showBtn: true,
                number: 60,
            }
        },
        watch: {
            form: {
                handler: function (form) {
                    this.complete = form.tel && form.vcode && form.hasRead
                },
                deep: true
            }
        },
        methods: {
            // 获取二维码
            getVcode () {
                var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
                if(!reg.test(this.form.tel)){
                    this.$vux.toast.show({
                        text: '请输入正确的手机号码',
                        type: 'text'
                    })
                    return false
                }

                this.showBtn = false;
                var interval = setInterval(function () {
                    if(this.number>0){
                        this.number--
                    }else {
                        clearInterval(interval);
                        this.showBtn = true;
                        this.number = 60 ;
                    }
                }.bind(this),1000)
            },
            // 跳转到下一步
            handleNextStep (){
                this.$router.push('/setPassword')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .checkbox-label{
        display: block;
        font-size: 15px;
        color: #999;
        margin: 10px 15px;
    }
    .checkbox{
        vertical-align: baseline;
    }
    .submit{
        margin: 30px 0;
    }
    .weui_cell{height: 54px;}

    .weui_input{padding-left: 20px;vertical-align: baseline;}

    .icon-yanzhengma,.icon-mobile{
        font-size: 20px;
    }

    .vcode_btn{display:inline-block;width: 100px; line-height: 30px;padding: 0 10px;font-size: 15px;white-space: nowrap;}

    @media screen and (max-height: 480px){
        .signUp .btn_group{
            margin: 60px 10px;
        }
    }
    .signUp .btn_group{
        margin: 90px 10px;
    }
    @media screen and (min-height: 668px){
        .signUp .btn_group{
            margin: 120px 10px;
        }
    }
</style>
