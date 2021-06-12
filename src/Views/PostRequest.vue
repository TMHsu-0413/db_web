<template>
  <div class="container-fluid bg flex">
    <table class="table width60 table-hover">
      <thead class="white fs2">
        <tr>
          <th scope="th">#</th>
          <th class="text-middle">交易物品名稱</th>
          <th class="text-middle">交易者</th>
          <th class="text-middle">交易數量</th>
          <th class="text-middle">物品所在地</th>
          <th class="text-middle">詳細</th>
          <th class="text-middle">是否交換</th>
        </tr>
      </thead>
      <tbody class="white1 fs1">
        <tr v-for="(item, idx) in list" :key="'item' + idx">
          <th scope="row">{{ idx }}</th>
          <th class="text-middle">{{ item.name }}</th>
          <th class="text-middle">{{ item.poster }}</th>
          <th class="text-middle">{{ item.num }}</th>
          <th class="text-middle">{{ item.address }}</th>
          <th class="text-middle">
            <b-icon icon="file-earmark-medical-fill" class="cursor"></b-icon>
          </th>
          <th class="col-2">
            <button type="button" class="btn btn-success mx-2">願意</button>
            <button type="button" class="btn btn-danger">拒絕</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "鯊魚貼圖",
          poster: "小名",
          num: 1,
          address: "台中市大甲區",
        },
        {
          name: "好吃的",
          poster: "小華",
          num: 2,
          address: "台北市萬華區",
        },
        {
          name: "杏仁茶",
          poster: "小陳",
          num: 3,
          address: "雲林縣虎尾鎮",
        },
      ],
    };
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