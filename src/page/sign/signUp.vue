<!-- 注册页面 -->
<template>
    <div class="signUp">
        <group>
            <x-input v-model="form.tel" keyboard="number" is-type="china-mobile" title="手机号" ref="tel" name="tel" placeholder="请输入手机号码" required></x-input>
        </group>
        <group class="weui_cells_form">
            <x-input v-model="form.vcode" class="weui_vcode vcode" title="验证码" ref="vcode" name="vcode" placeholder="请输入验证码" required>
                <x-button @click.native="getVcode" v-show="showBtn" slot="right" mini plain type="primary" style="border-width:0;width: 100px">获取验证码</x-button>
                <x-button v-show="!showBtn" slot="right" mini style="border-width:0;width: 100px;margin-top: 0;">{{number}}</x-button>
            </x-input>
        </group>
        <box gap="10px 10px">
            <label for="checkbox" class="checkbox-label">
                <input v-model="form.hasRead" type="checkbox" id="checkbox" class="checkbox">
                我已阅读并同意
                <a href="">收银项目商户服务协议</a>
            </label>
            <x-button v-show="!complete" disabled class="submit">下一步</x-button>
            <x-button v-show="complete" type="primary" class="submit" @click.native="handleNextStep">下一步</x-button>
        </box>
    </div>
</template>

<script>
    import { Box, Checklist, XInput, XButton ,Group} from 'vux'
    export default {
        name: 'signUp',
        components: {
         Box, XInput, Checklist, XButton, Group
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
                console.log(this.$refs.tel.valid);
                if(!this.$refs.tel.valid){
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
        font-size: 12px;
        color: #999;
    }
    .checkbox{
        vertical-align: middle;
    }
    .submit{
        margin: 30px 0;
    }
</style>