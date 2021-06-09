<template>
  <footer class="footer mt-auto py-3 bg-light bg-dark">
    <div class="container-fluid flex">
      <span class="text-muted">Copyright &copy; 2021 NFU CSIE. All Rights Reserved</span>
      <span class="text-muted ml-auto">進站人數:10</span>
      <span class="ml-3"><a href="http://www.csie.nfu.edu.tw/zh/" class="text-muted href">聯絡我們</a></span>
    </div>
</footer>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex{
  display: flex;
}
.ml-auto{
  margin-left:auto;
}
.ml-3{
  margin-left:3%;
}
.r5{
  right:5rem;
}
.white{
  color:white;
}
.href{
  text-decoration: none;
}
</style>
