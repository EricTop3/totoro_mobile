/* 路由配置文件 */
// 首页
import home from './page/home.vue'
// 登录页
import signIn from './page/sign/signIn.vue'
// 注册页
import signUp from './page/sign/signUp.vue'
// 重置密码
import resetPassword from './page/sign/resetPassword.vue'
// 注册-设置密码
import setPassword from './page/sign/setPassword.vue'
// 注册 创建商户
import createStore from './page/sign/createStore.vue'
// 收入
import income from './page/income/index.vue'
// 收入-提现
import cash from './page/income/cash.vue'
// 收入-收入列表
import incomeList from './page/income/incomeList.vue'
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
// 收款二维码
import SK_QRcode from './page/shouKuan/QRcode.vue'
// 收款状态
import SK_status from './page/shouKuan/status.vue'
// 台卡详情
import QRcodeDetail from './page/QRcode/QRcodeDetail.vue'

export default [
    { path: '/', component: home },
    { path: '/signIn', component: signIn },
    { path: '/signUp', component: signUp },
    { path: '/resetPassword', component: resetPassword },
    { path: '/setPassword', component: setPassword },
    { path: '/createStore', component: createStore },
    { path: '/income', component: income },
    { path: '/cash', component: cash },
    { path: '/incomeList', component: incomeList },
    { path: '/incomeDetail', component: incomeDetail },
    { path: '/filter', component: filter },
    { path: '/QRcode', component: QRcode },
    { path: '/QRManage', component: QRManage },
    { path: '/addQRcode', component: addQRcode },
    { path: '/shouKuan', component: shouKuan },
    { path: '/SK_QRcode', component: SK_QRcode },
    { path: '/SK_status', component: SK_status },
    { path: '/QRcodeDetail', component: QRcodeDetail }
]