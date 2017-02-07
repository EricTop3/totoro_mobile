<!-- 设置密码 -->
<template>
    <div class="setPassword">
        <group>
            <x-input title="密码" v-model="form.password" ref="password" name="password" type="password" placeholder="请设置密码(8-20位数字)" :min="8" :max="20" required></x-input>
        </group>
        <group>
            <x-input title="昵称" v-model="form.nickName" name="nickName" placeholder="请设置个人昵称" required></x-input>
        </group>
        <box gap="10px 10px" >
            <x-button v-show="!complete" disabled class="submit">完成注册</x-button>
            <x-button v-show="complete" type="primary" class="submit" @click.native="handleClick">完成注册</x-button>
        </box>
    </div>
</template>

<script>
    import { Box, Checklist, XInput, XButton ,Group } from 'vux'
    export default {
        name: 'setPassword',
        components: {
            Box, XInput, Checklist, XButton, Group
        },
        data () {
            return {
                form: {
                    password:'',
                    nickName:''
                },
                complete: false
            }
        },
        watch: {
            form: {
                handler () {
                    this.complete = this.$refs.password.valid && this.form.nickName
                },
                deep: true
            }
        },
        methods: {
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
</style>