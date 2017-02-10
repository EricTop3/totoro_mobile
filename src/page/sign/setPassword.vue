<!-- 设置密码 -->
<template>
    <div class="setPassword">
        <group gutter="25px">
            <cell>
                <i slot="icon" class="iconfont icon-zhanghao"></i>
                <input v-model="form.nickName" slot="child" class="weui_input" placeholder="请输入个人昵称" type="text" required>
            </cell>
        </group>
        <group gutter="5px">
            <cell>
                <i slot="icon" class="iconfont icon-mima"></i>
                <input v-model="form.password" slot="child" class="weui_input" placeholder="请输入密码(8-20位数字与字母组合)" type="password" required>
            </cell>
        </group>
        <div class="errMsg">{{errMsg}}</div>

        <box gap="10px 10px" >
            <x-button v-show="!complete" class="submit" @click.native="checkFrom">完成注册</x-button>
            <x-button v-show="complete" type="primary" class="submit" @click.native="handleClick">完成注册</x-button>
        </box>
    </div>
</template>

<script>
    import { Box, Cell, Checklist, XInput, XButton ,Group } from 'vux'
    export default {
        name: 'setPassword',
        components: {
            Box, Cell, XInput, Checklist, XButton, Group
        },
        data () {
            return {
                form: {
                    password:'',
                    nickName:''
                },
                complete: false,
                errMsg: ''
            }
        },
        watch: {
            form: {
                handler () {
                    var reg = /^[a-zA-Z\d]{8,10}$/;
                    this.complete = reg.test(this.form.password) && this.form.nickName;
                    if(reg.test(this.form.password)){
                        this.errMsg = '';
                    }
                },
                deep: true
            }
        },
        methods: {
            checkFrom (){
                var eleReg = /^[a-zA-Z\d]+$/;
                var reg = /^[a-zA-Z\d]{8,10}$/;
                if(!this.form.password){
                    this.errMsg = '密码不能为空'
                }else if(!eleReg.test(this.form.password)){
                    this.errMsg = '密码只能由字母和数字组成，不能包含特殊字符'
                }else if(!reg.test(this.form.password)){
                    this.errMsg = '密码的长度为8到10位'
                }else {
                    this.errMsg = ''
                }
            },
            handleClick () {
                this.$router.push('/createStore')
            }
        }
    }
</script>

<style scoped>
    .submit{
        margin-top: 40px;
    }
    .weui_input{padding-left: 20px;}
    .errMsg{
        font-size: 15px;
        color: red;
        padding: 10px 15px;
        height: 44px;
    }
</style>