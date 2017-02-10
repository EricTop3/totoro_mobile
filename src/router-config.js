/* 路由配置文件 */
// 首页
import home from './page/home.vue'
// 登录页
import signIn from './page/sign/signIn.vue'
// 注册页
import signUp from './page/sign/signUp.vue'
// 注册-设置密码
import setPassword from './page/sign/setPassword.vue'
// 注册 创建商户
import createStore from './page/sign/createStore.vue'
// 收入
import income from './page/income/index.vue'
// 收入-提现
import cash from './page/income/cash.vue'
// 收入-收入明细
import incomeDetail from './page/income/incomeDetail.vue'
// 筛选
import filter from './page/income/filter.vue'
// 台卡
import QRcode from './page/QRcode/index.vue'
// 台卡管理
import QRManage from './page/QRcode/QRManage.vue'
// 添加台卡
import addQRcode from './page/QRcode/addQRcode.vue'
// 收款
import shouKuan from './page/shouKuan/index.vue'

export default [
    { path: '/', component: home },
    { path: '/signIn', component: signIn },
    { path: '/signUp', component: signUp },
    { path: '/setPassword', component: setPassword },
    { path: '/createStore', component: createStore },
    { path: '/income', component: income },
    { path: '/cash', component: cash },
    { path: '/incomeDetail', component: incomeDetail },
    { path: '/filter', component: filter },
    { path: '/QRcode', component: QRcode },
    { path: '/QRManage', component: QRManage },
    { path: '/addQRcode', component: addQRcode },
    { path: '/shouKuan', component: shouKuan }

]