<template>
  <div class="form container">
    <div class="row">
      <div class="col-6">
        <img :src="list.ImageName" style="width: 30vw; height: 30vw" />
      </div>
      <div class="col col-lg-6">
        <div class="close"><button class="closebtn" @click='CloseSp'>&times;</button></div>
        <div class="row">
          <h3><strong>物品名稱: {{list.Itemname}}</strong></h3>
        </div>
        <div class="row mt-3 mb-3">
          <h4>物品外觀說明 : {{list.ItemSituation}}</h4>
        </div>
        <div class="row mt-3 mb-3 flex">
          <span class="fs input fb">物品數量: {{list.ItemNum}}</span>
          <input type="text" placeholder="想交換數量" class="input self" v-model="Want_Num" />
        </div>
        <div class="row mt-3 mb-3">
          <h4>物品所在地: {{list.ItemAddress}}</h4>
        </div>
        <div class="row mt-3 mb-3">
          <h4>物品來源: {{list.ItemFrom}}</h4>
        </div>
        <div class="row mt-3 mb-3">
          <h4 v-if="list.WantItemName">想交換物品: {{list.WantItemName}}</h4>
          <h4 v-else>想交換物品: 無</h4>
        </div>
        <div class="row mt-3 mb-3 flex-se">
          <input type="text" class="input" v-model="Request_Item" placeholder="交換物品"/>
          <input type="text" class="input" v-model="Request_Num" placeholder="交換數量"/>
        </div>
        <div class="row mt-4 mb-3" v-if="btn">
          <div class="col-8">
            <button type="button" class="btn btn-primary px-md-4" @click="add1">
              <img
                src="../image/Change.png"
                style="width: 3vw; height: 3vw"
              />
              我想交換!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    list: Object,
    CloseSp: Function,
    btn: Boolean
  },
  data() {
    return {
      Request_Item: null,
      Request_Num: null,
      Want_Num: null
    }
  },
  methods: {
    async add1() {
      console.log(this.Want_Num,this.list.ItemNum)
      if(this.Want_Num > this.list.ItemNum){
        Vue.prototype.$message({
          type: 'error',
          message: '想交換數量超過貼文上限'
        })
      }
      else{
        let profile = {'Request_id': Vue.cookies.get('id'),'Request_Item': this.Request_Item
        ,'Request_Num': this.Request_Num ,'Poster_id': this.list.Poster_id1,'Poster_Item': this.list.Itemname
        ,'Poster_Num': this.Want_Num,'changed': 0}
        await this.$http.post('/rc_create.php',profile)
        this.CloseSp()
      }
    }
  }
}
</script>

<style scoped>
.bg {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url("../image/bg-4.jpg");
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fs{
  font-size: 1.5rem;
}
.fb{
  flex-basis: 50%;
}
.ml{
  margin-left: -.7%;
}
.flex-se{
  display:flex;
  justify-content: space-evenly;
}
.flex{
  display: flex;
}
.input{
  width:40%;
  outline: 0;
  padding:.5rem 1rem;
  border-radius: 20px;
}
.self{
  justify-self: flex-end;
  align-self: center;
}
.form {
  position: relative;
  padding: 2rem 2rem;
  border-radius: 10px;
  /*height: 70%;*/
  width: 65%;
  /* width:30vw;
  height: 80vh; */
  background-color: rgba(255, 255, 255, 0.45);
  border: 2px solid rgba(17, 223, 238, 0.4);
  border-image-slice: 1;
  display: flex;
  flex-direction: column;
  animation: fadein 1s;
}
.btn {
  color: #000000;
  font-size: 120%;
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