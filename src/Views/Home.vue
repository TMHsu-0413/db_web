<template>
  <div class="Flex">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Content from '../components/Content.vue'
export default {
  components: {
    Header,Content,Footer
  }
}
</script>

<style>
.Flex{
  background-image: linear-gradient(rgba(0,0,255,0.5),rgba(255,255,255,0.5)),url('../image/bg-3.jpg');
  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  flex-direction: column;
}
</style>
