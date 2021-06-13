<template>
  <div class="container-fluid bg flex">
    <div v-if="OpenR" class="bg-black">
    <RevisePost :list="sp_list" :Close="CloseR" :edit="edbtn"></RevisePost>
    </div>
    <table class="table width60 table-hover">
      <thead class="white fs2">
        <tr>
          <th scope="th">#</th>
          <th class="text-middle">交易物品名稱</th>
          <th class="text-middle">交易數量</th>
          <th class="text-middle">物品所在地</th>
          <th class="text-middle">修改權限</th>
        </tr>
      </thead>
      <tbody class="white1 fs1">
        <tr v-for="(item, idx) in list" :key="'item' + idx">
          <th scope="row">{{ idx }}</th>
          <th class="text-middle">{{ item.Itemname }}</th>
          <th class="text-middle">{{ item.ItemNum }}</th>
          <th class="text-middle">{{ item.ItemAddress }}</th>
          <th class="text-middle">
            <b-icon v-if="item.CanEdit=='1'" icon="file-earmark-medical-fill" class="cursor green" @click="Rptrue(item.id)"></b-icon>
            <b-icon v-else icon="x" class="cursor red" @click="Rpfalse(item.id)"></b-icon>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
import RevisePost from '../components/RevisePost.vue'
export default {
  data() {
    return {
      list: [],
      sp_list: [],
      OpenR: false,
      edbtn: null
    }
  },
  methods: {
    async Rptrue(idx) {
      let profile = { 'id': idx}
      const res =await this.$http.post('/post_search_sp.php',profile)
      this.sp_list = res.data
      this.edbtn = true
      this.OpenR = true
    },
    async Rpfalse(idx) {
      let profile = { 'id': idx}
      const res =await this.$http.post('/post_search_sp.php',profile)
      this.sp_list = res.data
      this.edbtn = false
      this.OpenR = true
    },
    CloseR() {
      this.OpenR = false
    },
    async show() {
      let id = Vue.cookies.get('id')
      let profile = { 'id':id }
      const res =await this.$http.post('/post_mypost.php',profile)
      this.list=res.data
      console.log(res.data)
    }
  },
  components: {
    RevisePost
  },
  created() {
    this.show()
  }
};
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
.bg-black {
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.65);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex {
  display: flex;
  justify-content: center;
}
.white {
  color: white;
}
.green{
  color:green;
}
.red{
  color:red;
}
.white1 {
  color: rgba(193, 196, 197, 0.931);
}
.mid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text-middle {
  text-align: center;
}
.padding1 {
  padding: 1rem 0.3rem;
}
.fs2 {
  font-size: 1.5rem;
}
.fs1 {
  font-size: 1rem;
}
.width60 {
  width: 60%;
}
.cursor {
  cursor: pointer;
  font-size:1.5rem;
}
</style>