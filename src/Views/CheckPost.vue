<template>
  <div class="container-fluid bg flex">
    <div v-if="openSp" class="bg-black">
    <CheckPostDetail :list="sp_list" :CloseSp="CloseSp" :show="show"></CheckPostDetail>
    </div>
    <table class="table width60 table-hover" v-else>
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
          <th class="text-middle">{{item.Itemname}}</th>
          <th class="text-middle">{{item.poster}}</th>
          <th class="text-middle">{{item.ItemNum}}</th>
          <th class="text-middle"><b-icon @click="specified(item.id)" icon="file-earmark-medical-fill" class="cursor"></b-icon></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CheckPostDetail from '../components/CheckPostDetail'
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
      ],
      sp_list: [],
      openSp: false
    }
  },
  components: {
    CheckPostDetail
  },
  methods: {
    async show() {
      const res = await this.$http.get('/post_search_checkpost.php')
      this.list = res.data
    },
    async specified (idx) {
      let profile = { 'id':idx}
      const res = await this.$http.post('/post_search_sp.php',profile)
      this.sp_list = res.data
      this.openSp = true
    },
    CloseSp() {
      this.openSp = false
    }
  },
  created() {
    this.show()
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
  padding:0 1rem;
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
.bg-black {
  position: fixed;
  left:0;
  top:0;
  background-color: rgba(0,0,0,.65);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
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