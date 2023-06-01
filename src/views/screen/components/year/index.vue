<template>
  <div class="box7">
    <div class="title">
      <p>年度游客量对比</p>
      <img src="../../images/dataScreen-title.png" alt="">
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue';
//获取DOM节点
let charts = ref();
//组件挂载完毕
onMounted(() => {
  //一个容器可以同时展示多种类型的图形图标
  let mychart = echarts.init(charts.value);
  //设置配置项
  mychart.setOption({
    title: {
      text: '散点图',
      left: '40%',
      textStyle: {
        color: 'white'
      }
    },
    xAxis: {
      type: 'category',
      show: true,
    },
    yAxis: {
      show: false
    },
    grid: {
      left: 20,
      top: 20,
      right: 0,
      bottom: 20
    },
    series: {
      type: 'scatter',
      data: [33, 88, 21, 9, 88, 234, 113, 1231, 674, 3, 88, 33, 21, 888, 3332, 313, 123, 5, 657, 7],
      //标记图形设置
      symbol: 'diamond',
      symbolSize: 16,
      //图文标签
      label: {
        show: true,
        position: 'top',
        color: 'red'
      },
      //散点图标记的颜色
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: 'red' // 0% 处的颜色
          }, {
            offset: 1, color: 'blue' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      }
    }

  })
})
</script>

<style scoped lang="scss">
.box7 {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin: 20px 0px;

  .title {
    p {
      color: white;
      font-size: 18px;
    }
  }

  .charts {
    height: calc(100% - 30px);
  }

}
</style>