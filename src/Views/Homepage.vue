<template>
  <div class="bg">
    <header id="header">
      <div class="content">
        <div class="inner_text">
          易物媒合系統
        </div>
      </div>
      <div class="option">
        <button class="opt" @click='Loginpage'>登入</button>
        <button class="opt" @click='Registerpage'>註冊</button>
      </div>
    </header>
    <div v-if='L'><Login :CloseLogin="CloseLogin"></Login></div>
    <div v-if='R'><Register :CloseRegister="CloseRegister" :Admin="false"></Register></div>
  </div>
</template>
<script>
import Register from '../components/Register'
import Login from '../components/Login'
export default {
  data () {
    return {
      L: false,
      R: false
    }
  },
  components: {
    Login,
    Register
  },
  methods: {
    Loginpage: function () {
      this.L = !this.L
      var element = document.getElementById("header")
      element.classList.add("dis-none")
    },
    Registerpage: function () {
      this.R = !this.R
      var element = document.getElementById("header")
      element.classList.add("dis-none")
    },
    CloseLogin () {
      this.L = !this.L
      var element = document.getElementById("header")
      element.classList.remove("dis-none")
    },
    CloseRegister () {
      this.R = !this.R
      var element = document.getElementById("header")
      element.classList.remove("dis-none")
    }
  }
}
</script>

<style scoped>
@keyframes fadein{
  from {opacity: 0;}
  to {opacity: 1;}
}
.bg{
  position: relative;
  background-image: linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)),url('../image/bg-5.jpg');
  background-size: cover;
  height: 100vh;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dis-none{
  display: none;
}
#header{
  font-size:3rem;
  color: white;
}
.content{
  opacity: 0;
  padding:1.5rem .7rem;
  border-top:1px solid white;
    border-bottom:1px solid white;
  animation: fadein 1s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
}
.option{
  margin-top:3rem;
  display: flex;
  font-size:2rem;
  justify-content: space-evenly;
}
.opt{
  opacity: 0;
  position: relative;
  padding:.5rem 1rem;
  border:1px solid white;
  color:white;
  animation: fadein .5s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  transition: all .3s;
  background-color: transparent;

}
.opt::before{
  position: absolute;
  content:'';
  background:white;
  height: 3rem;
  width:2px;
  top:-3rem;
  left:2.9rem;
}
.opt:hover{
  background-color: white;
  color:black;
}
</style>