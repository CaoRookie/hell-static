<template>
  <div class="marquee">
    <div class="marquee-content">
      <div class="marquee-content-pre">
        <a href="javascript:void(0)">
          <el-image style="width: 29px;height: 8px" :src="previousImage" fit="cover"></el-image>
        </a>
      </div>
      <div class="marquee-content-center">
        <div class="bgImage invertedTrapezoid">XX地狱</div>
        <div class="bgImage rectangle">XX2地狱</div>
        <div class="bgImage box">
          <div class="box-content">
            <div class="box-item">
              <span>本层人数</span>
              <el-progress :stroke-width="2" :percentage="20" :show-text="false"  :color="customColorMethod"></el-progress>
            </div>
            <div class="box-item">
              <span>痛苦值</span>
              <el-progress :stroke-width="2" :percentage="50" :show-text="false"  :color="customColorMethod"></el-progress>
            </div>
            <div class="box-item">
              <span>物资补给</span>
              <el-progress :stroke-width="2" :percentage="80" :show-text="false"  :color="customColorMethod"></el-progress>
            </div>
          </div>

        </div>
        <div class="bgImage trapezoid">XX3地狱</div>
        <div class="bgImage trapezoid">XX4地狱</div>
        <div class="bgImage trapezoid">XX5地狱</div>
      </div>
      <div class="marquee-content-next"><a href="javascript:void(0)">
        <el-image style="width: 29px;height: 8px" :src="nextImage" fit="cover"></el-image>
      </a></div>
    </div>
  </div>
</template>

<script>
  import previousImage from './images/previous.png'
  import nextImage from './images/next.png'

  export default {
    name: 'VerticalMarquee',
    data(){
      return{
        previousImage: previousImage,
        nextImage: nextImage,
        hellArr:[{'hellName':'铁磨地狱','peopleNumber':'200','painValue':'10','supplies':'20'}]
      }
    },
    methods:{
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#e73f41';
        } else if (percentage < 70) {
          return '#ff991a';
        }else {
          return '#3be6bc';
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .marquee{
    height: 100%;
    .marquee-content{
      margin: 0 15px;
      height: 100%;
    }
    .marquee-content-pre{
      padding-top: 5px;
      text-align: center;
    }
    .marquee-content-next{
      padding-bottom: 5px;
      text-align: center;
    }
    .marquee-content-center{
      height: calc(100% - 46px);
      .bgImage{
        background-size:cover;
        height: 60px;
        line-height: 60px;
      }
      .invertedTrapezoid{
        color: #246454;
        text-align: center;
        background: url("./images/invertedTrapezoid.png") no-repeat center;
      }
      .rectangle{
        color: #00ffcc;
        line-height: 45px;
        height: 45px;
        text-align: center;
        background: url("./images/rectangle.png") no-repeat center;
      }
      .box{
        min-height: 173px;
        margin-top: -5px;
        background: url("./images/box.png") no-repeat center;
        .box-content{
          margin: 0 16px;
          height: 100%;
        }
        .box-item{
          font-size: 14px;
          height: 25%;
          color: #999999;
        }
      }
      .trapezoid{
        color: #246454;
        text-align: center;
        background: url("./images/trapezoid.png") no-repeat center;
      }
    }

  }

</style>
