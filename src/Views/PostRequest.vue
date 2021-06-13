<template>
  <div class="container-fluid bg flex">
    <table class="table width60 table-hover">
      <thead class="white fs2">
        <tr>
          <th scope="th">#</th>
          <th class="text-middle">交易者</th>
          <th class="text-middle">交易物品名稱</th>
          <th class="text-middle">交易數量</th>
          <th class="text-middle">想交換物品</th>
          <th class="text-middle">想交換數量</th>
          <th class="text-middle">詳細</th>
          <th class="text-middle">是否交換</th>
        </tr>
      </thead>
      <tbody class="white1 fs1">
        <tr v-for="(item, idx) in list" :key="'item' + idx">
          <th scope="row">{{ idx }}</th>
          <th class="text-middle">{{ item.Request_Name }}</th>
          <th class="text-middle">{{ item.Request_Item }}</th>
          <th class="text-middle">{{ item.Request_Num }}</th>
          <th class="text-middle">{{ item.Poster_Item }}</th>
          <th class="text-middle">{{ item.Poster_Num }}</th>
          <th class="text-middle">
            <b-icon icon="file-earmark-medical-fill" class="cursor"></b-icon>
          </th>
          <th class="col-2">
            <button type="button" class="btn btn-success mx-2" @click="agree(item.id)">願意</button>
            <button type="button" class="btn btn-danger" @click="disagree(item.id)">拒絕</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      list: [],
      sp_list: []
    };
  },
  methods: {
    async show() {
      let profile = { 'id':Vue.cookies.get('id')  }
      const res = await this.$http.post('/post_request.php',profile)
      this.list=res.data
    },
    async agree(idx) {
      let profile = { 'id':idx }
      await this.$http.post('/request_agree.php',profile)
      this.show()
    },
    async disagree(idx) {
      let profile = { 'id':idx }
      await this.$http.post('/request_disagree.php',profile)
      this.show()
    }
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
.flex {
  display: flex;
  justify-content: center;
}
.white {
  color: white;
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
}
</style>