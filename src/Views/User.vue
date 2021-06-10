<template>
  <div>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header-user.vue'
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
  display: flex;
  height: 100vh;
  justify-content: space-between;
  flex-direction: column;
}
</style>
