<template>
  <div class="marquee">
    <div class="prev"><el-image style="width: 100%; height: 20px" :src="previousImage" fit="cover"></el-image></div>
    <div class="content">
      <div class="invertedTrapezoid"></div>
      <div class="rectangle"></div>
      <div class="box">
        <div>
          <div>
            <div>本层人数</div>
            <el-progress :percentage="50" :show-text="false"  :color="customColorMethod"></el-progress>
          </div>
          <div>
            <div>痛苦值</div>
            <el-progress :percentage="50" :show-text="false"  :color="customColorMethod"></el-progress>
          </div>
          <div>
            <div>物资补给</div>
            <el-progress :percentage="50" :show-text="false"  :color="customColorMethod"></el-progress>
          </div>
        </div>

      </div>
      <div class="trapezoid"></div>
      <div class="trapezoid"></div>
      <div class="trapezoid"></div>
    </div>
    <div class="next"><el-image style="width: 100%; height: 20px" :src="nextImage" fit="cover"></el-image></div>
  </div>
</template>

<script>
  export default {
    name: 'VerticalMarquee',
    data(){
      return{
        previousImage: require('images/previous.png'),
        nextImage: require('images/next.png'),
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
    .content{
      .invertedTrapezoid{
        background: url("/images/invertedTrapezoid.png");
      }
      .rectangle{
        background: url("/images/rectangle.png");
      }
      .box{
        background: url("/images/box.png");
      }
      .trapezoid{
        background: url("/images/trapezoid.png");
      }
    }

  }

</style>
