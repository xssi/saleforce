<template>
<div class="page">
    <div class="top">
    <sale-header></sale-header>
    <sale-nav></sale-nav>
    </div>

    <div class="main_header">
        <!-- 业务机会 -->
        <el-row>
            <!-- 左侧 -->
            <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18" class="grid">
            <div class="left_image">
                <img src="https://ap15.salesforce.com/img/icon/t4v35/standard/task_120.png" />
            </div>
            <div class="left_title">
                <el-dropdown trigger="click">
                <span class="el-dropdown-link recently">
                    最近查看
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>今天的任务</el-dropdown-item>
                    <el-dropdown-item>未处理任务</el-dropdown-item>
                    <el-dropdown-item>未计划任务</el-dropdown-item>
                    <el-dropdown-item>已委派任务</el-dropdown-item>
                    <el-dropdown-item>逾期任务</el-dropdown-item>
                    <el-dropdown-item>重复任务</el-dropdown-item>
                    <el-dropdown-item>最近查看(固定列表)</el-dropdown-item>
                    <el-dropdown-item>最近已完成任务</el-dropdown-item>
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
                <a href="#">新建任务</a>
                </div>
            </div>
            </el-col>
        </el-row>
        <!-- 搜索 -->
        <el-row>
            <!-- 左侧 -->
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="grid grid_search">
            <div>2个项目</div>
            <div>•</div>
            <div>已在7 分钟前更新</div>
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
                    <el-dropdown-item>选择要显示的字段</el-dropdown-item>
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
                <el-table-column type="selection" width="55"  align="center"></el-table-column>
                <template v-for="(col ,index) in cols">      
                    <el-table-column v-if="col.type==='normal'" :prop="col.prop" sortable :label="col.label"  align="center" width="180"></el-table-column>
                    <el-table-column v-if="col.type==='sort'" :prop="col.prop" sortable :label="col.label"  align="center"  fixed="right" width="390">
                        <template slot-scope="scope">
                        <el-button size="mini">创建跟进任务</el-button>
                        <el-button size="mini" type="primary"  @click="edit">编辑</el-button>
                        <el-button size="mini" type="warning"  @click="deleteClient">删除</el-button>
                        <el-button size="mini"   @click="submitClient">创建跟进事件</el-button>
                        </template>
                    </el-table-column>
                </template>
            </el-table>
        </el-row>
        <!-- 新增dialog -->
        <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" width="950px">
        
        <el-form :model="form">
            <el-row class="topForm">
            <p class="dialogTitle">任务信息</p>
            <el-row>
                <el-col :span="11"><div class="grid-content bg-purple">
                    <el-form-item label="主题" :label-width="formLabelWidth">                      
                        <el-input autocomplete="off"></el-input>             
                    </el-form-item>
                </div></el-col>
            </el-row>
            <el-row>
                <el-col :span="11"><div class="grid-content bg-purple">
                    <el-form-item label="被分配人" :label-width="formLabelWidth">                      
                        <el-input autocomplete="off"></el-input>             
                    </el-form-item>
                </div></el-col>
                <el-col :span="11" :offset="1"><div class="grid-content bg-purple-light">
                    <el-form-item label="到期日期" :label-width="formLabelWidth">
                        <el-date-picker v-model="value1" class="pickDate" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                </div></el-col>
            </el-row>
            <el-row>
                <el-col :span="11"><div class="grid-content bg-purple">
                    <el-form-item label="名称" :label-width="formLabelWidth">
                        <el-input autocomplete="off" placeholder='搜索潜在客户...'></el-input>    
                    </el-form-item>
                </div></el-col>
                <el-col :span="11" :offset="1"><div class="grid-content bg-purple">
                    <el-form-item label="相关项" :label-width="formLabelWidth">
                        <el-input autocomplete="off" placeholder='搜索业务机会...'></el-input>     
                    </el-form-item>
                </div></el-col>
            </el-row>
            <el-row>
                <el-col :span="23"><div class="grid-content bg-purple-dark">
                    <el-form-item label="留言" :label-width="formLabelWidth">
                        <el-input type="textarea" :rows="2"></el-input>
                    </el-form-item>
                </div></el-col>
            </el-row>
        </el-row>
            <el-row class="bottomForm">
            <p class="dialogTitle">其他信息</p>
            <el-col :span="24"><div class="grid-content bg-purple">
                <el-row>
                    <el-col :span="11"><div class="grid-content bg-purple">
                        <el-form-item label="优先级" :label-width="formLabelWidth">
                            <el-select v-model="value" class="selectWidth" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>      
                        </el-form-item>
                    </div></el-col>
                    <el-col :span="11" :offset="1"><div class="grid-content bg-purple">
                        <el-form-item label="状态" :label-width="formLabelWidth">
                            <el-select v-model="value" class="selectWidth" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>    
                        </el-form-item>
                    </div></el-col>
                </el-row>
            </div></el-col>
            </el-row> 
            <el-row class="bottomForm">
                <p class="dialogTitle">其它信息</p>
                <el-col :span="24"><div class="grid-content bg-purple">
                    <el-row>
                        <el-col :span="11"><div class="grid-content bg-purple">
                            <el-form-item label="提醒设置" :label-width="formLabelWidth">
                                <el-checkbox v-model="checked"></el-checkbox>     
                            </el-form-item>
                        </div></el-col>
                        <el-col :span="11" :offset="1"><div class="grid-content bg-purple">
                            <el-form-item label="创建任务的重复序列" :label-width="formLabelWidth2">
                                <el-checkbox v-model="checked"></el-checkbox>  
                            </el-form-item>
                        </div></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="11"><div class="grid-content bg-purple">
                            <el-form-item label="日期" :label-width="formLabelWidth">                      
                                <el-date-picker v-model="value1" class="pickDate" type="date" placeholder="选择日期"></el-date-picker>            
                            </el-form-item>
                        </div></el-col>
                        <el-col :span="11" :offset="1"><div class="grid-content bg-purple-light">
                            <el-form-item label="时间" :label-width="formLabelWidth">
                                    <el-time-select v-model="value" :picker-options="{
                                      start: '08:30',
                                      step: '00:15',
                                      end: '18:30'
                                    }"
                                    placeholder="选择时间">
                                  </el-time-select>
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
        <el-dialog title="删除业务任务" :visible.sync="dialogFormVisible1">
            <p>是否确定要删除此业务任务？</p>
            <div slot="footer" class="dialog-footer">
            <el-button size="mini" @click="dialogFormVisible1 = false">取消</el-button>
            <el-button size="mini" type="primary">删除</el-button>
            </div>
        </el-dialog>
        <!-- 更改所有人dialog  -->
        <el-dialog title="更改业务机会所有人" :visible.sync="dialogFormVisible2">
        <el-form :model="form">
            <el-form-item>
            <el-input  placeholder="搜索人员..." autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="发送通知电子邮件"></el-checkbox>
            </el-checkbox-group>
            </el-form-item>
            <p>新所有人也将成为与Acme (Sample)相关记录的所有人，而这些记录此前由您所有。</p>
            <ul class="editClientListInfo">
                <li>备注和附件</li>
                <li>未处理活动</li>
            </ul>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible2 = false">取消</el-button>
            <el-button type="primary">提交</el-button>
        </div>
        </el-dialog>
    </div>
    <sale-footer></sale-footer>
</div>
</template>

<script>
import saleFooter from "@/components/common/saleFooter.vue";
import saleHeader from "@/components/common/saleHeader.vue";
import saleNav from "@/components/common/saleNav.vue";
export default {
data() {
    return {
        name: "",
        dialogTitle:'新增任务',
        dialogFormVisible:false,
        dialogFormVisible1:false,
        dialogFormVisible2:false,
        formLabelWidth1:'140px',
        formLabelWidth2:'160px',
        formLabelWidth:'110px',
        checkList: ['',''],
        checked: false,
        value1: '',
        value:'',
        form:{
                schoolId:3,
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
        value: '',
        cols: [
            { label: "主题", prop: "theme", type: "normal" },
            { label: "名称", prop: "taskName", type: "normal" },
            { label: "相关项", prop: "relatedItem", type: "normal" },
            { label: "到期日期", prop: "maturityDate", type: "normal" },
            { label: "被分配人别名", prop: "assignedPersonAlias", type: "normal" },
            { label: "操作", prop: "operate", type: "sort" }
        ],
        tableData: [
            {
                theme: "discussion",
                taskName: "Acme",
                relatedItem:'global media-270 Widgets',
                maturityDate: "2019-9-22",
                assignedPersonAlias: "王",
            },
            {
                theme: "discussion",
                taskName: "Acme",
                relatedItem:'global media-270 Widgets',
                maturityDate: "2019-9-22",
                assignedPersonAlias: "王",
            },
        ]
        };
    },
    components: {
        saleFooter,
        saleHeader,
        saleNav
    },
    methods:{
        edit(){
            this.dialogTitle='编辑';
            this.dialogFormVisible = true;
        },
        submitClient(){
        this.dialogFormVisible2 = true;
        },
        add(){
            this.dialogFormVisible = true;
        },
        deleteClient(){
            this.dialogFormVisible1 = true;
        },
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
background: #4BC076;
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
content: "任务";
font-size: 13px;
font-weight: 200;
position: absolute;
left: 5px;
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
margin: 10px 0 0 189px;
}
.cascader div {
background: #fff;
border: 1px solid rgb(221, 219, 218);
height: 22px;
line-height: 22px;
padding: 5px 20px;
font-size: 13px;
color: rgba(27, 82, 151, 1);
}
.cascader div a,
.cascader div a:hover {
color: rgba(27, 82, 151, 1);
}
.cascader div:first-child {
border-radius: 5px;
}
.cascader div:last-child {
/* border-radius: 0 5px 5px 0; */
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
.selectWidth,.pickDate{
width: 309px;
}
</style>