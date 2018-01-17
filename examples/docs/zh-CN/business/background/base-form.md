<script>
export default {
  name: "createSpike",
  data() {
    return {
      form: {},
      rules: {},
      date: '',
      checkList: [],
      radio: 0,
      status: 0,
      checked: false,
      //拦截0元预付费用户
      limitChecked: true,
      //自动开始结束
      autoChecked: false,
      value: '',
      options: [],
      checkAll: false,
      deleteShow: false
    };
  }
}
</script>

## Form 表单

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

### 基础表单

基础的表格展示用法。

:::demo 当`el-table`元素中注入`data`对象数组后，在`el-table-column`中用`prop`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽。
```html
<template>
  <div id="vouchersDetail">
    <div class="page-header">
      <h1>新建秒杀</h1>
      <a href="#" class="button-back">返回</a>
    </div>
    <div class="wrapper-form">
      <el-form :model="form" :rules="rules" label-width="150px">
        <section class="section-form-item">
          <h3 class="section-form-header">SEO优化设置</h3>
          <el-form-item label="页面标题：" prop="title" :required="true">
            <el-input placeholder="请输入页面标题"></el-input>
            <span>0/25</span>
          </el-form-item>
          <el-form-item label="页面关键词：" prop="keyword">
            <el-input placeholder="请输入页面关键词"></el-input>
            <span>0/25</span>
            <p class="form-item-help">建议4组词汇，用逗号隔开</p>
          </el-form-item>
          <el-form-item label="页面描述：" prop="desc">
            <el-input type="textarea" placeholder="请输入页面描述"></el-input>
            <span>0/75</span>
          </el-form-item>
        </section>
        <section class="section-form-item">
          <h3 class="section-form-header">规则设置</h3>
          <el-form-item label="商城订单号：" prop="orderNumber">
            <el-input placeholder="请输入商城订单号"></el-input>
          </el-form-item>
          <el-form-item label="每日用户数量：" prop="user">
            <el-input placeholder="不填默认为不限制"></el-input>
          </el-form-item>
          <el-form-item label="每日开始结束时间：" prop="time">
            <el-date-picker
              v-model="value"
              type="daterange"
              placeholder="选择日期范围">
            </el-date-picker>
            <el-checkbox v-model="autoChecked" class="form-item-inline">自动开始结束</el-checkbox>
          </el-form-item>
          <el-form-item label="每个用户购买数量：" prop="reason">
            <el-input placeholder="不填默认为不限制"></el-input>
          </el-form-item>
          <el-form-item label="是否判断实名认证：" prop="auth">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="个人实名认证"></el-checkbox>
              <el-checkbox label="学生认证"></el-checkbox>
              <el-checkbox label="企业"></el-checkbox>
              <el-checkbox label="社会团体"></el-checkbox>
              <el-checkbox label="自然人"></el-checkbox>
              <el-checkbox label="基金会"></el-checkbox>
              <el-checkbox label="个体工商户"></el-checkbox>
              <el-checkbox label="党政国家机关"></el-checkbox>
              <el-checkbox label="事业单位"></el-checkbox>
              <el-checkbox label="民办非企业单位"></el-checkbox>
            </el-checkbox-group>
            <p class="form-item-help">如果未选择不判断实名状态</p>
          </el-form-item>
          <el-form-item label="是否限制新用户使用：" prop="limit">
            <el-radio-group v-model="radio">
              <el-radio :label="0">否</el-radio>
              <el-radio :label="1">是</el-radio>
            </el-radio-group>
            <el-checkbox v-model="limitChecked" v-show="radio == 1" class="form-item-inline">拦截0元预付费用户</el-checkbox>
          </el-form-item>
          <el-form-item label="是否限制注册激活时间：" prop="time">
            <el-date-picker
              v-model="value"
              type="daterange"
              placeholder="选择日期范围">
            </el-date-picker>
            <p class="form-item-help">如果未选择时间不限制注册激活时间</p>
          </el-form-item>
          <el-form-item label="支持用户分组：" prop="group">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="自然流量"></el-checkbox>
              <el-checkbox label="合作伙伴"></el-checkbox>
              <el-checkbox label="内部高级"></el-checkbox>
              <el-checkbox label="直接用户"></el-checkbox>
              <el-checkbox label="内部重点"></el-checkbox>
            </el-checkbox-group>
            <p class="form-item-help">如果不勾选，则不判断用户分组</p>
          </el-form-item>
          <el-form-item label="活动状态：" prop="status">
            <el-radio-group v-model="status">
              <el-radio :label="0">关闭</el-radio>
              <el-radio :label="1">暂停</el-radio>
              <el-radio :label="2">开启</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="">
            <el-button type="primary">确定</el-button>
            <el-button type="primary">确定并新增产品配置</el-button>
            <el-button @click="deleteShow = true">取消</el-button>
          </el-form-item>
        </section>
      </el-form>
    </div>
    <!--确认删除弹窗-->
    <el-dialog
      title="提示"
      :visible.sync="deleteShow"
      size="tiny">
      <p>取消后，改页面已编辑数据不保存，是否确认取消？</p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="deleteShow = false">确 定</el-button>
        <el-button @click="deleteShow = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "createSpike",
  data() {
    return {
      form: {},
      rules: {},
      date: '',
      checkList: [],
      radio: 0,
      status: 0,
      checked: false,
      //拦截0元预付费用户
      limitChecked: true,
      //自动开始结束
      autoChecked: false,
      value: '',
      options: [],
      checkAll: false,
      deleteShow: false
    }
  }
}
</script>

```
:::