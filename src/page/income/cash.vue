<!-- 提现 -->
<template>
    <div class="cash">
        <div style="padding: 30px 15px;">
            <button-tab>
                <button-tab-item selected>
                    提现至个人账户
                </button-tab-item>
                <button-tab-item>
                    提现至公司账户
                </button-tab-item>
            </button-tab>
        </div>
        <group>
            <x-input title="开户银行" placeholder="目前已支持14家银行"></x-input>
        </group>

    </div>
</template>

<script>
    import { PopupPicker, Cell, XInput, Group, ButtonTab, ButtonTabItem } from 'vux'
    export default {
        name: 'cash',
        components: {
            PopupPicker, Cell, Group, XInput, ButtonTab, ButtonTabItem
        },
        data (){
            return {

            }
        }
    }
</script>

<style scoped>

</style>