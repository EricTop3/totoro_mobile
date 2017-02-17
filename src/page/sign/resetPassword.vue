<!-- 找回密码 -->
<template>
    <div class="resetPassword">
        <x-header title="设置新密码" :left-options="{showBack: true,backText: ''}"></x-header>
        <group gutter="15px">
            <cell>
                <i slot="icon" class="iconfont icon-mobile"></i>
                <input v-model="phone" slot="child" class="weui_input" placeholder="请输入手机号" type="text" required>
            </cell>
        </group>
        <group gutter="15px">
            <cell>
                <i slot="icon" class="iconfont icon-yanzhengma"></i>
                <input v-model="vcode" slot="child" class="weui_input" placeholder="请输入验证码" type="text" required style="width: 65%;">
                <x-button v-show="showBtn" slot="child" type="primary" class="vcode_btn" @click.native="getVcode">获取验证码</x-button>
                <x-button v-show="!showBtn" slot="child" type="primary" plain class="vcode_btn" style="margin-top: 0;height: 30px;">{{number}}</x-button>
            </cell>
        </group>
        <group gutter="15px">
            <cell>
                <i slot="icon" class="iconfont icon-mima"></i>
                <input v-model="password" slot="child" class="weui_input" placeholder="请输入新密码(8-20位数字字母组成)" type="password" required>
            </cell>
        </group>
        <box gap="80px 15px">
            <x-button type="primary" @click.native="handlerSubmit">提交</x-button>
        </box>
    </div>
</template>

<script>
    import { XHeader, XButton, Group, Cell, Box } from 'vux'
    export default {
        name: 'resetPassword',
        components: {
            XHeader, XButton, Group, Cell, Box
        },
        data (){
            return {
                phone: '',
                vcode:'',
                password:'',
                showBtn: true,
                number: 60
            }
        },
        methods: {
            // 获取二维码
            getVcode () {
                var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
                if(!reg.test(this.phone)){
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
            handlerSubmit (){
                let self = this;
                this.$vux.toast.show({
                    text:'密码设置成功',
                    time:'1000',
                    onHide (){
                        self.$router.push('/signIn')
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .icon-mobile{
        font-size: 21px;
    }
    .icon-yanzhengma{
        font-size: 21px;
    }
    .iconfont{
        margin-right: 10px;
    }
    .weui_cell{height: 54px;}

    .vcode_btn{display:inline-block;width: 100px; line-height: 30px;padding: 0 10px;font-size: 15px;white-space: nowrap;}

</style>