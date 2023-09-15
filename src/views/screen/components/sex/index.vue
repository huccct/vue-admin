<template>
  <div class="box1">
    <div class="title">
      <p>男女比例</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="sex">
      <div class="man">
        <img src="../../images/man.png" alt="" />
      </div>
      <div class="women">
        <img src="../../images/woman.png" alt="" />
      </div>
    </div>
    <div class="rate">
      <p>男士58%</p>
      <p>女士42%</p>
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
//获取图形图标的DOM节点
let charts = ref()
onMounted(() => {
  //初始化echarts实例
  let mycharts = echarts.init(charts.value)
  //设置配置项
  mycharts.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
      },
      formatter: '{a0}: {c0}%<br />{a1}: {c1}%',
    },
    xAxis: {
      show: false,
      min: 0,
      max: 100,
      type: 'value',
    },
    yAxis: {
      show: false,
      type: 'category',
      data: ['人数比例'],
    },
    series: [
      {
        name: '男士',
        stack: 'total',
        data: [48],
        type: 'bar',
        barWidth: 20,
        itemStyle: {
          color: '#29fcff',
          borderRadius: [10, 0, 0, 10],
        },
        label: {
          show: true,
          formatter: '{c}%',
        },
        emphasis: {
          focus: 'series',
        },
      },
      {
        name: '女士',
        stack: 'total',
        data: [52],
        type: 'bar',
        barWidth: 20,
        itemStyle: {
          color: '#ff6c6c',
          borderRadius: [0, 10, 10, 0],
        },
        label: {
          show: true,
          formatter: '{c}%',
        },
        emphasis: {
          focus: 'series',
        },
      },
    ],
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '0%',
    },
  })
})
</script>

<style scoped lang="scss">
.box1 {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin: 20px 0px;

  .title {
    margin-left: 20px;

    p {
      color: white;
      font-size: 20px;
    }
  }

  .sex {
    display: flex;
    justify-content: center;

    .man {
      margin: 20px;
      width: 111px;
      height: 115px;
      background: url(../../images/man-bg.png) no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .women {
      margin: 20px;
      width: 111px;
      height: 115px;
      background: url(../../images/woman-bg.png) no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .rate {
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 0 20px;
  }

  .charts {
    height: 100px;
    width: calc(100% - 40px);
    margin: 0 auto;
  }
}
</style>
