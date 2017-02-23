## 自定义弹框组件
### props
* value \<Boolean>，默认为false,弹窗是否可见,使用v-model绑定
* title \<text>，弹窗标题
* placeholder /<text>,输入框默认提示

### Events
* change 输入框值变化时触发
* save 点击保存时触发
* cancel 点击取消时触发

### 使用案例
```
# 引入组件
import MDialog from 'components/MDialog/MDialog.vue'
export default{
// 注册组件
	components: { MDialog }
}

# 使用组件
<m-dialog v-model="showDialog" title="修改台卡名称" placeholder="请输入台卡名称"  @save="changeTKname"></m-dialog>
```
