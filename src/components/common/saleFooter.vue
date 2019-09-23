<template>
<div class="foot">
    <el-menu class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">Notes</el-menu-item>
        <el-menu-item index="3">History</el-menu-item>
    </el-menu>
</div>
</template>

<script>
export default {
    name: 'saleFooter',
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


<style scoped>
.el-menu-demo{
    display: flex;
    position: fixed;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2.5rem;
    background: rgb(255, 255, 255);
    box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.16);
    z-index: 4;
}
.el-menu--horizontal>.el-menu-item{
    height: 2.5rem;
    line-height: 2.5rem;
}
.el-menu--horizontal>.el-menu-item.is-active{
    border-bottom: 2px solid #0041B6;
}
</style>