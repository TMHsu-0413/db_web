<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-secondary">首頁</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
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
