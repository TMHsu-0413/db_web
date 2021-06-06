<template>
  <div class="header">
    <button type="button" class="btn btn-primary"><strong>首頁</strong></button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-primary {
  color: #000;
  background-color: rgb(208, 217, 221);
  border-color: rgb(208, 217, 221);
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:active:hover{
  color: #000;
  background-color: rgb(124, 124, 207);
  border-color: rgb(124, 124, 207);
}
.btn-enter {
  color: #000;
  background-color: rgb(208, 217, 221);
  border-color: rgb(208, 217, 221);
}
.btn-enter:hover, .btn-enter:focus, .btn-enter:active:hover{
  color: #000;
  background-color: rgb(209, 235, 65);
  border-color: rgb(209, 235, 65);
}
.btn-regi {
  color: #000;
  background-color: rgb(208, 217, 221);
  border-color: rgb(208, 217, 221);
}
.btn-regi:hover, .btn-regi:focus, .btn-regi:active:hover{
  color: #000;
  background-color: rgb(116, 231, 112);
  border-color: rgb(116, 231, 112);
}
.header{
  flex-basis: 6%;
  background-color:rgb(208, 217, 221,.3);
}
</style>
