<template>
    <div class="form">
      <div class="close"><button class="closebtn" @click='CloseLogin'>&times;</button></div>
      <div class="type_block">
        <input type="text" v-model="Account" class="input" placeholder="帳號" />
        <h2 class="label">帳號</h2>
      </div>
      <div class="type_block">
        <input type="text" v-model="Password" class="input" placeholder="密碼" />
        <h2 class="label">密碼</h2>
      </div>
      <button class="btn">登入</button>
    </div>
</template>

<script>
export default {
  props: {
    CloseLogin: Function
  },
  data () {
    return {
      Account: null,
      Password: null
    }
  }
}
</script>

<style scoped>
.form{
  position: absolute;
  padding:2rem 1rem;
  border-radius: 10px;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  width:40vw;
  height: 25vh;
  background-color: rgba(255,255,255,.4);
  border: 2px solid;
  border-image: linear-gradient(to bottom,rgba(255,255,255,.5),rgba(0,0,255,.5));
  border-image-slice: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.type_block{
  flex-basis: 50%;
  display: flex;
  position: relative;
  flex-direction: column;
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
  transform: scalex(1.05) scaleY(1.03);
  outline: none;
  border: 3px solid rgba(0,0,255,.5);
}
.input:-ms-input-placeholder{
  color:gray;
}
.input:placeholder-shown + .label{
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
}
.label{
  color:rgba(0,0,255,.7);
  position: absolute;
  left:2.5rem;
  top:3.5rem;
  font-size: 1.5rem;
  transition: all .3s;
}
.btn{
  background-color: rgba(0,0,255,.4);
  margin-top:4rem;
  color: white;
  width:50%;
  outline:0;
  padding:.5rem 1rem;
  border-radius: 20px;
  transition: all .2s;
  flex-basis: 40%;
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
  flex-basis: 100%;
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