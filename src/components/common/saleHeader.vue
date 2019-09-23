<template>
<div class="saleHeader">
    <el-menu
     class="el-menu-demo" mode="horizontal" 
    background-color="#102442"
    text-color="#fff"  menu-trigger="click" active-text-color="#fff"
    >
        <el-menu-item index="1">浏览Salesforce</el-menu-item>
        <el-submenu index="2">
            <template slot="title">选择您的旅程</template>
            <el-menu-item index="2-1">管理您的流量</el-menu-item>
            <el-menu-item index="2-2">达成更多交易</el-menu-item>
            <el-menu-item index="2-3">为销售做好准备</el-menu-item>
            <el-menu-item index="2-3">想怎么卖就怎么卖</el-menu-item>
            <el-menu-item index="2-3">重置所有任务</el-menu-item>
            <el-menu-item index="2-3">导入联系人和客户</el-menu-item>
        </el-submenu>
        <el-button class="orderBtn rightFloat" type="danger">立即订购</el-button>
        
        <el-menu-item index="4" class="rightFloat">
            试用剩余天数
            <i class="days">30</i>
        </el-menu-item>
        <el-menu-item index="3" class="rightFloat">提供反馈</el-menu-item>
    </el-menu>
    <el-row>
        <el-col :span="24" class="header_content">
            <el-col :span="4"><div class="grid-content bg-purple header_logo"></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple">
                    <el-input placeholder="搜索Salesforce" v-model="input3" class="input-with-select">
                    <el-select v-model="select" slot="prepend" placeholder="全部" class="selectAll">
                        <el-option label="餐厅名" value="1"></el-option>
                        <el-option label="订单号" value="2"></el-option>
                        <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button></el-input>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple iconDiv">         
                <i class="el-icon-star-on"></i>
                <i class="el-icon-circle-plus"></i>
                <i class="el-icon-s-help"></i>
                <i class="el-icon-s-tools"></i>
                <i class="el-icon-message-solid"></i>
                <i class="el-icon-user-solid"></i>
            </div></el-col>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    name: 'saleHeader',
        data () {
        return {
            input3: '',
            select: '' 
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
    *{
        margin:0;
        padding:0;
    }
    body{
        overflow-x: hidden;
    }
    li{
    list-style: none;
}
</style>
<style scoped>
.el-menu-demo,.el-menu-item,.el-submenu,.el-submenu__title{
    height: 50px;
    line-height: 50px;
}
.el-submenu__title:focus, .el-submenu__title:hover{
    outline: 0 !important;
    background: none !important;
}
.el-menu-item:hover,.el-menu-item.is-active{
    outline: 0 !important;
    background: none !important;
}
.days{
    width: 25px;
    height: 24px;
    color:#102442;
    background: #fff;
    font-size: .8125rem;
    border-radius: .125rem;
    padding: 3px 5px;
    font-family: 'Salesforce Sans',Arial,sans-serif;
}
.orderBtn{
    background-color: #e8095b;
    line-height: 1.3;
    padding: 3px .8125rem;
    margin:13px 16px 0 1.5rem;
}
.rightFloat{
    float: right;
}
.header_content{
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);
    padding: .5rem 0;
    height: 3.125rem;
    align-items: center;
}
.header_logo{
    width: 12.5rem;
    height: 2.5rem;
    background-image: url(../../assets/Sales.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left center;
    margin-left:20px;
}
.input-with-select{
    width: 80%;
    margin-left: 141px;
}
.el-input__inner{
    height: 30px;
    line-height: 30px;
    border:1px solid #DDDBDA;
    padding: 0 20px;
}
.el-icon-search{
    height: 30px;
    line-height: 30px;
    position: relative;
    right: 452px;
}
.selectAll{
    width: 91px;
}
.iconDiv{
    float:right;
    margin: 10px 20px 0 0;
}
.iconDiv i{
    font-size: 22px;
    color:#919191;
    padding:0 5px;
}
</style>