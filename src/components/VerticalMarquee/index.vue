<template>
  <div class="marquee">
    <div class="marquee-content">
      <div class="marquee-content-pre">
        <a href="javascript:void(0)" @click="changeHell(-1)">
          <el-image style="width: 29px;height: 8px" :src="previousImage" fit="cover"></el-image>
        </a>
      </div>
      <div class="marquee-content-center">
        <div class="bgImage invertedTrapezoid">{{getCurrentHellNameByIndex(-1)}}</div>
        <div class="bgImage rectangle">{{currentHell.hellName}}</div>
        <div class="bgImage box">
          <div class="box-content">
            <div class="box-item">
              <div class="box-item-label">本层人数</div>
              <el-progress :stroke-width="2" :percentage="currentHell.peopleNumber" :show-text="false"  :color="customColorMethod"></el-progress>
            </div>
            <div class="box-item">
              <div class="box-item-label">痛苦值</div>
              <el-progress :stroke-width="2" :percentage="currentHell.painValue" :show-text="false"  :color="customColorMethod"></el-progress>
            </div>
            <div class="box-item">
              <div class="box-item-label">物资补给</div>
              <el-progress :stroke-width="2" :percentage="currentHell.supplies" :show-text="false"  :color="customColorMethod"></el-progress>
            </div>
          </div>
        </div>
        <div class="bgImage trapezoid">{{getCurrentHellNameByIndex(1)}}</div>
        <div class="bgImage trapezoid">{{getCurrentHellNameByIndex(2)}}</div>
        <div class="bgImage trapezoid">{{getCurrentHellNameByIndex(3)}}</div>
      </div>
      <div class="marquee-content-next">
        <a href="javascript:void(0)"  @click="changeHell(1)">
          <el-image style="width: 29px;height: 8px" :src="nextImage" fit="cover"></el-image>
        </a>
      </div>
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
        currentHell: {},
        currentIndex: 0,
        hellArr:[]
      }
    },
    created(){
      this.findAllHell();
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

      findAllHell(){
        this.hellArr=[{id:1,hellName:'拔舌地狱',peopleNumber:60,painValue:23,supplies:20},
          {id:2,hellName:'剪刀地狱',peopleNumber:70,painValue:44,supplies:20},
          {id:3,hellName:'铁树地狱',peopleNumber:80,painValue:55,supplies:20},
          {id:4,hellName:'孽镜地狱',peopleNumber:10,painValue:66,supplies:20},
          {id:5,hellName:'蒸笼地狱',peopleNumber:20,painValue:77,supplies:20},
          {id:6,hellName:'铜柱地狱',peopleNumber:30,painValue:88,supplies:20},
          {id:7,hellName:'刀山地狱',peopleNumber:50,painValue:99,supplies:20},
          {id:8,hellName:'冰山地狱',peopleNumber:60,painValue:21,supplies:20},
          {id:9,hellName:'油锅地狱',peopleNumber:90,painValue:12,supplies:20},
          {id:10,hellName:'牛坑地狱',peopleNumber:1,painValue:34,supplies:20},
          {id:11,hellName:'石压地狱',peopleNumber:50,painValue:70,supplies:20},
          {id:12,hellName:'舂臼地狱',peopleNumber:80,painValue:90,supplies:20},
          {id:13,hellName:'血池地狱',peopleNumber:90,painValue:40,supplies:20},
          {id:14,hellName:'枉死地狱',peopleNumber:100,painValue:90,supplies:20},
          {id:15,hellName:'磔刑地狱',peopleNumber:70,painValue:40,supplies:20},
          {id:16,hellName:'火山地狱',peopleNumber:90,painValue:40,supplies:20},
          {id:17,hellName:'石磨地狱',peopleNumber:60,painValue:80,supplies:20},
          {id:18,hellName:'刀锯地狱',peopleNumber:40,painValue:90,supplies:20}]
        this.currentIndex = 0
        this.currentHell = this.hellArr[this.currentIndex]
      },
      changeHell(num){
        this.currentIndex += num
        if (num > 0 && this.currentIndex >= this.hellArr.length){
          this.currentIndex = 0
        }
        if (num < 0 && this.currentIndex < 0){
          this.currentIndex = this.hellArr.length-1
        }
        this.currentHell = this.hellArr[this.currentIndex];
      },
      getCurrentHellNameByIndex(index){
        let requestIndex = this.currentIndex + index
        console.log(requestIndex)
        if (index > 0 && requestIndex >= this.hellArr.length){
          requestIndex = requestIndex - this.hellArr.length;
        }
        if (index < 0 && requestIndex < 0){
          requestIndex = requestIndex + this.hellArr.length;
        }
        return this.hellArr[requestIndex].hellName
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
          padding: 16px;
          height: 100%;
        }
        .box-item{
          line-height: 200%;
          height:30%;
          &:nth-child(2){
             margin: 5px 0;
          }
          .box-item-label{
            font-size: 14px;
            color: #999999;
          }
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
