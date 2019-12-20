<template>
  <div class="dashboard-container">
    <!--<div class="dashboard-text">
      <div class="up-container">
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="4">
            <div class="up-container-item up-container-left">
              <div class="up-container-left-item up-container-left-first bg-purple">
                <div class="up-container-left-first-content">
                  <div class="up-container-left-first-content-lable">地府总人数</div>
                  <div class="up-container-left-first-content-number">1896523</div>
                </div>
              </div>

              <div class="up-container-left-item up-container-left-second bg-purple">
                <div class="up-container-left-second-content">
                </div>
              </div>
              <div class="up-container-right-item up-container-right-three bg-purple">

              </div>
            </div>
          </el-col>

          <el-col :span="6">
            <div class="up-container-item up-container-right">
              <div class="up-container-right-item up-container-right-first">
                <el-row :gutter="20" style="height: 100%">
                  <el-col :span="4" style="height: 100%"><div class="up-container-right-item-left bg-purple">
                    <div>
                      <el-image style="width: 20px; height: 20px" :src="lableImage" fit="cover"></el-image>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">地</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">府</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">工</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">作</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">人</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">员</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">业</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">绩</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">统</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">计</div>
                    </div>
                  </div></el-col>
                  <el-col :span="20"><div class="up-container-right-item-right bg-purple"></div></el-col>
                </el-row>
              </div>

              <div class="up-container-right-item up-container-right-first">
                <el-row :gutter="20">
                  <el-col :span="4"><div class="up-container-right-item-left bg-purple">
                    <div>
                      <el-image style="width: 20px; height: 20px" :src="lableImage" fit="cover"></el-image>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">地</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">府</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">工</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">作</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">人</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">员</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">业</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">绩</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">统</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">计</div>
                    </div>
                  </div></el-col>
                  <el-col :span="20"><div class="up-container-right-item-right bg-purple"></div></el-col>
                </el-row>
              </div>

              <div class="up-container-right-item up-container-right-first">
                <el-row :gutter="20">
                  <el-col :span="4"><div class="up-container-right-item-left bg-purple">
                    <div>
                      <el-image style="width: 20px; height: 20px" :src="lableImage" fit="cover"></el-image>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">地</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">府</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">工</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">作</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">人</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">员</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">业</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">绩</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">统</div>
                      <div style="width:10px;-webkit-transform: rotate(90deg);">计</div>
                    </div>
                  </div></el-col>
                  <el-col :span="20"><div class="up-container-right-item-right bg-purple"></div></el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div ref="chart" class="mapCls"></div>
    </div>-->
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="14"><div class="grid-content bg-purple">
        <div ref="chart" class="mapCls"></div>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
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
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__item--card{
    width: 100%;
  }
</style>
<style lang="scss"  scoped>
  .el-main{
    padding: 0;
  }
  .dashboard{
    &-container {
      height: calc(100vh - 50px);
      min-height: 500px;
      background: url('../../assets/images/bigdatabg.png');
    }
    &-text{
      position: relative;
      height: 100%;
      .mapCls{
        width: 90%;
        margin-right: 10%;
        height: 100%;
      }
      .up-container{
        height: calc(100vh - 50px);
        position: absolute;
        width: 100%;
        .bg-purple{
          background: #2b2f3a;
        }
        .up-container-item{
          height: calc(100vh - 50px);
          margin:20px;
        }
        .up-container-left{
          .up-container-left-item{
            position: relative;
            text-align: center;
            margin: 30px 0;
          }
          .up-container-left-first{
            min-height: 100px;
            .up-container-left-first-content{
              margin: auto;
              height: 65px;
              left: 0;
              top: 0;
              bottom: 0;
              right: 0;
              position: absolute;
              font-family: 微软雅黑;
              font-weight: 400;
              font-style: normal;
              color:#06fecc;
              .up-container-left-first-content-lable{
                margin-bottom: 10px;
                font-size: 16px;
              }
              .up-container-left-first-content-number{
                font-size: 32px;
              }
            }
          }
        }
        .up-container-right{
          .up-container-right-item{
            height: 30%;
            margin: 30px 0;
            .el-row .el-col{
              height: 100%;
            }
          }
          .up-container-right-item-left{
            min-height: 240px;
            height: 100%;
          }
          .up-container-right-item-right{
            min-height: 240px;
            height: 100%;
          }
        }
      }
    }
  }
</style>
