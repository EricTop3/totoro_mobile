<!-- 登录页面 -->
<template>
    <div class="signIn">
        <x-header title="龙猫支付" :left-options="{showBack: true}" :right-options="{showMore: true}" @on-click-more="clickMore"></x-header>

        <div class="head">
            <img :src="headerImg" alt="用户头像" width="70" height="70">
            <p>龙猫支付</p>
        </div>

        <main>
            <group gutter="10px">
                <cell>
                    <i slot="icon" class="iconfont icon-zhanghao"></i>
                    <input v-model="form.account" slot="child" class="weui_input" placeholder="请输入帐号" type="text" required>
                </cell>
            </group>
            <group gutter="5px">
                <cell>
                    <i slot="icon" class="iconfont icon-mima"></i>
                    <input v-model="form.password" slot="child" class="weui_input" placeholder="请输入密码" type="password" required>
                </cell>
            </group>

            <flexbox>
                <flexbox-item >
                    <label for="bindWX">
                        <input id="bindWX" type="checkbox" style="vertical-align: middle;">
                        绑定微信号登录
                    </label>
                </flexbox-item>
                <flexbox-item  style="text-align: right;">
                    忘记密码？
                </flexbox-item>
            </flexbox>
            <box gap="10px 10px" style="margin-top: 30px;">
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
                headerImg:'static/img/slide_01.png',
                form: {
                    account:'',
                    password:''
                }
            }
        },
        methods: {
            // 登录
            handleSignIn () {
                this.$vux.toast.show({
                    text: '登录成功'
                })
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
<style scoped lang="less">
    .head{
        height: 200px;
        padding: 35px 10px;
        text-align: center;
        background: url('../../../static/img/bg_01.png') no-repeat;
        background-size: 100% 200px;
        color: #fff;
    }
    .head img{
        border-radius: 50%;
    }
    .head p{
        font-size: 20px;
    }
    main{
        padding: 20px 0;
    }

    .weui_input{padding-left: 20px;}

    .vux-flex-row{
        padding: 10px;
        font-size: 15px;
        color: @text-color;
    }

    .icon-zhanghao,.icon-mima{
        font-size: 20px;
    }


</style>