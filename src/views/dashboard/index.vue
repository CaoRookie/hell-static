<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <el-row :gutter="20">
        <el-col :span="6"><div class="count-content" style="background: #3cdb86">
          <div class="count-content-text">
            <div class="count-content-text-lable">地府人数</div>
            <div class="count-content-text-number">2048</div>
          </div>
        </div></el-col>
        <el-col :span="6"><div class="count-content" style="background: #4480f4">
          <div class="count-content-text">
            <div class="count-content-text-lable">今日入境</div>
            <div class="count-content-text-number">2048</div>
          </div>
        </div></el-col>
        <el-col :span="6"><div class="count-content" style="background: #073045">
          <div class="count-content-text">
            <div class="count-content-text-lable">今日出境</div>
            <div class="count-content-text-number">2048</div>
          </div>
        </div></el-col>
        <el-col :span="6"><div class="count-content" style="background: #f66932">
          <div class="count-content-text">
            <div class="count-content-text-lable">管理员</div>
            <div class="count-content-text-number">2048</div>
          </div>
        </div></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="16"><div class="bg-purple">
          <el-container>
            <el-header height="46px">
              <div class="header-first">常用功能导航</div>
              <div class="header-last">
                  <a href="javascript:void(0)"><el-image style="width: 20px; height: 20px" :src="moreImage" fit="cover"></el-image></a>
                </div>
            </el-header>
            <el-main>
              <el-row :gutter="20">
                <el-col :span="4">
                  <div class="ring">
                    <div class="ring-content">
                      <svg-icon icon-class="lifeDieBook" class="ring-content-icon" />
                    </div>
                    <div class="ring-desc">
                      <span >生死簿</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="ring">
                    <div class="ring-content">
                      <svg-icon icon-class="lifeDieBook" class="ring-content-icon" />
                    </div>
                    <div class="ring-desc">
                      <span >生死簿</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="ring">
                    <div class="ring-content">
                      <svg-icon icon-class="lifeDieBook" class="ring-content-icon" />
                    </div>
                    <div class="ring-desc">
                      <span >生死簿</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="ring">
                    <div class="ring-content">
                      <svg-icon icon-class="lifeDieBook" class="ring-content-icon" />
                    </div>
                    <div class="ring-desc">
                      <span >生死簿</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="ring">
                    <div class="ring-content">
                      <svg-icon icon-class="lifeDieBook" class="ring-content-icon" />
                    </div>
                    <div class="ring-desc">
                      <span >生死簿</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="4"><div class="ring">
                  <div class="ring-content">
                    <svg-icon icon-class="lifeDieBook" class="ring-content-icon" />
                  </div>
                  <div class="ring-desc">
                    <span >生死簿</span>
                  </div>
                </div></el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="4"><div class="ring">
                  <div class="ring-content">
                    <svg-icon icon-class="lifeDieBook" class="ring-content-icon" />
                  </div>
                  <div class="ring-desc">
                    <span >生死簿</span>
                  </div>
                </div></el-col>
                <el-col :span="4"><div class="ring">
                  <div class="ring-content">
                    <svg-icon icon-class="lifeDieBook" class="ring-content-icon" />
                  </div>
                  <div class="ring-desc">
                    <span >生死簿</span>
                  </div>
                </div></el-col>
                <el-col :span="4"><div class="ring">
                  <div class="ring-content">
                    <svg-icon icon-class="lifeDieBook" class="ring-content-icon" />
                  </div>
                  <div class="ring-desc">
                    <span >生死簿</span>
                  </div>
                </div></el-col>
                <el-col :span="4"><div class="ring">
                  <div class="ring-content">
                    <svg-icon icon-class="lifeDieBook" class="ring-content-icon" />
                  </div>
                  <div class="ring-desc">
                    <span >生死簿</span>
                  </div>
                </div></el-col>
                <el-col :span="4"><div class="ring">
                  <div class="ring-content">
                    <svg-icon icon-class="lifeDieBook" class="ring-content-icon" />
                  </div>
                  <div class="ring-desc">
                    <span >生死簿</span>
                  </div>
                </div></el-col>
                <el-col :span="4"><div class="ring">
                  <div class="ring-content">
                    <svg-icon icon-class="lifeDieBook" class="ring-content-icon" />
                  </div>
                  <div class="ring-desc">
                    <span >生死簿</span>
                  </div>
                </div></el-col>
              </el-row>
            </el-main>
          </el-container>
        </div></el-col>

        <el-col :span="8"><div class="bg-purple">
          <el-container>
            <el-header height="46px">
              <div class="header-first">今日待办</div>
              <div class="header-last">
                <a href="javascript:void(0)"><el-image style="width: 20px; height: 20px" :src="moreImage" fit="cover"></el-image></a>
              </div>
            </el-header>
            <el-main>Main</el-main>
          </el-container>
        </div></el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="16"><div class="grid-content bg-purple">
          <el-container>
            <el-header height="46px">
              <div class="header-first">地府出入境人数</div>
              <div class="header-last">
                <a href="javascript:void(0)"><el-image style="width: 20px; height: 20px" :src="moreImage" fit="cover"></el-image></a>
              </div>
            </el-header>
            <el-main>
              <div id="hellManMap" ref="hellManMap" style="height: 200px"></div>
            </el-main>
          </el-container>
        </div></el-col>

        <el-col :span="8"><div class="grid-content bg-purple">
          <el-container>
            <el-header height="46px">
              <div class="header-first">各层地狱人数</div>
              <div class="header-last">
                <a href="javascript:void(0)"><el-image style="width: 20px; height: 20px" :src="moreImage" fit="cover"></el-image></a>
              </div>
            </el-header>
            <el-main>
              <div id="hellEachManMap" ref="hellEachManMap" style="height: 220px"></div>
            </el-main>
          </el-container>
        </div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import echarts from '@/lib/echarts'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    return {
      msg: '仪表盘',
      moreImage: require('../../assets/images/more.png'),
      hellManMap:'',
      hellManMapData:{
        input:[120, 132, 101, 134, 90, 230, 210],
        output:[220, 182, 191, 234, 290, 330, 310],
      },
      hellEachManMap:'',
    }
  },
  mounted(){
    this.hellManMapDaw();
    this.hellEachManMapDaw();
    let that = this;
    window.onresize = function () {
      that.hellManMap.resize();
      that.hellEachManMap.resize();
    }
  },
  methods:{
    hellManMapDaw () {
      // 基于准备好的dom，初始化echarts实例
      this.hellManMap = echarts.init(this.$refs.hellManMap)
      // 绘制图表
      this.hellManMap.setOption(
        {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data:['出境','入境']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name:'出境',
              type:'line',
              data:this.hellManMapData.input
            },
            {
              name:'入境',
              type:'line',
              data:this.hellManMapData.output
            }
          ]
        }
      )
    },

    hellEachManMapDaw(){
      // 基于准备好的dom，初始化echarts实例
      this.hellEachManMap = echarts.init(this.$refs.hellEachManMap)
      // 绘制图表
      this.hellEachManMap.setOption(
        {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series: [
            {
              name:'访问来源',
              type:'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
              ]
            }
          ]
        }
      )
    }
  }
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
     margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .bg-purple{
    background: #d3dce6;
  }
  .grid-content{
    min-height: 20px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
    padding: 0 10%;
    .count-content {
      min-height: 166px;
      text-align: center;
      position: relative;
    }
    .count-content-text{
      height: 95px;
      margin: auto;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      font-family: 微软雅黑;
      font-weight: 400;
      font-style: normal;
      color: rgb(255, 255, 255);
    }
    .count-content-text-lable{
      font-size: 20px;
    }
    .count-content-text-number{
      font-size: 30px;
    }
    .header-first{
      float: left;
      font-family: 微软雅黑;
      font-weight: 700;
      font-style: normal;
      font-size: 15px;
      color: rgb(102, 102, 102);
    }
    .header-last{
      float: right;
    }
    .ring{
      text-align: center
    }
    .ring-content{
      height: 70px;
      width: 70px;
      margin: auto;
      background: rgb(255, 255, 255);
      border-radius: 50%;
      border: 1px solid white;
      position: relative;
    }
    .ring-desc{
      font-family: 微软雅黑;
      font-style: normal;
      font-size: 18px;
      color: rgb(102, 102, 102);
    }
    .ring-content-icon{
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
    .el-main{
      padding: 20px 20px 0 20px;
    }
  }
}
</style>
