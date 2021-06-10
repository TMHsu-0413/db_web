<template>
  <div class="container-fluid bg flex">
    <table class="table width60 table-hover">
      <thead class="white fs2">
        <tr>
          <th scope="th">#</th>
          <th class="text-middle">物品名稱</th>
          <th class="text-middle">上傳者</th>
          <th class="text-middle">數量</th>
          <th class="text-middle">詳細</th>
        </tr>
      </thead>
      <tbody class="white1 fs1">
        <tr v-for="(item,idx) in list" :key="'item'+idx">
          <th scope="row">{{idx}}</th>
          <th class="text-middle">{{item.name}}</th>
          <th class="text-middle">{{item.poster}}</th>
          <th class="text-middle">{{item.num}}</th>
          <th class="text-middle"><b-icon icon="file-earmark-medical-fill" class="cursor"></b-icon></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          name: '鯊魚貼圖',
          poster: '小名',
          num: 7
        },
        {
          name: '好吃的',
          poster: '小華',
          num: 5
        },
        {
          name: '杏仁茶',
          poster: '小陳',
          num: 10
        }
      ]
    }
  }
}
</script>

<style scoped>
.bg {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("../image/bg-6.jpg");
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 1rem;
}
.flex{
  display: flex;
  justify-content: center;
}
.white {
  color: white;
}
.white1{
  color:rgba(193, 196, 197, 0.931)
}
.mid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text-middle{
  text-align: center;
}
.padding1{
  padding:1rem .3rem;
}
.fs2{
  font-size:2rem;
}
.fs1{
  font-size:1rem;
}
.width60{
  width:60%;
}
.cursor{
  cursor:pointer;
}
</style>