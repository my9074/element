<script>
export default {
  name: "mongodbDetail",
  data() {
    return {
      activeName2: 'first',
      tableData: [
        {
          id: "3912211",
          task: "禁用",
          operator: "erp账户",
          balance: "100",
          createTime: "2016-07-31 19:03:44",
          updateTime: "2016-07-31 19:03:44"
        },
        {
          id: "3912211",
          task: "发放",
          operator: "erp账户",
          balance: "100",
          createTime: "2016-07-31 19:03:44",
          updateTime: "2016-07-31 19:03:44"
        }
      ]
    };
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
};
</script>


## Detail 详情

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

### 基础详情

基础的表格展示用法。

:::demo 当`el-table`元素中注入`data`对象数组后，在`el-table-column`中用`prop`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽。
```html
<template>
  <div id="mongodbDetail">
    <div class="page-header">
      <h1>查看详情</h1>
      <a href="#" class="button-back">返回</a>
    </div>
        <section class="section-wrapper">
      <div class="section-header">
        <h3>代金券信息</h3>
      </div>
      <div class="section-content">
        <el-form class="info-list-inline">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="用户Pin：">
                <span>yangxinran</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="代金券编码：">
                <span>ID11002</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="适用产品：">
                <span>全部</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="金额：">
                <span>3000</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="余额：">
                <span>3000</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="有效时间：">
                <span>2016-07-31 19:03:44 到 2016-07-31 19:03:44</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="创建时间：">
                <span>2016-07-31 19:03:44</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="计费类型：">
                <span>配置计费</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="购买方式：">
                <span>新购|续费</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="发放方式：">
                <a @click.prevent="receiveShow = true">链接领取</a>
                <span>定向发放</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="状态：">
                <span class="text-success">生效</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="绑定用户名：">
                <span>--</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="绑定时间：">
                <span>--</span>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </section>
    <section class="section-wrapper">
      <div class="section-header">
        <h3>配置信息</h3>
      </div>
      <div class="section-content">
        <el-form class="info-list-inline">
          <el-form-item label="申请人：">
            <span>自动获取ERP姓名</span>
          </el-form-item>
          <el-form-item label="申请部门：">
            <span>ERP获取</span>
          </el-form-item>
          <el-form-item label="申请理由：">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus .</span>
          </el-form-item>
          <el-form-item label="拒绝理由：">
            <span>这个选项是选填，如果拒绝时候没有填写则不展示</span>
          </el-form-item>
        </el-form>
      </div>
    </section>
    <section class="section-wrapper">
      <div class="section-header">
        <h3>只读实例</h3>
      </div>
      <div class="section-content">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="id" label="ID"></el-table-column>
          <el-table-column prop="task" label="操作任务"></el-table-column>
          <el-table-column prop="operator" label="操作人"></el-table-column>
          <el-table-column prop="balance" label="余额"></el-table-column>
          <el-table-column prop="createTime" label="创建时间"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间"></el-table-column>
        </el-table>
        <div class="table-footer">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 50]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
          </el-pagination>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "mongodbDetail",
  data() {
    return {
      activeName2: 'first'
    };
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
};
</script>


```
:::