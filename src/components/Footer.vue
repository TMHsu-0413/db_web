<template>
  <div class="footer">
    <button type="button" class="btn btn-touch"><strong>今日瀏覽量</strong></button>
    <button type="button" class="btn btn-contact"><strong>聯絡拎北</strong></button>
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
.btn-touch {
  color: #000;
  background-color: rgb(233, 169, 169);
  border-color: rgb(233, 169, 169);
}
.btn-touch:hover, .btn-touch:focus, .btn-touch:active:hover{
  color: #000;
  background-color: rgb(124, 124, 207);
  border-color: rgb(124, 124, 207);
}
.btn-contact {
  color: #000;
  background-color: rgb(233, 169, 169);
  border-color: rgb(233, 169, 169);
}
.btn-contact:hover, .btn-contact:focus, .btn-contact:active:hover{
  color: #000;
  background-color: rgb(136, 240, 145);
  border-color: rgb(136, 240, 145);
}
.footer{
  flex-basis: 5%;
}
</style>
