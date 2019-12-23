<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <el-row :gutter="10">
        <el-col :span="3"><div class="content">
          <div class="content-first border-r bg-color">
            <div class="content-text">
              <div class="content-text-label">地府总人数</div>
              <div class="content-text-number">192,168,552</div>
            </div>
          </div>
          <div class="content-second border-r bg-color">
            <div class="content-text">

            </div>
          </div>
          <div class="content-third border-r bg-color">
            <div class="content-text">

            </div>
          </div>
        </div></el-col>

        <el-col :span="15"><div class="content">
          <div ref="chart" class="mapCls"></div>
        </div></el-col>

        <el-col :span="6"><div class="content">
          <div class="content-first bg-color">
            <div class="content-text">
              <div class="content-text-label">地府总人数</div>
              <div class="content-text-number">192,168,552</div>
            </div>
          </div>
          <div class="content-second bg-color">
            <div class="content-text">

            </div>
          </div>
          <div class="content-third bg-color">
            <div class="content-text">

            </div>
          </div>
        </div></el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
  import {MapDrillDown} from '@/lib/map/echartMapOptions'

  export default {
    name: 'bigdata',
    data(){
      return{
        countManNumber:'192,168,1199',
        lableImage:require('../../assets/images/lable_img.png')
      }
    },
    mounted () {
      new MapDrillDown(this.$refs.chart, this).init()
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
        margin-bottom: 20px;
        &:last-child {
           margin-bottom: 0;
        }
        .el-col{
          height: 100%;
          border-radius: 4px;
          .content{
            height: 100%;
            text-align: center;
            padding: 10px;
            .content-text{
              margin: auto;
              left: 0;
              top: 0;
              bottom: 0;
              right: 0;
              position: absolute;
              padding: 3px;
            }
            .content-first{
              position: relative;
              min-height: 100px;
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
            .content-second{
              position: relative;
              height: 50%;
              min-height: calc(100vh - 300px);
              margin: 10px 0;
            }
            .content-third{
              position: relative;
              min-height: 200px;
            }
            .mapCls{
              height: 100%;
            }
          }
        }
      }
    }
  }
</style>
