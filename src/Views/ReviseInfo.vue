<template>
  <div class="bg">
    <div class="form">
      <div class="container">
        <div class="row mt-3 mb-3 px-5">
          <div class="type_block fbasis50">
            <input
              type="password"
              class="form-control"
              placeholder="重新設定密碼"
              aria-label="password"
              v-model="password"
            />
          </div>
        </div>
        <div class="row mt-3 mb-3 px-5 pre">
          <div class="type_block fbasis50">
            <input
              type="password"
              class="form-control"
              placeholder="確認密碼"
              aria-label="confirmpassword"
              v-model="Conpassword"
            />
          </div>
          <b-icon v-if="password != Conpassword" icon="x" class="ver red"></b-icon>
          <b-icon v-else icon="check" class="ver green"></b-icon>
        </div>
        <div class="row mt-3 mb-3 px-5">
          <div class="type_block fbasis50">
            <input
              type="text"
              class="form-control"
              placeholder="電話"
              aria-label="Phone"
              v-model="Phone"
            />
          </div>
        </div>
        <div class="row mt-3 mb-3 px-5">
          <div class="type_block fbasis50">
            <input
              type="text"
              class="form-control"
              placeholder="電子郵件"
              aria-label="mail"
              v-model="Email"
            />
          </div>
        </div>
        <div class="row mt-3 mb-3 px-5">
          <div class="type_block fbasis50">
            <input
              type="text"
              class="form-control"
              placeholder="地址"
              aria-label="address"
              v-model="Address"
            />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-7"></div>
          <div class="col">
            <button type="button" class="btn btn-dark" @click="Revise">確認修改</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data() {
    return {
      password: null,
      Conpassword: null,
      Phone: null,
      Email: null,
      Address: null
    }
  },
  methods: {
    async Revise() {
      if(this.password == this.Conpassword){
        let profile = { 'id': Vue.cookies.get('id'),'Password':this.password,'Phone':this.Phone, 'Address':this.Address ,'Email':this.Email }
        await this.$http.post('/user_revise.php',profile)
        this.$router.push('/admin')
      }
    }
  },
  async created() {
    let profile={ 'id': Vue.cookies.get('id') }
    let res = await this.$http.post('/user_search_sp.php',profile)
    this.Phone = res.data.Phone
    this.Address = res.data.Address
    this.Email = res.data.Email
  }
}
</script>
<style scoped>
.bg {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url("../image/bg-5.jpg");
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form {
  position: absolute;
  padding: 2rem 0rem;
  border-radius: 10px;
  /* width:30vw;
  height: 80vh; */
  background-color: rgba(255, 255, 255, 0.45);
  border: 2px solid rgba(17, 223, 238, 0.4);
  border-image-slice: 1;
  display: flex;
  flex-direction: column;
  animation: fadein 1s;
}
.content {
  padding: 0.5rem 0.5rem;
  width: 80%;
  align-self: center;
  border: none;
  border-radius: 5px;
  transition: all 0.3s;
}
.ver{
  font-size: 1.5rem;
  position: absolute;
  right:-40%;
  top:.5rem;
}
.pre{
  position: relative;
}
.green{
  color:green;
}
.red{
  color:red;
}
</style>