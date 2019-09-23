<template>
  <div class="page">
    <div class="top">
      <sale-header></sale-header>
      <sale-nav></sale-nav>
    </div>

    <div class="main_header">
      <!-- 潜在客户 -->
      <el-row>
        <!-- 左侧 -->
        <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18" class="grid">
          <div class="left_image">
            <img src="https://ap15.salesforce.com/img/icon/t4v35/standard/account_120.png" />
          </div>
          <div class="left_title">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link recently">
                最近查看
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="searchTableData">全部客户</el-dropdown-item>
                <el-dropdown-item @click.native="searchTableData">我的客户</el-dropdown-item>
                <el-dropdown-item @click.native="searchTableData">最近查看(固定列表 )</el-dropdown-item>
                <el-dropdown-item @click.native="searchTableData">最近已查看客户</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="left_button">
            <i class="el-icon-s-release"></i>
          </div>
        </el-col>
        <!-- 右侧 -->
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <div class="cascader">
            <div @click="add">
              <a href="#">新建</a>
            </div>
            <div>
              <a href="#">导入</a>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- 搜索 -->
      <el-row>
        <!-- 左侧 -->
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="grid grid_search">
          <div>0个项目</div>
          <div>.</div>
          <div>已在1小时前更新</div>
        </el-col>
        <!-- 搜索框 -->
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <el-input v-model="name" placeholder="搜索此列表" prefix-icon="el-icon-search" class="search"></el-input>
        </el-col>
        <!-- 右侧 -->
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="search_icon">
          <div>
              <el-dropdown>
                <span class="el-dropdown-link">
                  <a href="#" class="el-icon-s-tools"></a>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>新建</el-dropdown-item>
                  <el-dropdown-item>复制</el-dropdown-item>
                  <el-dropdown-item>重命名</el-dropdown-item>
                  <el-dropdown-item>共享设置</el-dropdown-item>
                  <el-dropdown-item>显示列表筛选器</el-dropdown-item>
                  <el-dropdown-item @click.native="showContactCols">选择要显示的字段</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                  <el-dropdown-item>重置列宽</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
           
          </div>
          <div>
              <el-dropdown>
                <span class="el-dropdown-link">
                  <a href="#" class="el-icon-s-grid"></a>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>表</el-dropdown-item>
                  <el-dropdown-item>看板</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>           
          </div>
          <div>
            <a href="#" class="el-icon-back"></a>
          </div>
          <div>
            <a href="#" class="el-icon-edit"></a>
          </div>
          <div>
            <a href="#" class="el-icon-magic-stick"></a>
          </div>
          <div>
            <a href="#" class="el-icon-s-check"></a>
          </div>
        </el-col>
      </el-row>
      <!-- dropdown -->
      <el-row class="dropdown">
        <el-table ref="multipleTable" class="tb-edit" highlight-current-row :data="tableData" style="width: 100%">
          <el-table-column type="index" width="50" align="center"></el-table-column>
          <el-table-column type="selection" width="40"  align="center"></el-table-column>
          <template v-for="(col ,index) in cols">      
              <el-table-column v-if="col.type==='normal'" :prop="col.prop" sortable :label="col.label"  align="center"></el-table-column>
              <el-table-column v-if="col.type==='sort'" :prop="col.prop" sortable :label="col.label"  align="center"  fixed="right" width="280">
                  <template slot-scope="scope">
                  <el-button size="mini" type="primary" @click="edit">编辑</el-button>
                  <el-button size="mini" type="warning"  @click="deleteClient">删除</el-button>
                  <el-button size="mini"   @click="submitClient">更改所有人</el-button>
                  </template>
              </el-table-column>
          </template>
      </el-table>
      </el-row>
      <!-- 新增dialog -->
      <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" width="950px">
          
          <el-form :model="form">
            <el-row class="topForm">
              <p class="dialogTitle">客户信息</p>
              <el-row>
                <el-col :span="11"><div class="grid-content bg-purple">
                    <el-form-item label="客户名" :label-width="formLabelWidth">
                        <el-input autocomplete="off"></el-input>
                      </el-form-item>
                </div></el-col>
                <el-col :span="11" :offset="1"><div class="grid-content bg-purple-light">
                    <el-form-item label="客户所有人" :label-width="formLabelWidth">
                        <el-input autocomplete="off"></el-input>
                      </el-form-item>
                </div></el-col>
              </el-row>
              <el-row>
                <el-col :span="11"><div class="grid-content bg-purple">
                    <el-form-item label="类型" :label-width="formLabelWidth">
                        <el-select v-model="value" class="selectWidth" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                          </el-select>
                      </el-form-item>
                </div></el-col>
                <el-col :span="11" :offset="1"><div class="grid-content bg-purple-light">
                    <el-form-item label="母公司" :label-width="formLabelWidth">
                        <el-input autocomplete="off" placeholder="搜索客户..."></el-input>
                      </el-form-item>
                </div></el-col>
              </el-row>
              <el-row>
                <el-col :span="11"><div class="grid-content bg-purple">
                    <el-form-item label="网址" :label-width="formLabelWidth">
                        <el-input autocomplete="off"></el-input>
                      </el-form-item>
                </div></el-col>
                <el-col :span="11" :offset="1"><div class="grid-content bg-purple-light">
                    <el-form-item label="电话" :label-width="formLabelWidth">
                        <el-input autocomplete="off"></el-input>
                      </el-form-item>
                </div></el-col>
              </el-row>
              <el-row>
                <el-col :span="11"><div class="grid-content bg-purple">
                    <el-form-item  :offset="2" label="员工" :label-width="formLabelWidth">
                        <el-input autocomplete="off"></el-input>
                      </el-form-item>
                    
                </div></el-col>
                <el-col :span="11" :offset="1"><div class="grid-content bg-purple-light">
                    <el-form-item label="行业" :label-width="formLabelWidth">
                        <el-select v-model="value" class="selectWidth" placeholder="请选择">
                          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                      </el-form-item>
                </div></el-col>
              </el-row>
              <el-col :span="11"><div class="grid-content bg-purple-light">
                  <el-form-item label="描述" :label-width="formLabelWidth">
                      <el-input type="textarea" :rows="2"></el-input>
                  </el-form-item>
              </div></el-col>
          </el-row>
           
            <el-row class="bottomForm">
              <p class="dialogTitle">地址信息</p>
              <el-col :span="12"><div class="grid-content bg-purple">
                <p class="dialogSecTitle">开单地址</p>
                <el-row>
                  <el-col :span="22"><div class="grid-content bg-purple">
                    <p></p>
                    <el-form-item label="开单国家/地区" :label-width="formLabelWidth">
                        <el-input autocomplete="off"></el-input>
                    </el-form-item>
                  </div></el-col>
                  <el-col :span="22"><div class="grid-content bg-purple-light">
                    <el-form-item label="开单州/省" :label-width="formLabelWidth">
                      <el-input autocomplete="off"></el-input>
                    </el-form-item>
                  </div></el-col>
                </el-row>
                <el-row>
                  <el-col :span="22"><div class="grid-content bg-purple-dark">
                      <el-form-item label="开单城市" :label-width="formLabelWidth">
                        <el-input autocomplete="off"></el-input>
                      </el-form-item>
                  </div></el-col>
                </el-row>
                <el-row>
                  <el-col :span="22"><div class="grid-content bg-purple-dark">
                      <el-form-item label="开单街道" :label-width="formLabelWidth">
                          <el-input type="textarea" :rows="2"></el-input>
                      </el-form-item>
                  </div></el-col>
                </el-row>
                <el-row>
                  <el-col :span="22"><div class="grid-content bg-purple-dark">
                      <el-form-item label="开单邮政编号" :label-width="formLabelWidth">
                        <el-input autocomplete="off"></el-input>
                      </el-form-item>
                  </div></el-col>
                </el-row>
              </div></el-col>
              <el-col :span="12"><div class="grid-content bg-purple-light">
                  <p class="dialogSecTitle">发货地址</p>
                  <el-row>
                    <el-col :span="22"><div class="grid-content bg-purple">
                      <el-form-item label="发货国家/地区" :label-width="formLabelWidth">
                          <el-input autocomplete="off"></el-input>
                      </el-form-item>
                    </div></el-col>
                    <el-col :span="22"><div class="grid-content bg-purple-light">
                      <el-form-item label="发货州/省" :label-width="formLabelWidth">
                        <el-input autocomplete="off"></el-input>
                      </el-form-item>
                    </div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="22"><div class="grid-content bg-purple-dark">
                        <el-form-item label="发货城市" :label-width="formLabelWidth">
                          <el-input autocomplete="off"></el-input>
                        </el-form-item>
                    </div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="22"><div class="grid-content bg-purple-dark">
                        <el-form-item label="发货街道" :label-width="formLabelWidth">
                            <el-input type="textarea" :rows="2"></el-input>
                        </el-form-item>
                    </div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="22"><div class="grid-content bg-purple-dark">
                        <el-form-item label="发货邮政编号" :label-width="formLabelWidth">
                          <el-input autocomplete="off"></el-input>
                        </el-form-item>
                    </div></el-col>
                  </el-row>
              </div></el-col>
            </el-row>  
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button @click="dialogFormVisible = false">保存并新建</el-button>
            <el-button type="primary" @click="save">确 定</el-button>
          </div>
      </el-dialog>
      <!-- 删除dialog  -->
      <el-dialog title="删除客户" :visible.sync="dialogFormVisible1">
          <p>是否确定要删除此客户？</p>
          <div slot="footer" class="dialog-footer">
            <el-button size="mini" @click="dialogFormVisible1 = false">取消</el-button>
            <el-button size="mini" type="primary">删除</el-button>
          </div>
        </el-dialog>
      <!-- 更改所有人dialog  -->
      <el-dialog title="更改客户所有人" :visible.sync="dialogFormVisible2">
        <el-form :model="form">
          <el-form-item>
            <el-input  placeholder="搜索人员..." autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="转移其他人所有的未处理业务机会"></el-checkbox><br>
              <el-checkbox label="转移客户所有人的已结束业务机会"></el-checkbox><br>
              <el-checkbox label="转移客户所有人的未处理个案"></el-checkbox><br>
              <el-checkbox label="转移此客户所有人的所有个案"></el-checkbox><br>
              <el-checkbox label="发送通知电子邮件"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <p>新所有人也将成为与Acme (Sample)相关记录的所有人，而这些记录此前由您所有。</p>
          <ul class="editClientListInfo">
            <li>未处理业务机会</li>
            <li>合同处于草稿和正在批准状态</li>
            <li>处于草稿状态的订单（转移或未转移合同）</li>
            <li>联系人</li>
            <li>备注和附件</li>
            <li>未处理活动</li>
          </ul>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible2 = false">取 消</el-button>
          <el-button type="primary">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 选择要使用的字段弹框 -->
      <el-dialog title="选择要显示的字段" :visible.sync="dialogFormVisible3">
        <el-transfer v-model="value" :props="{key: 'prop',label: 'label'}" :data="allCols" @change="transferChange" :titles="['可用字段', '可视字段']"></el-transfer>
      </el-dialog>
    </div>
    <sale-footer></sale-footer>
  </div>
</template>

<script>
import saleFooter from "@/components/common/saleFooter.vue";
import saleHeader from "@/components/common/saleHeader.vue";
import saleNav from "@/components/common/saleNav.vue";
import qs from 'qs';

export default {
  data() {
    return {
      name: "",
      dialogTitle:'新增客户',
      dialogFormVisible:false,
      dialogFormVisible1:false,
      dialogFormVisible2:false,
      dialogFormVisible3:false,
      formLabelWidth:'110px',
      checkList: ['',''],
      form:{
     		
     	},
      options: [{
          value: '选项1',
          label: 'acme'
      }, {
          value: '选项2',
          label: 'needs analysis'
      }, {
          value: '选项3',
          label: 'qualification'
      }, {
          value: '选项4',
          label: 'negotiation'
      }, {
          value: '选项5',
          label: 'closed lost'
      }],
      data1:{
        "ROOT": {
           "BODY": {
              "SELECTCUSTINFOIN": {
                  "FIND_MSG":""
               },
               "STATUS_ENUM": "1"
           },
           "HEADER": {}
        }
      },
      value: [],
      cols: [
          { label: "客户名", prop: "CUST_NAME", type: "normal" },
          { label: "客户所有人别名", prop: "CUST_OWNER", type: "normal" },
          { label: "员工", prop: "EMPLOYEES", type: "normal" },
          { label: "电话", prop: "PHONE", type: "normal" },         
          { label: "操作", prop: "operate", type: "sort" }
      ],
      allCols: [
          { label: "城市", prop: "CITY", type: "normal" },
          { label: "国家", prop: "COUNTRY", type: "normal" },
          { label: "客户名", prop: "CUST_NAME", type: "normal" },
          { label: "电话", prop: "PHONE", type: "normal" },
          { label: "客户所有人别名", prop: "CUST_OWNER", type: "normal" },
          { label: "创建人别名", prop: "CREATE_NAME", type: "normal" },
          { label: "创建日期", prop: "CREATE_TIME", type: "normal" },               
          { label: "街道", prop: "STREET", type: "normal" },
          { label: "邮政编码", prop: "POSTCODE", type: "normal" },
          { label: "省", prop: "PROVINCE", type: "normal" },          
          { label: "类型", prop: "CUST_TYPE", type: "normal" },
          { label: "母公司", prop: "PARENT_ACCOUNT", type: "normal" },
          { label: "网址", prop: "WEBSITE", type: "normal" },
          { label: "行业", prop: "INDUSTRY", type: "normal" },
          { label: "员工", prop: "EMPLOYEES", type: "normal" },
          { label: "客户编码", prop: "CUST_ID", type: "normal" },
          { label: "企业编码", prop: "ENT_ID", type: "normal" },
          { label: "描述", prop: "DESCRIPTION", type: "normal" },
          { label: "开单邮政编码", prop: "BILLING_ADDRESS", type: "normal" },
          { label: "发货邮政编码", prop: "SHIPPING_ADDRESS", type: "normal" },
          { label: "创建人工号", prop: "CREATE_LOGIN", type: "normal" },
          { label: "操作人工号", prop: "OPERATE_LOGIN", type: "normal" },
          { label: "上次修改人别名", prop: "OPERATE_NAME", type: "normal" },
          { label: "上次修改日期", prop: "OPERATE_TIME", type: "normal" },
          // { label: "操作", prop: "operate", type: "sort" }
      ],
      
      tableData: [],
    };
  },
  components: {
    saleFooter,
    saleHeader,
    saleNav
  },
  created:function(){
    // 初始化
    this.searchTableData();
  },
  methods:{
    // 穿梭框获取表格列可视字段
    transferChange(value, direction, movedKeys){
        var currentCols=value;
        var newCols=[];
        for(var i in currentCols){
            for(var j in this.allCols){
                if(currentCols[i]===this.allCols[j].prop){
                    newCols.push(this.allCols[j]);
                }
            }
        }
        var operate=JSON.parse('{ "label": "操作", "prop": "operate", "type": "sort" }');
        newCols.push(operate);
        this.cols=newCols;
         console.log(newCols)
        this.searchTableData();
    },
    // 查询
    searchTableData(){
        this.$axios
        .post('http://172.22.129.113:8880/saleCenterApp/selectfunction',JSON.stringify(this.data1),
        { headers: { "Content-Type": "application/json" } }
        )
        .then(successResponse => {
          this.responseResult = JSON.stringify(successResponse.data)
          var data=successResponse.data.ROOT.BODY;
          var newTableData=[];
          var row=[];
          if (data.RETURN_CODE === '0') {
            for(var i in data.OUT_DATA){
                for(var key in data.OUT_DATA[i]){
                    for(var j in this.cols){
                        if(key=='CUST_NAME'){
                            row='"'+key+'":"'+data.OUT_DATA[i][key]+'"';
                        }else if(key==this.cols[j].prop){
                            // console.log(key,data.OUT_DATA[i][key])
                            // console.log(this.cols[j].prop,222)
                            row=row+',"'+key+'":"'+data.OUT_DATA[i][key]+'"';
                            console.log(row);
                        }
                    }
                    
                }
                row=JSON.parse('{'+row+'}');
                newTableData.push(row); 
            }
            
             console.log(newTableData) ;
            this.tableData=newTableData;
          }else{
            console.log('返回码错误')
          }
        })
        .catch(failResponse => {
          console.log('调用失败')
        })
    },
    // 穿梭框显示
    showContactCols(){
        this.dialogFormVisible3 = true;
    },
    // 编辑
    edit(){
        this.dialogTitle='编辑';
        this.dialogFormVisible = true;
    },
    //更改所有人 
    submitClient(){
        this.dialogFormVisible2 = true;
    },
    // 新增
    add(){
        this.dialogFormVisible = true;
    },
    // 删除
    deleteClient(){
        this.dialogFormVisible1 = true;
    },
    // 保存
    save(){
        
    }
  },
};
</script>
<style  scoped>
.page {
  height: 100%;
  width: 100%;
  background: linear-gradient(135deg, #000781, #23b7cb);
}
/* 一栏 */
.main_header {
  height:460px;
  overflow-x: scroll;
  background: rgb(243, 242, 242);
  border: 1px solid rgb(221, 219, 218);
  margin: 10px;
  border-radius: 2px 2px 0 0;
}
.grid {
  display: flex;
  align-items: center;
}
.grid .left_image {
  height: 30px;
  width: 30px;
  background: #7F8DE1;
  border: 1px transparent solid;
  border-radius: 2px;
  margin: 10px;
}
.grid .left_image img {
  width: 100%;
  height: 100%;
}
.grid .left_title {
  margin-top: 10px;
}
.grid .left_title .recently {
  font-size: 18px;
  color: black;
  font-weight: 800;
  position: relative;
}
.grid .left_title .recently::before {
  content: "客户";
  font-size: 13px;
  font-weight: 200;
  position: absolute;
  left: 0;
  top: -15px;
  color: #000;
}
.grid .left_button {
height: 20px;
width: 20px;
background: #fff;
border: 1px solid #DDDBDA;
border-radius: 2px;
margin: 10px 0 0 10px;
color: #006DCC;
font-size: 16px;
font-weight: 600;
text-align: center;
line-height: 20px;
}
.cascader {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 0 185px;
}
.cascader div {
  background: #fff;
  border: 1px solid rgb(221, 219, 218);
  height: 25px;
  line-height: 25px;
  padding: 5px 10px;
  font-size: 13px;
  color: rgba(27, 82, 151, 1);
}
.cascader div a,
.cascader div a:hover {
  color: rgba(27, 82, 151, 1);
}
.cascader div:first-child {
  border-radius: 5px 0 0 5px;
}
.cascader div:last-child {
  border-radius: 0 5px 5px 0;
}
/* 二栏 */
.grid_search div {
  margin: 5px 0 5px 10px;
  height: 30px;
  line-height: 30px;
}
.grid_search .search {
  height: 20px;
}
.search_icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin-top: 3px;
}
.search_icon div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  background: white;
  width: 30px;
  /* border: 1px solid rgb(221, 219, 218); */
  border-radius: 3px;
}
.search_icon div a {
  line-height: 30px;
}
.dropdown {
  margin-top: .6rem;
}
.dialogTitle{
  font-size: .875rem;
  background-color: rgb(243, 242, 242);
  padding: 5px 0;
  margin-top: -30px;
  text-indent: 1.6rem;
  margin-bottom:20px; 
}
.dialogSecTitle{
  text-indent: 2.6rem;
  font-weight: 600;
}
.bottomForm{
  margin-top: 35px;
}
.editClientListInfo {
  margin: 20px 0 0 20px;
  color: #000;
}
.editClientListInfo li{
  list-style-type: circle;
  padding: 8px 0;
}
.selectWidth{
  width: 309px;
}
</style>