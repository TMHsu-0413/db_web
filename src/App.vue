<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  metaInfo: {
    title: '易物媒合系統'
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');
#app {
  font-family: 'JetBrains Mono',"Noto Sans TC",sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>