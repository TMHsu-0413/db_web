<template>
  <div class="flex">
    <div class="form">
      <div class="close"><button class="closebtn" @click='CloseRegister'>&times;</button></div>
      <div class="flex-row">
        <div class="container">
            <h2 class="mid">新增帳號</h2>
          <div class="row mt-4 mb-4">
            <div class="col">
              <div class="type_block fbasis50">
                <input type="text" v-model="Account" class="input w80" placeholder="帳號" />
                <h2 class="label">帳號</h2>
              </div>
            </div>
            <div class="col">
              <div class="type_block fbasis50">
                <input type="text" v-model="Name" class="input w80" placeholder="用戶姓名" />
                <h2 class="label">用戶姓名</h2>
              </div>
            </div>
          </div>
          <div class="row mt-4 mb-4">
            <div class="col">
              <div class="type_block fbasis50">
                <input type="password" v-model="Password" class="input w80" placeholder="密碼" />
                <h2 class="label">密碼</h2>
              </div>
            </div>
            <div class="col">
              <div class="type_block fbasis50">
                <input type="password" v-model="ConPassword" class="input w80" placeholder="再輸入一次密碼" />
                <h2 class="label">確認密碼</h2>
                <b-icon v-if="Password != ConPassword" icon="x" class="ver red"></b-icon>
                <b-icon v-else icon="check" class="ver green"></b-icon>
              </div>
            </div>
          </div>
          <div class="row mt-4 mb-4">
            <div class="col">
              <div class="type_block fbasis50">
                <input type="text" v-model="Phone" class="input w80" placeholder="聯絡電話" />
                <h2 class="label">聯絡電話</h2>
              </div>
            </div>
            <div class="col">
              <div class="type_block fbasis50">
                <input type="email" v-model="Email" class="input w80" placeholder="E-mail" />
                <h2 class="label">E-mail</h2>
              </div>
            </div>
          </div>
          <div class="row mt-4 mb-4">
            <div class="col">
              <div class="type_block fbasis50">
                <input type="text" v-model="Address" class="input w90" placeholder="聯絡地址" />
                <h2 class="label">聯絡地址</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="btn" @click="Reg">註冊</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    CloseRegister: Function,
    Admin: Boolean
  },
  data () {
    return {
      Account: null,
      Password: null,
      Name: null,
      ConPassword: null,
      Phone: null,
      Email: null,
      Address: null
    }
  },
  methods: {
    async Reg() {
      if(this.Password == this.ConPassword){
        let profile = { 'Account':this.Account, 'Password':this.Password,
        'Name': this.Name, 'Phone': this.Phone, 'Email': this.Email,'Address': this.Address,'Admin': this.Admin }
        await this.$http.post('/user_create.php',profile)
        this.CloseRegister()
      }
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
  /*width: 30vw;
  height: 58vh;*/
  background-color: rgba(255,255,255,.45);
  border: 2px solid rgba(17, 223, 238, 0.4);
  border-image-slice: 1;
  display: flex;
  flex-direction: column;
  animation: fadein 1s;
}
.ver{
  font-size: 1.5rem;
  position: absolute;
  right:0;
  top:.5rem;
}
.green{
  color:green;
}
.mid{
  text-align: center;
}
.red{
  color:red;
}
.flex-row{
  display: flex;
  flex-wrap: wrap;
}
.fbasis50{
  flex-basis:50%;
}
.fbasis100{
  flex-basis: 100%;
}
.type_block{
  display: flex;
  position: relative;
  justify-content: center;
}
.type_block:not(:last-child){
  margin-bottom: 3rem;
}
.input{
  padding:.5rem .5rem;
  align-self: center;
  border: none;
  border-radius: 5px;
  transition: all .3s;
}
.w80{
  width:80%;
}
.w90{
  width:90%;
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
  top:-1.3rem;
  font-size: 1rem;
  transition: all .3s;
}
.btn{
  background-color: rgba(0,0,255,.4);
  margin-top:3rem;
  color: white;
  width:60%;
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