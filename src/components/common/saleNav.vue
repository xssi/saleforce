<template>
    <div class="saleNav">        
        <el-row :gutter="20">        
            <el-menu  class="el-menu-demo el-nav" mode="horizontal" background-color="#fff"
            text-color="#000"
            active-text-color="#000">
                <el-menu-item index="/"><router-link to="/">主页</router-link></el-menu-item>
                <el-submenu index="/contact">
                    <template slot="title"><router-link to="/contact">联系人</router-link></template>
                    <el-menu-item index="2-1">新建联系人</el-menu-item>
                    <el-menu-item index="2-2">最近记录</el-menu-item>
                    <el-menu-item index="2-3">我的联系人</el-menu-item>
                    <el-menu-item index="2-3">全部联系人</el-menu-item>
                    <el-menu-item index="2-3">最近已查看联系人</el-menu-item>
                </el-submenu>
                <el-submenu index="/client">
                    <template slot="title"><router-link to="/client">客户</router-link></template>
                    <el-menu-item index="2-1">新建客户</el-menu-item>
                    <el-menu-item index="2-2">最近记录</el-menu-item>
                    <el-menu-item index="2-3">全部客户</el-menu-item>
                    <el-menu-item index="2-3">我的客户</el-menu-item>
                    <el-menu-item index="2-3">最近已查看客户</el-menu-item>
                </el-submenu>
                <el-submenu index="/potentialCustomers">
                    <template slot="title"><router-link to="/potentialCustomers">潜在客户</router-link></template>
                    <el-menu-item index="2-1">新建潜在客户</el-menu-item>
                    <el-menu-item index="2-2">最近记录</el-menu-item>
                    <el-menu-item index="2-3">最近已查看潜在客户</el-menu-item>
                    <el-menu-item index="2-3">今天的潜在客户</el-menu-item>
                    <el-menu-item index="2-3">全部未处理潜在客户</el-menu-item>
                    <el-menu-item index="2-3">在新选项卡中打开“最近查看”</el-menu-item>
                </el-submenu>
                <el-submenu index="/businessOpportunity">
                    <template slot="title"><router-link to="/businessOpportunity">业务机会</router-link></template>
                    <el-menu-item index="2-1">新建业务机会</el-menu-item>
                    <el-menu-item index="2-2">最近记录</el-menu-item>
                    <el-menu-item index="2-3">全部业务机会</el-menu-item>
                    <el-menu-item index="2-3">本月关闭</el-menu-item>
                    <el-menu-item index="2-3">在新选项卡中打开“最近查看”</el-menu-item>
                </el-submenu>
                <el-submenu index="/task">
                    <template slot="title"><router-link to="/task">任务</router-link></template>
                    <el-menu-item index="2-1">新建任务</el-menu-item>
                    <el-menu-item index="2-2">今天的任务</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">日历</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">报表</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>   
                <el-submenu index="4">
                    <template slot="title">仪表板</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>  
                <el-submenu index="5">
                    <template slot="title">小组</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>  
                <el-submenu index="6">
                    <template slot="title">备注</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>  
                <el-menu-item index="/home">预测</el-menu-item>
                <el-submenu index="7">
                    <template slot="title">列表电子邮件</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>       
                <el-submenu index="8">
                    <template slot="title">更多</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu> 
                <el-menu-item index="/home" class="editIcon"><i class="el-icon-edit"></i></el-menu-item>
            </el-menu>   
            <div class="line"></div>    
        </el-row>
</div>
</template>

<script>
export default {
    name: 'saleNav',
    defaultActive:'1',
        data () {
        return {
            msg: ''
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>
<style>
/* .el-submenu__title:focus, .el-submenu__title:hover{
    outline: 0 !important;
    background: none !important;
}

.el-menu-item:hover,.el-menu-item.is-active{
    outline: 0 !important;
    background: #E5F0FA !important;
} */

</style>
<style scoped>
.sale{
    color:#000;
    font-size: 20px;
}
.el-menu--horizontal>.el-menu-item{
    height: 50px;
    line-height: 50px;
}
.el-submenu__title{
    padding: 0 15px;
}
.editIcon{
    margin-left: 80px;
    font-size: 16px;
}
.el-menu--horizontal>.el-menu-item.is-active{
    border-bottom-style:none;
}
.el-menu.el-menu--horizontal {
    border-bottom: solid 3px #0070D2;
}

</style>