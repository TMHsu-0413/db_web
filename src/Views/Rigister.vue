<template>
  <div>
    <div class="bg"></div>
    <div class="form">
      <div class="type_block">
        <input type="text" v-model="Account" class="input" placeholder="帳號" />
        <h2 class="label">帳號</h2>
      </div>
      <div class="type_block">
        <input type="password" v-model="Password" class="input" placeholder="密碼" />
        <h2 class="label">密碼</h2>
      </div>
      <div class="type_block">
        <input type="password" v-model="ConfirmPassword" class="input" placeholder="再輸入一次密碼" />
        <h2 class="label">確認密碼</h2>
      </div>
      <div class="type_block">
        <input type="text" v-model="UserName" class="input" placeholder="用戶姓名" />
        <h2 class="label">用戶姓名</h2>
      </div>
      <div class="type_block">
        <input type="text" v-model="Address" class="input" placeholder="聯絡地址" />
        <h2 class="label">聯絡地址</h2>
      </div>
      <div class="type_block">
        <input type="text" v-model="Phone" class="input" placeholder="連絡電話" />
        <h2 class="label">連絡電話</h2>
      </div>
      <div class="type_block">
        <input type="text" v-model="Mail" class="input" placeholder="E-mail" />
        <h2 class="label">E-mail</h2>
      </div>
      <button class="btn">註冊</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Account: null,
      Password: null,
      ConfirmPassword: null,
      UserName: null,
      Address: null,
      Phone: null,
      Mail: null
    }
  }
}
</script>

<style scoped>
.bg{
  position: relative;
  background-image: linear-gradient(rgba(0,0,255,0.5),rgba(255,255,255,0.5)),url('../image/bg-4.jpg');
  filter: blur(1px);
  background-size: cover;
  height: 100vh;
}
.form{
  position: absolute;
  padding:2rem 1rem;
  border-radius: 10px;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  width: 30vw;
  height: 80vh;
  background-color: rgba(255,255,255,.4);
  border: 2px solid;
  border-image: linear-gradient(to bottom,rgba(255,255,255,.5),rgba(0,0,255,.5));
  border-image-slice: 1;
  display: flex;
  flex-direction: column;
}
.type_block{
  flex-basis: 40%;
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
  color:rgba(120, 3, 150, 0.7);
  position: absolute;
  left:3.8rem;
  top:2.7rem;
  font-size: 1rem;
  transition: all .3s;
}
.btn{
  background-color: rgba(123, 4, 202, 0.4);
  color: white;
  width:50%;
  outline:0;
  align-self: center;
  padding:.5rem 1rem;
  border-radius: 20px;
  transition: all .2s;
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
</style>

