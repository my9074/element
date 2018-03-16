<script>
  export default {
    name: 'spikeList',
    data() {
      return {
        form: {},
        rules: {},
        value: '',
        textarea: '',
        options: [],
        currentPage: 1,
        tableData: [
          {
            userPin: "00000001",
            dateTime: "2017-11-28 11:04:16",
            spaceAmount: "5",
            currentStorage: "1024M",
            dayTraffic: "1024M",
            yesterdayTraffic: "1024M",
            getRequests: "1000 次",
            putRequests: "1000 次"
          },
          {
            userPin: "00000002",
            dateTime: "2017-11-28 11:04:16",
            spaceAmount: "5",
            currentStorage: "1024M",
            dayTraffic: "1024M",
            yesterdayTraffic: "1024M",
            getRequests: "1000 次",
            putRequests: "1000 次"
          }
        ],
        tableData1: [
          {name: "00000001"},
          {name: "00000001"},
          {name: "00000001"},
          {name: "00000001"},
          {name: "00000001"},
          {name: "00000001"},
          {name: "00000001"}
        ],
        //弹窗显示隐藏
        dialogStorageVisible: false,
        removeFile: false,
        createFailed: false,
      };
    },
    methods: {
      removeFileConfirm() {
        this.$confirm('删除用户数据不可恢复，且为危险操作，请确认是否提交删除申请？', '提示', {
          cancelButtonText: '取 消',
          confirmButtonText: '确 认',
          type: 'warning'
        }).then(() => {
          this.removeFile = false
        })
      },
      handleSizeChange() {

      },
      handleCurrentChange() {

      },
      createStorage () {
        return new Promise ((resolve, reject) => {
          resolve('ajax success')
        }).then(data => {
          this.dialogStorageVisible = false
          this.createFailed = true
        })
      }
    }
  };
</script>


## List 列表

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

### 基础列表

基础的表格展示用法。

:::demo 当`el-table`元素中注入`data`对象数组后，在`el-table-column`中用`prop`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽。
```html
  <template>
  <div id="cloudStorageList">
    <div class="page-header">
      <h1>云存储</h1>
    </div>
    <div class="table-filter-top">
      <table>
        <tr>
          <td class="filter-box">
            <el-form :model="form" :rules="rules" label-width="100px">
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="用户 PIN：" prop="product">
                    <el-input placeholder="用户 PIN"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="地域：" prop="status">
                    <el-select v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </td>
          <td class="buttons-box">
            <el-button type="primary">查 询</el-button>
            <el-button>重 置</el-button>
          </td>
        </tr>
      </table>
    </div>
    <div class="table-action-top">
      <div class="wrapper-action-primary">
        <el-button type="primary" >资源报表</el-button><el-button type="primary" @click="removeFile = true">删除文件</el-button>
      </div>
    </div>
    <el-table :data="tableData" stripe>
      <el-table-column prop="userPin" label="用户 Pin"></el-table-column>
      <el-table-column prop="dateTime" label="开通时间"></el-table-column>
      <el-table-column prop="spaceAmount" label="空间数量"></el-table-column>
      <el-table-column prop="currentStorage" label="当前存储容量"></el-table-column>
      <el-table-column prop="dayTraffic" label="当天公网流量"></el-table-column>
      <el-table-column prop="yesterdayTraffic" label="昨日公网流量"></el-table-column>
      <el-table-column prop="getRequests" label="当天 Get 请求数"></el-table-column>
      <el-table-column prop="putRequests" label="当天 Put 请求数"></el-table-column>
      <el-table-column label="计费状态">
        <template slot-scope="scope">
          <span class="text-going"><i class="el-icon-loading"></i>运行中</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="120px">
        <template slot-scope="scope">
          <el-button type="text" @click="dialogStorageVisible = true">
            创建存储空间
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="table-footer">
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage"
                     :page-sizes="[10, 20, 50]"
                     :page-size="100" layout="total, sizes, prev, pager, next, jumper"
                     :total="400">
      </el-pagination>
    </div>
    <!--Dialog 创建存储空间-->
    <el-dialog
      title="创建存储空间"
      :visible.sync="dialogStorageVisible"
      size="tiny">
      <el-alert
        title="建议每个用户最多不超过1000个 Bucket"
        type="warning"
        show-icon
        :closable="false">
      </el-alert>
      <el-form label-width="80px">
        <el-form-item label="名称：">
          <el-input type="textarea" placeholder="输入存储空间的名称，以逗号隔开"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="createStorage()">保 存</el-button>
        <el-button @click="dialogStorageVisible = false">取 消</el-button>
      </span>
    </el-dialog>

    <!--Dialog 删除-->
    <el-dialog
      title="删除文件"
      :visible.sync="removeFile"
      size="tiny">
      <el-form label-width="90px">
        <el-form-item label="账户 ID：">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="用户 Pin：">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="空间名称：">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="文件名：">
          <el-input ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="removeFileConfirm">确 认</el-button>
        <el-button @click="removeFile = false">取 消</el-button>
      </span>
    </el-dialog>

    <!--Dialog 删除确认-->

    <!--Dialog 创建失败-->
    <el-dialog
      title="提示"
      :visible.sync="createFailed"
      size="tiny">
      <el-alert
        title="以下存储空间创建失败："
        type="error"
        show-icon
        :closable="false">
      </el-alert>
      <div class="table-action-top">
        <div class="wrapper-action-second">
          <el-button type="primary" size="mini">复制全部</el-button>
        </div>
      </div>
      <el-table
        :data="tableData1"
        height="200"
        stripe
        :show-header="false">
        <el-table-column
          prop="name"
          label="名称">
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="createFailed = false">关 闭</el-button>
      </span>
    </el-dialog>


    <!--Dialog 任务失败提示-->


  </div>
</template>
<script>
  export default {
    name: 'spikeList',
    data() {
      return {
        form: {},
        rules: {},
        value: '',
        textarea: '',
        options: [],
        currentPage: 1,
        tableData: [
          {
            userPin: "00000001",
            dateTime: "2017-11-28 11:04:16",
            spaceAmount: "5",
            currentStorage: "1024M",
            dayTraffic: "1024M",
            yesterdayTraffic: "1024M",
            getRequests: "1000 次",
            putRequests: "1000 次"
          },
          {
            userPin: "00000002",
            dateTime: "2017-11-28 11:04:16",
            spaceAmount: "5",
            currentStorage: "1024M",
            dayTraffic: "1024M",
            yesterdayTraffic: "1024M",
            getRequests: "1000 次",
            putRequests: "1000 次"
          }
        ],
        tableData1: [
          {name: "00000001"},
          {name: "00000001"},
          {name: "00000001"},
          {name: "00000001"},
          {name: "00000001"},
          {name: "00000001"},
          {name: "00000001"}
        ],
        //弹窗显示隐藏
        dialogStorageVisible: false,
        removeFile: false,
        createFailed: false,
      };
    },
    methods: {
      removeFileConfirm() {
        this.$confirm('删除用户数据不可恢复，且为危险操作，请确认是否提交删除申请？', '提示', {
          cancelButtonText: '取 消',
          confirmButtonText: '确 认',
          type: 'warning'
        }).then(() => {
          this.removeFile = false
        })
      },
      handleSizeChange() {

      },
      handleCurrentChange() {

      },
      createStorage () {
        return new Promise ((resolve, reject) => {
          resolve('ajax success')
        }).then(data => {
          this.dialogStorageVisible = false
          this.createFailed = true
        })
      }
    }
  };
</script>

```
:::