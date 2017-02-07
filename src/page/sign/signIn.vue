<!-- 登录页面 -->
<template>
    <div class="signIn">
        <header>
            <img :src="headerImg" alt="用户头像" width="50" height="50">
        </header>

        <main>
            <group>
                <x-input v-model="form.account" title="帐号" name="account" placeholder="请输入帐号" required></x-input>
            </group>
            <group>
                <x-input v-model="form.password" title="密码" type="password" name="password" placeholder="请输入密码" required></x-input>
            </group>
            <div style="font-size: 12px;text-align: right;margin: 10px;color: #999;">
                忘记密码？
            </div>
            <box gap="10px 10px">
                <x-button type="primary" @click.native="handleSignIn">登录</x-button>
                <x-button @click.native="handleSignUp">新用户注册</x-button>
            </box>
        </main>
    </div>
</template>

<script>
    import {Box, XInput, Group, XButton, Cell} from 'vux'
    export default {
        name: 'signIn',
        components: {
            Box, XInput, Group, XButton, Cell
        },
        data () {
            return {
                headerImg:'',
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
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header{
        padding: 30px;
        text-align: center;
        background-color: #000;
    }
    header img{
        border-radius: 50%;
    }
    main{
        padding: 20px 0;
    }
</style>