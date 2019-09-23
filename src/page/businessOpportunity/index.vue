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
                <img src="https://ap15.salesforce.com/img/icon/t4v35/standard/opportunity_120.png" />
            </div>
            <div class="left_title">
                <el-dropdown trigger="click">
                <span class="el-dropdown-link recently">
                    最近查看
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="searchTableData">本月关闭</el-dropdown-item>
                    <el-dropdown-item @click.native="searchTableData">全部业务机会</el-dropdown-item>
                    <el-dropdown-item @click.native="searchTableData">我的业务机会</el-dropdown-item>
                    <el-dropdown-item @click.native="searchTableData">下个月关闭</el-dropdown-item>
                    <el-dropdown-item @click.native="searchTableData">新建本周</el-dropdown-item>
                    <el-dropdown-item @click.native="searchTableData">业务机会漏斗</el-dropdown-item>
                    <el-dropdown-item @click.native="searchTableData">已赢得</el-dropdown-item>
                    <el-dropdown-item @click.native="searchTableData">最近查看(固定列表)</el-dropdown-item>
                    <el-dropdown-item @click.native="searchTableData">最近已查看业务机会</el-dropdown-item>
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
            </div>
            </el-col>
        </el-row>
        <!-- 搜索 -->
        <el-row>
            <!-- 左侧 -->
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="grid grid_search">
            <div>7个项目</div>
            <div>•</div>
            <div>8 个项目 • 已在16 分钟前更新</div>
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
                <el-table-column type="selection" width="55"  align="center"></el-table-column>
                <template v-for="(col ,index) in cols">      
                    <el-table-column v-if="col.type==='normal'" :prop="col.prop" sortable :label="col.label"  align="center" width="180"></el-table-column>
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
            <p class="dialogTitle">业务机会信息</p>
            <el-row>
                <el-col :span="11"><div class="grid-content bg-purple">
                    <el-form-item label="业务机会名" :label-width="formLabelWidth">                      
                        <el-input autocomplete="off"></el-input>             
                    </el-form-item>
                </div></el-col>
                <el-col :span="11" :offset="1"><div class="grid-content bg-purple-light">
                    <el-form-item label="业务机会所有人" :label-width="formLabelWidth">
                        <el-input autocomplete="off"></el-input>
                    </el-form-item>
                </div></el-col>
            </el-row>
            <el-row>
                <el-col :span="11"><div class="grid-content bg-purple">
                    <el-form-item label="客户名" :label-width="formLabelWidth">                      
                        <el-input autocomplete="off" placeholder="搜索客户..."></el-input>             
                    </el-form-item>
                </div></el-col>
                <el-col :span="11" :offset="1"><div class="grid-content bg-purple-light">
                    <el-form-item label="结束日期" :label-width="formLabelWidth">
                        <el-date-picker v-model="value1" class="pickDate" type="date" placeholder="选择日期"></el-date-picker>
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
                <el-col :span="11" :offset="1"><div class="grid-content bg-purple">
                    <el-form-item label="阶段" :label-width="formLabelWidth">
                        <el-select v-model="value" class="selectWidth" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>    
                    </el-form-item>
                </div></el-col>
            </el-row>
            <el-row>
                <el-col :span="11"><div class="grid-content bg-purple">
                    <el-form-item label="主要市场活动源" :label-width="formLabelWidth">
                        <el-input autocomplete="off" placeholder="搜索市场活动..."></el-input>       
                    </el-form-item>
                </div></el-col>
                <el-col :span="11" :offset="1"><div class="grid-content bg-purple">
                    <el-form-item label="可能性%" :label-width="formLabelWidth">
                        <el-input autocomplete="off"></el-input>     
                    </el-form-item>
                </div></el-col>
            </el-row>
            <el-row>
                <el-col :span="11"><div class="grid-content bg-purple">
                    <el-form-item label="Budget Confirmed" :label-width="formLabelWidth">
                        <el-checkbox v-model="checked"></el-checkbox>      
                    </el-form-item>
                </div></el-col>
                <el-col :span="11" :offset="1"><div class="grid-content bg-purple">
                    <el-form-item label="金额" :label-width="formLabelWidth">
                        <el-input autocomplete="off"></el-input>
                    </el-form-item>
                </div></el-col>
            </el-row>
            <el-row>
                <el-col :span="11"><div class="grid-content bg-purple">
                    <el-form-item  :offset="2" label="Discovery Completed" :label-width="formLabelWidth">
                        <el-checkbox v-model="checked"></el-checkbox>      
                    </el-form-item>
                </div></el-col>
            </el-row>
            <el-row>
                <el-col :span="11"><div class="grid-content bg-purple">
                    <el-form-item  :offset="2" label="ROI Analysis Completed" :label-width="formLabelWidth">
                        <el-checkbox v-model="checked"></el-checkbox>  
                    </el-form-item>
                </div></el-col>
            </el-row>
            <el-row>
                <el-col :span="11"><div class="grid-content bg-purple">
                    <el-form-item label="Loss Reason" :label-width="formLabelWidth">
                        <el-select v-model="value" class="selectWidth" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select> 
                    </el-form-item>
                </div></el-col>
            </el-row>
        </el-row>
            <el-row class="bottomForm">
            <p class="dialogTitle">其他信息</p>
            <el-col :span="24"><div class="grid-content bg-purple">
                <el-row>
                    <el-col :span="11"><div class="grid-content bg-purple">
                        <el-form-item label="下一步" :label-width="formLabelWidth">
                            <el-input autocomplete="off"></el-input>     
                        </el-form-item>
                    </div></el-col>
                    <el-col :span="11" :offset="1"><div class="grid-content bg-purple">
                        <el-form-item label="潜在客户来源" :label-width="formLabelWidth">
                            <el-select v-model="value" class="selectWidth" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>    
                        </el-form-item>
                    </div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="11"><div class="grid-content bg-purple-dark">
                        <el-form-item label="街道" :label-width="formLabelWidth">
                            <el-input type="textarea" :rows="2"></el-input>
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
        <el-dialog title="删除业务机会" :visible.sync="dialogFormVisible1">
            <p>是否确定要删除此业务机会？</p>
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
        <!-- 选择要使用的字段dialog -->
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
export default {
data() {
    return {
        name: "",
        dialogTitle:'新增业务机会',
        dialogFormVisible:false,
        dialogFormVisible1:false,
        dialogFormVisible2:false,
        dialogFormVisible3:false,
        formLabelWidth1:'140px',
        formLabelWidth:'110px',
        checkList: ['',''],
        checked: false,
        value1: '',
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
        value: [],
        data1:{
            "ROOT": {
                "BODY": {
                    "seOppInfoEnum": "all",
                    "seOppInfoInVo": {
                        "findLikeString": "需要前台取到值放里面（模糊查询的字符串）"
                    }
                },
                "HEADER": {}
            }
        },
        cols: [
            { label: "业务机会名", prop: "oppName", type: "normal" },
            { label: "客户名", prop: "custName", type: "normal" },
            { label: "阶段", prop: "stage", type: "normal" },
            { label: "结束日期", prop: "closeDate", type: "normal" },
            { label: "业务机会所有人别名", prop: "oppOwner", type: "normal" },
            { label: "操作", prop: "operate", type: "sort" }
        ],
        allCols: [
            { label: "客户名", prop: "custName", type: "normal" },
            { label: "创建人别名", prop: "oppName", type: "normal" },
            { label: "业务机会所有人别名", prop: "oppOwner", type: "normal" },
            { label: "商机编码", prop: "entId", type: "normal" },
            { label: "结束日期", prop: "closeDate", type: "normal" },
            { label: "类型", prop: "type", type: "normal" },
            { label: "商机阶段", prop: "stage", type: "normal" },
            { label: "主要市场活动", prop: "campaignId", type: "normal" },
            { label: "可能性", prop: "probability", type: "normal" },
            { label: "金额", prop: "amount", type: "normal" },
            { label: "是否完成", prop: "discoveryCompleted", type: "normal" },
            { label: "下一步", prop: "nextStep", type: "normal" },
            { label: "潜在客户来源", prop: "leadSource", type: "normal" },
            { label: "创建人别名", prop: "createName", type: "normal" },
            { label: "创建日期", prop: "createTime", type: "normal" },
            { label: "上次修改人别名", prop: "operateName", type: "normal" },
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
            // console.log(newCols)
            this.searchTableData();
        },
        // 查询
        searchTableData(){
            this.$axios
            .post('http://172.22.129.125:8880/saleCenterApp/doOppFind',JSON.stringify(this.data1),
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
                            if(key=='custName'){
                                row='"'+key+'":"'+data.OUT_DATA[i][key]+'"';
                            }else if(key==this.cols[j].prop){
                                row=row+',"'+key+'":"'+data.OUT_DATA[i][key]+'"';
                            }
                        }
                        
                    }
                    row=JSON.parse('{'+row+'}');
                    newTableData.push(row); 
                }
            
                // console.log(newTableData) ;
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
background: #FCB95B;
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
content: "业务机会";
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
margin: 10px 0 0 215px;
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