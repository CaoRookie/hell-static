<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div ref="chart" class="mapCls"></div>
    </div>
  </div>
</template>

<script>
  import {MapDrillDown} from '@/lib/map/echartMapOptions'

  export default {
    name: 'bigdata',
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
       height: 100%;
      .mapCls{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
