<template>
  <div class="container-fluid bg flex">
    <table class="table width60 table-hover">
      <thead class="white fs2">
        <tr>
          <th scope="th">#</th>
          <th class="text-middle">交易物品名稱</th>
          <th class="text-middle">交易配對者</th>
          <th class="text-middle">交易數量</th>
          <th class="text-middle">交易結果</th>
        </tr>
      </thead>
      <tbody class="white1 fs1">
        <tr v-for="(item, idx) in list" :key="'item' + idx">
          <th scope="row">{{ idx }}</th>
          <th class="text-middle">{{ item.Itemname }}</th>
          <th class="text-middle">{{ item.Name }}</th>
          <th class="text-middle">{{ item.ItemNum }}</th>
          <th class="text-middle">
            <b-icon v-if="item.success=='1'" icon="check" class="cursor green"></b-icon>
            <b-icon v-else-if="item.success=='0'" icon="x" class="cursor red"></b-icon>
            <b-icon v-else icon="dash" class="cursor gray"></b-icon>
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
      list: []
    };
  },
  methods: {
    async show() {
      let profile = { 'id':Vue.cookies.get('id') }
      const res =await this.$http.post('/request_record.php',profile)
      this.list=res.data
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
.green{
  color:green;
}
.red{
  color:red;
}
.gray{
  color:gray;
}
</style>