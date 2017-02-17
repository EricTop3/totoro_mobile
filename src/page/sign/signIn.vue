<!-- 登录页面 -->
<template>
    <div class="signIn">
        <div class="head">
            <img :src="headerImg" alt="用户头像" width="70" height="70">
            <p>龙猫支付</p>
        </div>

        <main>
            <group gutter="10px">
                <cell>
                    <i slot="icon" class="iconfont icon-zhanghao"></i>
                    <input v-model="account" slot="child" class="weui_input" placeholder="请输入帐号" type="text" required>
                </cell>
            </group>
            <group gutter="5px">
                <cell>
                    <i slot="icon" class="iconfont icon-mima"></i>
                    <input v-model="password" slot="child" class="weui_input" placeholder="请输入密码" type="password" required>
                </cell>
            </group>

            <flexbox>
                <flexbox-item >
                    <label for="bindWX">
                        <input v-model="bindWX" id="bindWX" type="checkbox" style="vertical-align: middle;">
                        绑定微信号登录
                    </label>
                </flexbox-item>
                <flexbox-item  style="text-align: right;">
                    <router-link to="/resetPassword" class="router-link">
                        忘记密码？
                    </router-link>
                </flexbox-item>
            </flexbox>
            <box  class="btn_group">
                <x-button type="primary" @click.native="handleSignIn">登录</x-button>
                <x-button type="primary" plain @click.native="handleSignUp">新用户注册</x-button>
            </box>
        </main>
    </div>
</template>

<script>
    import {Box, XInput, XHeader, Group, XButton, Cell, Flexbox, FlexboxItem} from 'vux'
    export default {
        name: 'signIn',
        components: {
            Box, XInput, XHeader, Group, XButton, Cell, Flexbox, FlexboxItem
        },
        data () {
            return {
                headerImg: 'static/img/slide_01.png',
                account: '',
                password: '',
                bindWX:false
            }
        },
        methods: {
            checkForm (){
                if(!this.account){
                    this.showInfo('请输入帐号');
                    return false
                }else if(!this.password){
                    this.showInfo('请输入密码');
                    return false
                }else {
                    return true
                }
            },
            // 登录
            handleSignIn () {
                if(this.checkForm()){
                    this.loading();
                    let self = this;
                    // TODO:帐号密码MD5加密处理

                    this.$http.get('static/data/userJson.json').then( response => {
                        if(response.data.errcode == 0){
                            this.showInfo('登录成功', function () {
                                self.$router.push('/')
                            })
                        }
                    }, response => {
                        console.log(response)
                    })
                }
            },
            // 注册
            handleSignUp () {
                this.$router.push('/signUp')
            },
            clickMore () {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .signIn .head{
        height: 200px;
        padding: 35px 10px;
        text-align: center;
        background: url('../../../static/img/bg_01.png') no-repeat;
        background-size: 100% 200px;
        color: #fff;
    }
    .signIn .head img{
        border-radius: 50%;
    }
    .signIn .head p{
        font-size: 20px;
    }
    .signIn main{
        padding: 20px 0;
    }
    .signIn .weui_cell{
        height: 54px;
    }
    .signIn .weui_input{padding-left: 20px;}

    .signIn .vux-flex-row{
        padding: 10px;
        font-size: 15px;
        color: @text-color;
    }

    .signIn .icon-zhanghao,.icon-mima{
        font-size: 20px;
    }
    .signIn  .router-link{
        color:@text-color;
    }

    @media screen and (max-height: 480px){
        .signIn .btn_group{
            margin: 30px 10px;
        }
    }
    .signIn .btn_group{
        margin: 60px 10px;
    }
    @media screen and (min-height: 668px){
        .signIn .btn_group{
            margin: 90px 10px;
        }
    }
</style>