<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <el-row :gutter="10">
        <!--左边-->
        <el-col :span="3"><div class="content">
          <div class="content-left-first border-r bg-color">
            <div class="content-text">
              <div class="content-text-label">地府总人数</div>
              <div class="content-text-number">192,168,552</div>
            </div>
          </div>
          <div class="content-left-second border-r bg-color">
            <div class="content-text">

            </div>
          </div>
          <div class="content-left-third border-r bg-color">
            <div class="content-text">

            </div>
          </div>
        </div></el-col>
        <!--中间-->
        <el-col :span="15"><div class="content">
          <div ref="chart" class="mapCls"></div>
        </div></el-col>
        <!--右边-->
        <el-col :span="6"><div class="content">
          <div class="content-right-item">
            <el-row :gutter="20">
              <!--左边title-->
              <el-col :span="3"><div class="content-right-item-left bg-color">
                <div class="horizontal-line"></div>
                <span>地府工作人员业绩统计</span>
              </div></el-col>
              <!--右边content-->
              <el-col :span="21"><div class="content-right-item-right bg-color">
                <div class="content-right-item-right-label">统计</div>
                <div class="content-right-item-right-label">6542+13%</div>
                <div class="content-right-item-right-label">总计 今年</div>
                <div class="content-right-item-right-label">126  -6%</div>
                <div class="content-right-item-right-label">分类 去年</div>
                <div class="content-right-item-right-label">667 +23%</div>
              </div></el-col>
            </el-row>
          </div>

          <div class="content-right-item">
            <el-row :gutter="20">
              <el-col :span="3"><div class="content-right-item-left bg-color">
                <div class="horizontal-line"></div>
                <span>冥币汇率变化</span>
              </div></el-col>
              <el-col :span="21"><div class="content bg-color">
                <div id="mincoinRate " ref="mincoinRate" style="height: 100%"></div>
              </div></el-col>
            </el-row>
          </div>
          <div class="content-right-item">
            <el-row :gutter="20">
              <el-col :span="3"><div class="content-right-item-left bg-color">
                <div class="horizontal-line"></div>
                <span>地府运营指标统计</span>
              </div></el-col>
              <el-col :span="21"><div class="content bg-color"></div></el-col>
            </el-row>
          </div>
        </div></el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
  import {MapDrillDown} from '@/lib/map/echartMapOptions'
  import echarts from '@/lib/echarts'

  export default {
    name: 'bigdata',
    data(){
      return{
        countManNumber:'192,168,1199',
        lableImage:require('../../assets/images/lable_img.png'),
        mincoinRate:'',
        colors:['#5793f3', '#d14a61', '#675bba']
      }
    },
    mounted () {
      new MapDrillDown(this.$refs.chart, this).init()
      this.mincoinRateDaw();
      let that = this;
      window.onresize = function () {
        that.mincoinRate.resize();
      }
    },
    methods:{
      mincoinRateDaw(){
        // 基于准备好的dom，初始化echarts实例
        this.mincoinRate = echarts.init(this.$refs.mincoinRate)
        // 绘制图表
        this.mincoinRate.setOption(
          {
            color: this.colors,
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross'
              }
            },
            grid: {
              right: '40%',
              left: '11%'
            },
            legend: {
              data:['RMB','冥币','汇率']
            },
            xAxis: [
              {
                type: 'category',
                axisTick: {
                  alignWithLabel: true,
                  lineStyle: {
                    color: this.colors[0]
                  }
                },
                axisLine: {
                  lineStyle: {
                    color: this.colors[2]
                  }
                },
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: 'RMB',
                min: 0,
                max: 250,
                position: 'right',
                axisLine: {
                  lineStyle: {
                    color: this.colors[0]
                  }
                },
                axisLabel: {
                  formatter: '{value} ml'
                }
              },
              {
                type: 'value',
                name: '冥币',
                min: 0,
                max: 250,
                position: 'right',
                offset: 80,
                axisLine: {
                  lineStyle: {
                    color: this.colors[1]
                  }
                },
                axisLabel: {
                  formatter: '{value} ml'
                }
              },
              {
                type: 'value',
                name: '汇率',
                min: 0,
                max: 25,
                position: 'left',
                axisLine: {
                  lineStyle: {
                    color: this.colors[2]
                  }
                },
                axisLabel: {
                  formatter: '{value} °C'
                }
              }
            ],
            series: [
              {
                name:'RMB',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
              },
              {
                name:'冥币',
                type:'bar',
                yAxisIndex: 1,
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
              },
              {
                name:'汇率',
                type:'line',
                yAxisIndex: 2,
                data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
              }
            ]
          }
        )
      }
    }
  }
</script>

<style lang="scss"  scoped>
  .dashboard{
    &-container {
      height: calc(100vh - 50px);
      min-height: 500px;
      background: url('../../assets/images/bigdatabg.png');
    }
    &-text{
       position: relative;
       height: 100%;
      .border-r{
        border-radius: 4px;
      }
      .bg-color{
        background: #171717;
      }
      .el-row{
        height: 100%;
        .el-col{
          height: 100%;
          border-radius: 4px;
          .content{
            height: 100%;
            .mapCls{
              height: 100%;
            }
            .content-text{
              margin: auto;
              left: 0;
              top: 0;
              bottom: 0;
              right: 0;
              position: absolute;
              padding: 3px;
            }
            .content-left-first{
              position: relative;
              min-height: 100px;
              text-align: center;
              .content-text{
                height: 52px;
                color: #00FFCC;
                font-family: '微軟正黑體 Bold', '微軟正黑體 Regular', '微軟正黑體';
                font-weight: 700;
                font-style: normal;
                .content-text-label{
                  font-size: 13px;
                  float: left;
                  margin-left: 9px;
                }
                .content-text-number{
                  font-size: 28px;
                }
              }
            }
            .content-left-second{
              position: relative;
              height: 50%;
              min-height: calc(100vh - 300px);
              margin: 10px 0;
            }
            .content-left-third{
              position: relative;
              min-height: 200px;
            }
            .content-right-item{
              position: relative;
              color: #ffffff;
              height: 33%;
              &:nth-child(2){
                margin: 10px 0;
              }
              .content-right-item-left{
                height: 100%;
                padding: 25px 7px;
                text-align: center;
                position: relative;
                .horizontal-line{
                  width: 100%;
                  height: 5px;
                  background: #00ffcc;
                  display: inline-block;
                  vertical-align: top;
                }
              }
              .content-right-item-right{
                height: 100%;
                padding: 25px 7px;
                .content-right-item-right-label{
                  height: 16.666667%;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
