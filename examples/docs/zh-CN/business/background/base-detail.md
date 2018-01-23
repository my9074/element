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
            <h3>基本信息</h3>
          </div>
          <div class="section-content">
            <el-form class="info-list-inline">
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="ID：">
                    <span>mongo-h4s8nhv1rt</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="名称：">
                    <span>mongo-h4s8nhv1rt</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="计费类型：">
                    <span>包年包月</span>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="创建时间：">
                    <span>2017-05-11 11:13:54</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="到期时间：">
                    <span>2017-12-11 14:52:37</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="地域：">
                    <span>华北-北京</span>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="网络 ID：">
                    <span>vpc-rx9qtghw8y</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="子网 ID：">
                    <span>subnet-ffdrwbd5kf</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="可用区：">
                    <span>可用区A(主)可用区A(从)可用区B(隐藏)</span>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="状态：">
                    <span>运行</span>
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
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="数据库类型：">
                    <span>MongoDB</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="数据库版本：">
                    <span>mongodb-3.2</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="规格：">
                    <span>1核 2GB</span>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="存储空间：">
                    <span>10GB</span>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </section>

        <section class="section-wrapper">
          <div class="section-header">
            <h3>账号管理</h3>
          </div>
          <div class="section-content">
            <el-form class="info-list-inline">
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="用户名：">
                    <span>root</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="数据库名称：">
                    <span>admin</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="密码：">
                    <span>********(购买时候设置）</span>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </section>

        <section class="section-wrapper">
          <div class="section-header">
            <h3>连接信息（仅内网）</h3>
          </div>
          <div class="section-content">
            <el-form class="info-list-inline">
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="节点1：">
                    <span>jmongo-hb1-prod-mongo-h4s8nhv1rt1.jmiss.jcloud.com:27017</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="节点2：">
                    <span>jmongo-hb1-prod-mongo-h4s8nhv1rt2.jmiss.jcloud.com:27017</span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="副本集名称：">
                    <span>mgset-4176727665</span>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
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