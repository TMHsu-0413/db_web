<template>
  <div class="container-fluid bg">
    <div v-if="openSp" class="bg-black">
      <ItemDetail :list="sp_list" :CloseSp="CloseSp" :show="show"></ItemDetail>
    </div>
    <div class="row" v-else>
      <div
        v-for="(item, idx) in list"
        :key="'item' + idx"
        class="col-2 mid white"
      >
        <a @click="ItemDetail(item.id)">
          <img :src="item.ImageName" class="imgwh" />
        </a>
        <h4>{{ item.Itemname }}</h4>
        <h5>刊登者:{{ item.poster }}</h5>
      </div>
    </div>
  </div>
</template>
<script>
import ItemDetail from "../components/ItemDetail.vue";
export default {
  data() {
    return {
      list: [],
      sp_list: [],
      openSp: false,
    };
  },
  components: {
    ItemDetail,
  },
  methods: {
    async show() {
      const all = await this.$http.get("/post_search_mainpage.php");
      this.list = all.data;
    },
    async ItemDetail(id) {
      let profile = { id: id };
      const all = await this.$http.post("/post_search_sp.php", profile);
      this.sp_list = all.data;
      console.log(this.sp_list);
      this.openSp = true;
    },
    CloseSp() {
      this.openSp = false;
    },
  },
  created() {
    this.show();
  },
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
.white {
  color: white;
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
.mid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.imgwh {
  width: 10vw;
  height: 15vh;
}
</style>