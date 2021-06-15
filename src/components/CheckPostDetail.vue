<template>
  <div class="form container">
    <div class="row">
      <div class="col-6 mid">
        <img :src="list.ImageName" style="width: 25vw; height: 25vw" />
      </div>
      <div class="col col-lg-6">
        <div class="close"><button class="closebtn" @click='CloseSp'>&times;</button></div>
        <div class="row">
          <h3><strong>物品名稱: {{list.Itemname}}</strong></h3>
        </div>
        <div class="row mt-2 mb-2">
          <h4><strong>上傳者: {{list.Poster_id}}</strong></h4>
        </div>
        <div class="row mt-2 mb-2">
          <h4>物品外觀說明 : {{list.ItemSituation}}</h4>
        </div>
        <div class="row mt-2 mb-2">
          <h4>物品數量: {{list.ItemNum}}</h4>
        </div>

        <div class="row mt-2 mb-2">
          <h4>物品所在地: {{list.ItemAddress}}</h4>
        </div>
        <div class="row mt-2 mb-2">
          <h4>想交換物品: {{list.WantItemName}}</h4>
        </div>
        <div class="row mt-2 mb-2">
          <div class="col-5"><h4>設定貼文期限:</h4></div>
          <div class="col-5">
            <input
              type="date"
              class="form-control"
              placeholder="Time limit"
              aria-label="Timelimit"
              v-model="date"
            />
          </div>
          <div class="col-4"></div>
        </div>

        <!--<div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="edit" value="0">
          <label class="form-check-label" for="flexRadioDefault1">
            不可修改貼文
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked v-model="edit" value="1">
          <label class="form-check-label" for="flexRadioDefault2">
            可修改貼文
          </label>
        </div>-->

        <div class="row mt-2 mb-2">
          <div class="col-5">
            <button type="button" class="btn btn-primary px-md-4 mr" @click="agree">
              通過
            </button>
            <button type="button" class="btn btn-danger px-md-4" @click="disagree">
              拒絕
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: Object,
    CloseSp: Function,
    show: Function
  },
  data() {
    return {
      date: null,
      edit: null
    }
  },
  methods: {
    async agree() {
      let profile = { 'id':this.list.id,'date': this.date,'CanEdit': '0' }
      await this.$http.post('/post_agree.php',profile)
      this.CloseSp()
      await this.show()
    },
    async disagree() {
      let profile = { 'id':this.list.id }
      await this.$http.post('/post_disagree.php',profile)
      profile = { 'userid':this.list.Poster_id2,"itemName":this.list.Itemname }
      console.log(profile)
      await this.$http.post('/email.php',profile)
      this.CloseSp()
      await this.show()
    }
  }
}
</script>

<style scoped>
@keyframes fadein{
  from {opacity: 0; transform: translateY(100px);}
  to {opacity: 1; transform: translate(0);}
}
.mr{
  margin-right:1rem;
}
.mid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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