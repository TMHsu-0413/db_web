<template>
  <div class="flex">
    <div class="container form">
      <div class="close"><button class="closebtn" @click='CloseLogin'>&times;</button></div>
      <div class="flex-col">
        <div class="type_block">
          <input type="text" v-model="Account" class="input" placeholder="帳號" />
          <h2 class="label">帳號</h2>
        </div>
        <div class="type_block">
          <input type="password" v-model="Password" class="input" placeholder="密碼" @keydown.enter="Login" />
          <h2 class="label">密碼</h2>
        </div>
      </div>
      <button class="btn" @click="Login">登入</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    CloseLogin: Function
  },
  data () {
    return {
      Account: null,
      Password: null
    }
  },
  methods: {
    async Login () {
      let profile = { "Account": this.Account,"Password": this.Password }
      this.$http.post('/user_login.php',profile)
      .then((res) =>{
        if(res.data.id)
          Vue.cookies.set('id', res.data.id)
        if(res.data.admin)
          Vue.cookies.set('admin', res.data.admin)
        if(res.data.admin=='1')
          this.$router.push('/admin')
        else if(res.data.admin == '0')
          this.$router.push('/user')
      })
    }
  }
}
</script>

<style scoped>
@keyframes fadein{
  from {opacity: 0; transform: translateY(100px);}
  to {opacity: 1; transform: translate(0);}
}
.flex{
  display: flex;
  justify-content: center;
  align-items: center;
}
.form{
  position: absolute;
  padding:2rem 1rem;
  border-radius: 10px;
  background-color: rgba(255,255,255,.45);
  border: 2px solid rgba(17, 223, 238, 0.4);
  border-image-slice: 1;
  max-width:20rem;
  max-height: 25rem;
  display: flex;
  flex-direction: column;
  animation: fadein 1s;
}
.flex-col{
  display: flex;
  flex-direction: column;
}
.type_block{
  flex-basis: 50%;
  display: flex;
  position: relative;
  flex-direction: column;
}
.type_block:not(:last-child){
  margin-bottom: 3rem;
}
.input{
  padding:.5rem .5rem;
  width:80%;
  align-self: center;
  border: none;
  border-radius: 5px;
  transition: all .3s;
}
.input:focus{
  outline: none;
}
.input:-ms-input-placeholder{
  color:gray;
}
.input:placeholder-shown + .label{
  opacity: 0;
  visibility: hidden;
  transform: translateY(4px);
}
.label{
  color:rgba(0,0,255,.7);
  position: absolute;
  left:1.8rem;
  top:-1.8rem;
  font-size: 1.2rem;
  transition: all .3s;
}
.btn{
  background-color: rgba(0,0,255,.4);
  margin-top:3rem;
  color: white;
  width:80%;
  outline:0;
  padding:.5rem 1rem;
  border-radius: 20px;
  transition: all .2s;
  align-self: center;
}
.btn:hover{
  transform: translateY(-3px);
}
.btn:active{
  transform: translateY(-1px);
}
.btn:focus{
  outline: none;
  border: none;
}
.close{
  margin-bottom: 2rem;
}
.closebtn{
  font-size: 1.5rem;
  background-color: transparent;
  outline: none;
  border: none;
  margin-top:-1rem;
  float: right;
}
</style>