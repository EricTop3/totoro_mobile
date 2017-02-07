<!-- 主页 -->
<template>
    <div class="home">
        <header>
            <nav>
                <div class="nav-item">
                    <img src="" alt="">
                    <p>收款</p>
                </div>
            </nav>
        </header>
        <main>
            <nav>
                <div class="nav-item">
                    <img src="" alt="">
                    <p>收入</p>
                </div>
                <div class="nav-item">
                    <img src="" alt="">
                    <p>台卡</p>
                </div>
            </nav>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {

            }
        }
    }
</script>

<style scoped>
    .home{
        font-size: 16px;
    }
    header{
        background-color: #000;
        padding: 30px 20px;
        color: #fff;
    }
    main{
        padding: 30px 10px;
    }
    nav {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -wekit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .nav-item{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
    }
    .nav-item img{
        width: 40px;
        height: 40px;
    }
</style>