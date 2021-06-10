<template>
  <div class="container-fluid bg">
    <div class="row">
      <div v-for="(item,idx) in list" :key="'item'+idx" class="col-2 mid white">
        <a href="../ItemDetail">
          <img :src="item.image" class="imgwh" />
        </a>
        <h4>{{item.name}}</h4>
        <h5>刊登者:{{item.poster}}</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          image: 'image/shark.jpg',
          name: 'IKEA鯊魚',
          poster: '小名'
        },
        {
          image: 'image/shark.jpg',
          name: 'IKEA鯊魚',
          poster: '小華'
        },
        {
          image: 'image/shark.jpg',
          name: 'IKEA鯊魚',
          poster: '小智'
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
.white {
  color: white;
}
.mid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.imgwh{
  width:10vw;
  height:15vh;
}
</style>