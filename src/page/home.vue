<!-- 主页 -->
<template>
    <div class="home">
        <header>
            <swiper loop auto height="180px" dots-position="center">
                <swiper-item v-for="img in images">
                    <img :src="img" alt="" width="100%" height="180px">
                </swiper-item>
            </swiper>
        </header>
        <main>
            <nav>
                <div class="nav-item" @click="routerTo('/shouKuan')">
                    <i class="iconfont icon-shoukuan2"></i>
                    <p>收款</p>
                </div>
                <div class="nav-item" @click="routerTo('/income')">
                    <i class="iconfont icon-fukuan"></i>
                    <p>收入</p>
                </div>
                <div class="nav-item" @click="routerTo('/QRcode')">
                    <i class="iconfont icon-erweima"></i>
                    <p>台卡</p>
                </div>
            </nav>
        </main>
    </div>
</template>

<script>
    import { Swiper, SwiperItem } from 'vux'
    export default {
        name: 'home',
        components: {
            Swiper, SwiperItem
        },
        data () {
            return {
                images: ['static/img/slide_01.png','static/img/slide_01.png','static/img/slide_01.png'],
            }
        },
        methods: {
            routerTo (url) {
                console.log(url);
                this.$router.push(url)
            }
        }
    }
</script>

<style scoped>
    .home{
        font-size: 16px;
    }

    .home main{
        padding: 15px 10px;
    }
    .home  nav {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -wekit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .home .nav-item{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
    }
    .home .nav-item p{
        font-size: 15px;
        margin-top: -8px;
    }
    .home .iconfont{
        font-size: 40px;
    }
    .home .icon-shoukuan2{
        color: #f04e7c;
    }
    .home .icon-fukuan{
        color: #007de2;
    }
    .home .icon-erweima{
        color: #7ac000;
    }
</style>
