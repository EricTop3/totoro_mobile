<!-- 主页 -->
<template>
    <div class="home">
        <header>
            <swiper loop auto height="180px" dots-position="center">
                <swiper-item v-for="item in images">
                    <img :src="item.img" alt="" width="100%" height="180px">
                </swiper-item>
            </swiper>
        </header>
        <main>
            <nav>
                <div class="nav-item" @click="routerTo('/shouKuan')">
                    <!--<img src="" alt="">-->
                    <i class="iconfont icon-shoukuan2"></i>
                    <p>收款</p>
                </div>
                <div class="nav-item" @click="routerTo('/income')">
                    <!--<img src="" alt="">-->
                    <i class="iconfont icon-fukuan"></i>
                    <p>收入</p>
                </div>
                <div class="nav-item" @click="routerTo('/QRcode')">
                    <!--<img src="" alt="">-->
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
                images: [
                    {
                        url: '',
                        img: 'static/img/slide_01.png',
                        title: '什么鬼？'
                    },
                    {
                        url: '',
                        img: 'static/img/slide_01.png',
                        title: '什么鬼？'
                    },
                    {
                        url: '',
                        img: 'static/img/slide_01.png',
                        title: '什么鬼？'
                    }
                ]
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

    main{
        padding: 15px 10px;
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
    .nav-item p{
        font-size: 15px;
        margin-top: -8px;
    }
    .iconfont{
        font-size: 40px;
    }
    .icon-shoukuan2{
        color: #f04e7c;
    }
    .icon-fukuan{
        color: #007de2;
    }
    .icon-erweima{
        color: #7ac000;
    }
</style>
