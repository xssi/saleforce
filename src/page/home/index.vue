<template>
    <div class="home">
        <sale-header></sale-header>
        <sale-nav></sale-nav>
        <el-row>
          <el-col :span="16"><div class="grid-content bg-purple">
              <el-card class="box-card leftCard" shadow="never">
                <div slot="header" class="clearfix">
                    <el-row :gutter="20">
                      <el-col :span="6"><div class="grid-content bg-purple leftCardText1">季度业绩</div></el-col>
                      <el-col :span="6" :offset="11"><div class="grid-content bg-purple leftCardText2">
                        截至2019-9-3&nbsp;16:58:36
                      </div></el-col>
                      <i class="el-icon-refresh-right updataIcon"></i>
                    </el-row>
                    <el-row :gutter="20" class="headerInfo">
                      <span>已结束</span>
                      <i>￥ 0</i>
                      <span>未处理(>70%)</span>
                      <i>￥ 0</i>
                      <span>目标</span>
                      <i>￥ 25,000</i>
                      <i class="el-icon-edit"></i>
                    </el-row>
                </div>
                <div id="myChart" >
                  
                </div>
              </el-card>
          </div>
            <el-row>
                <el-col :span="11"><div class="grid-content bg-purple">
                    <el-card class="box-card minCard" shadow="never">
                      <h5 class='minCardHeader'>今日事件</h5>
                      <div class="minCardContent">
                        <img src="" alt="">
                        <p class="cardText">看來您已完成今天的工作了。</p>
                      </div>
                      <div class="minCardFooter">
                        <a href="">查看日历</a>
                      </div>
                    </el-card>
                </div></el-col>
                <el-col :span="11"><div class="grid-content bg-purple-light">
                    <el-card class="box-card minCard2" shadow="never">
                          <span class="minCardHeader">今天的任务 </span>
                          <el-dropdown trigger="click" style="margin-left: 15.6rem;">
                              <span class="taskIcon">
                                <i class="el-icon-s-unfold"></i>
                                <i class="el-icon-caret-bottom"></i>
                              </span>
                              <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>今天</el-dropdown-item>
                                <el-dropdown-item>我的任务</el-dropdown-item>
                                <el-dropdown-item>所有逾期</el-dropdown-item>
                                <el-dropdown-item>过去7天已完成</el-dropdown-item>
                                <el-dropdown-item>已委派</el-dropdown-item>
                              </el-dropdown-menu>
                            </el-dropdown>
                        <div class="minCardContent">
                          <img src="" alt="">
                          <p class="cardText">暂无到期任务，请稍后查看。</p>
                        </div>
                        <div class="minCardFooter">
                          <a href="">查看全部</a>
                        </div>
                      </el-card>
                </div></el-col>
            </el-row>
            <el-row>
                <el-col :span="11"><div class="grid-content bg-purple">
                  <el-card class="box-card middleCard" shadow="never">
                      <h5 class='middleCardHeader'>最近记录</h5>
                      <ul class="middleCardListInfo">
                        <li>
                          <i class="el-icon-setting"></i>
                          <span>saleforce.com-1,100 Widgets</span>
                        </li>
                        <li>
                          <i class="el-icon-user-solid"></i>
                          <span>user</span>
                        </li>
                        <li>
                          <i class="el-icon-setting"></i>
                          <span>Acme-130 Widgets(Sample)</span>
                        </li>
                        <li>
                          <i class="el-icon-setting"></i>
                          <span>Acme-1250 Widgets(Sample)</span>
                        </li>
                        <li>
                          <i class="el-icon-setting"></i>
                          <span>Acme-1,200 Widgets(Sample)</span>
                        </li>
                      </ul>                   
                      <div class="middleCardFooter">
                        <a href="">查看全部</a>
                      </div>
                  </el-card>
                </div></el-col>
                <el-col :span="11"><div class="grid-content bg-purple-light">
                  <el-card class="box-card middleCard2" shadow="never">
                      <span class="middleCardHeader">重要交易 - 最近业务机会 </span>
                      <el-dropdown trigger="click" style="margin-left: 10.2rem;">
                          <span class="taskIcon">
                            <i class="el-icon-s-unfold"></i>
                            <i class="el-icon-caret-bottom"></i>
                          </span>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>全部业务机会</el-dropdown-item>
                            <el-dropdown-item>下个月关闭</el-dropdown-item>
                            <el-dropdown-item>本月关闭</el-dropdown-item>
                            <el-dropdown-item>我的业务机会</el-dropdown-item>
                            <el-dropdown-item>新建本周</el-dropdown-item>
                            <el-dropdown-item>业务机会销售漏斗</el-dropdown-item>
                            <el-dropdown-item>最近业务机会</el-dropdown-item>
                            <el-dropdown-item>已赢得</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                        <ul class="middleCardListInfo middleCardListMessage">
                            <li>
                              <span>saleforce.com-1,100 Widgets(Sample)</span>
                              <br>
                              <span>saleforce.com</span>
                              <i>2019-8-27 ￥100,000,00</i>
                            </li>
                            <li>
                              <span>Acme-130 Widgets(Sample)</span><br>
                              <span>Acme(Sample)</span>
                              <i>2018-9-16 ￥13,000,00</i>
                            </li>
                            <li>
                              <span>Acme-1250 Widgets(Sample)</span><br>
                              <span>Acme(Sample)</span>
                              <i>2019-8-27 ￥100,000,00</i>
                            </li>
                            <li>
                              <span>Acme-1200 Widgets(Sample)</span><br>
                              <span>Acme(Sample)</span>
                              <i>2019-8-27 ￥100,000,00</i>
                            </li>
                            <li>
                              <span>Acme-120 Widgets(Sample)</span><br>
                              <span>Acme(Sample)</span>
                              <i>2019-8-27 ￥100,000,00</i>
                            </li>
                          </ul>
                    <div class="middleCardFooter">
                      <a href="">查看所有重要交易</a>
                    </div>
                  </el-card>
                </div></el-col>
            </el-row>
          </el-col>
          <el-col :span="8"><div class="grid-content bg-purple-light">
              <el-card class="box-card rightCard" shadow="never">
                <p class="rightCardTitle">助理</p>
                <ul class="rightCardListInfo">
                  <li>
                    <el-row>
                      <el-col :span="3"><div class="grid-content bg-purple">
                        <i class="el-icon-arrow-right"></i>
                        <i class="el-icon-setting"></i>
                      </div></el-col>
                      <el-col :span="14"><div class="grid-content bg-purple-light">
                        <span>业务机会包含逾期任务</span><br>
                        <span>Acme-1,100 Widgets(Sample)</span>
                      </div></el-col>
                      <el-col :span="7"><div class="grid-content bg-purple-light operateBtn">
                        <i class="el-icon-s-unfold"></i>
                        <i class="el-icon-s-cooperation"></i>
                        <i class="el-icon-close"></i>
                      </div></el-col>
                    </el-row>     
                  </li>
                  <li>
                      <el-row>
                        <el-col :span="3"><div class="grid-content bg-purple">
                          <i class="el-icon-arrow-right"></i>
                          <i class="el-icon-setting"></i>
                        </div></el-col>
                        <el-col :span="14"><div class="grid-content bg-purple-light">
                          <span>30天没有任何活动</span><br>
                          <span>saleforce.com-320 Widgets(Sample)</span>
                        </div></el-col>
                        <el-col :span="7"><div class="grid-content bg-purple-light operateBtn">
                          <i class="el-icon-s-unfold"></i>
                          <i class="el-icon-s-cooperation"></i>
                          <i class="el-icon-close"></i>
                        </div></el-col>
                      </el-row>
                  </li>
                  <li>
                      <el-row>
                        <el-col :span="3"><div class="grid-content bg-purple">
                          <i class="el-icon-arrow-right"></i>
                          <i class="el-icon-setting"></i>
                        </div></el-col>
                        <el-col :span="14"><div class="grid-content bg-purple-light">
                          <span>30天没有任何活动</span><br>
                          <span>saleforce.com-320 Widgets(Sample)</span>
                        </div></el-col>
                        <el-col :span="7"><div class="grid-content bg-purple-light operateBtn">
                          <i class="el-icon-s-unfold"></i>
                          <i class="el-icon-s-cooperation"></i>
                          <i class="el-icon-close"></i>
                        </div></el-col>
                      </el-row>
                  </li>
                  <li>
                      <el-row>
                        <el-col :span="3"><div class="grid-content bg-purple">
                          <i class="el-icon-arrow-right"></i>
                          <i class="el-icon-setting"></i>
                        </div></el-col>
                        <el-col :span="14"><div class="grid-content bg-purple-light">
                          <span>30天没有任何活动</span><br>
                          <span>saleforce.com-320 Widgets(Sample)</span>
                        </div></el-col>
                        <el-col :span="7"><div class="grid-content bg-purple-light operateBtn">
                          <i class="el-icon-s-unfold"></i>
                          <i class="el-icon-s-cooperation"></i>
                          <i class="el-icon-close"></i>
                        </div></el-col>
                      </el-row>
                  </li>
                  <li>
                      <el-row>
                        <el-col :span="3"><div class="grid-content bg-purple">
                          <i class="el-icon-arrow-right"></i>
                          <i class="el-icon-setting"></i>
                        </div></el-col>
                        <el-col :span="14"><div class="grid-content bg-purple-light">
                          <span>30天没有任何活动</span><br>
                          <span>saleforce.com-320 Widgets(Sample)</span>
                        </div></el-col>
                        <el-col :span="7"><div class="grid-content bg-purple-light operateBtn">
                          <i class="el-icon-s-unfold"></i>
                          <i class="el-icon-s-cooperation"></i>
                          <i class="el-icon-close"></i>
                        </div></el-col>
                      </el-row>
                  </li>
                </ul> 
              </el-card>
          </div></el-col>
        </el-row>
        <sale-footer></sale-footer>
    </div>
  </template>
  
<script>
import saleFooter from '@/components/common/saleFooter.vue'
import saleHeader from '@/components/common/saleHeader.vue'
import saleNav from '@/components/common/saleNav.vue'
export default { 
  components: { saleFooter, saleHeader ,saleNav},
  data () {
      return {
          msg: ''
      }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['10', '11', '12', '13']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              areaStyle: {}
          }]
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  background: linear-gradient(135deg, #000781, #23b7cb);
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.leftCard{
  width: 94%;
  margin: 15px 15px 0 15px;
}
.headerInfo span{
  font-size: .75rem;
  color: rgb(62, 62, 60);
  text-transform: uppercase;
  padding-left: .9rem;
}
.headerInfo i{
  color:#000;
  font-size: 1rem;
  padding-left: .2rem;
  font-family: 'Salesforce Sans',Arial,sans-serif;
}
#myChart{
  width: 100%;
  height: 342px;
}
.minCard,.minCard2{   
  height: 224px;
}
.middleCard,.middleCard2{
  height: 429px;
}
.minCard,.middleCard{
  width:100%;
  margin: 15px 15px 0 15px;
}
.minCard2,.middleCard2{
  width:100%;
  margin: 15px 15px 0 36px;
}
.minCardHeader,.middleCardHeader{
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: .875rem;
  line-height: 1.25;
  font-weight: 600;
}
.minCardContent{

}
.minCardFooter,.middleCardFooter{
  padding: .5rem .75rem;
  margin-top: .5rem;
  text-align: center;
  font-size: .8125rem;
  border-top: 1px solid rgb(221, 219, 218);
}
.middleCard .el-icon-setting,.middleCard .el-icon-user-solid{
  width: 2.1rem;
  height: 2.1rem;
  background: #FCB95B;
  border-radius: 9%;
  font-size: 24px;
  color:#fff;
  text-align: center;
  line-height: 2.1rem;
}
.middleCard .el-icon-user-solid{
  background: #65CAE4;
}
.middleCard .middleCardListInfo li{
  padding: .87rem 0;
}
.middleCardListInfo li span,.middleCardListInfo li p{
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 1px dotted #006DCC;
  color: #2381D3;
  font-size: 13px;
  margin-left: 1rem;
}
.middleCardListInfo li span:nth-of-type(2){
  font-size: 13px;
}
.middleCardListInfo i{
  font-size: .75rem;
  color: rgb(62, 62, 60);
}
.middleCard2 .middleCardListInfo li{
  padding: .52rem 0;
}
.cardText{
  font-size: 14px;
  color: #000;
  text-align: center;
}
.taskIcon{
  border-radius: .25rem;
  width: auto;
  line-height: 1.875rem;
  padding: 0 .5rem;
  background-color: rgb(255, 255, 255);
  border-color: rgb(221, 219, 218);
  color: rgb(112, 110, 107);
}
.updataIcon{
    width: 1.9rem;
    height: 1.9rem;
    line-height: 1.9rem;
    vertical-align: middle;
    color: rgb(112, 110, 107);
    border: 1px solid rgb(221, 219, 218);
    border-color: rgb(221, 219, 218);
    border-radius: 9%;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
}
.leftCardText1{
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: .875rem;
  line-height: 1.25;
  font-weight: 600;
}
.leftCardText2{
  padding-right: .5rem;
  font-size: .75rem;
  color:#3E3E3C;
  line-height: 2.5;
  margin-left: 50px;
}
.rightCard{
  width: 100%;
  min-height: 210px;
  margin:15px 15px 0 -15px;
}
.rightCard .rightCardTitle{
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 600;
  padding-bottom: .5rem;
}
.rightCardListInfo li{
  border-top: 1px solid rgb(221, 219, 218);
  background-color: rgb(255, 255, 255);
  padding: .3rem 0;
  position: relative;
  color: rgb(62, 62, 60);
  min-width: 285px;
  overflow: hidden;
}
.rightCardListInfo i{
  font-size: 18px;
  color: #706E6B;
  line-height: 3rem;
}
.rightCardListInfo span{
  font-weight: 400;
  font-size: .75rem;
  max-width: calc(100% - 100px);
  margin-left: .5rem;
}
.rightCardListInfo li span:nth-of-type(2){
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 1px dotted #006DCC;
  color: #2381D3;
  font-size: 13px;
}
.rightCardListInfo .el-icon-arrow-right,.rightCardListInfo .el-icon-close{
  font-weight: 600;
}
.rightCardListInfo .el-icon-setting{
  width: 1.5rem;
  height: 1.5rem;
  background: #FCB95B;
  text-align: center;
  line-height: 1.5rem;
  color: #fff;
  border-radius: 9%;
}
.operateBtn{
  width: 100%;
  padding: .5rem 0;
}
.operateBtn i{
  width: 1.9rem;
  height: 1.9rem;
  border-radius: .25rem;
  line-height: 1.9rem;
  text-align: center;
  vertical-align: middle;
  color: rgb(112, 110, 107);
  border: 1px solid rgb(221, 219, 218);
}
</style>