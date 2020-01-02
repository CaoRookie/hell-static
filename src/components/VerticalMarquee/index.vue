<template>
  <div class="marquee">
    <el-image style="width: 29px;height: 8px" :src="previousImage" fit="cover"></el-image>
    <div class="content">
      <div class="invertedTrapezoid"></div>
      <div class="rectangle"></div>
      <div class="box">
        <div class="box-content">
          <div class="box-item">
            <div>本层人数</div>
            <el-progress :stroke-width="2" :percentage="50" :show-text="false"  :color="customColorMethod"></el-progress>
          </div>
          <div class="box-item">
            <div>痛苦值</div>
            <el-progress :stroke-width="2" :percentage="50" :show-text="false"  :color="customColorMethod"></el-progress>
          </div>
          <div class="box-item">
            <div>物资补给</div>
            <el-progress :stroke-width="2" :percentage="50" :show-text="false"  :color="customColorMethod"></el-progress>
          </div>
        </div>

      </div>
      <div class="trapezoid"></div>
      <div class="trapezoid"></div>
      <div class="trapezoid"></div>
    </div>
    <el-image style="width: 29px;height: 8px" :src="nextImage" fit="cover"></el-image>
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
        hellArr:[{'hellName':'铁磨地狱','peopleNumber':'200','painValue':'10','supplies':'50'}]
      }
    },
    methods:{
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#3be6bc';
        } else if (percentage < 70) {
          return '#e73f41';
        } else {
          return '#ff991a';
        }
      },
    }
  }
</script>

<style scoped>
  .marquee{
    height: 100%;
    .content{
      height: calc(100vh - 16px);
      text-align: center;
      .invertedTrapezoid{
        height: 55px;
        text-align: center;
        line-height: 55px;
        background: url('/images/invertedTrapezoid.png');
        background-size: 100% 100%;
        width: 100%;
      }
      .rectangle{
        height: 12.5%;
        background: url('/images/rectangle.png');
      }
      .box{
        height: 37.5%;
        color: #999999;
        background: url("./images/box.png");
      }
      .trapezoid{
        height: 12.5%;
        background: url("./images/trapezoid.png");
      }
    }

  }

</style>
