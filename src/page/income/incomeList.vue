<!-- 收入列表 -->
<template>
    <div class="incomeList">
         <list></list>
    </div>
</template>

<script>
    import store from 'src/store.js'
    import List from 'src/components/list.vue'

    export default {
        name: 'incomeList',
        components: {
            List
        },
        data (){
            return {
            }
        },
        created (){
        }
    }
</script>

<style>

</style>