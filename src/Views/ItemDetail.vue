<template>
  <div class="bg">
    <div class="form container-md">
      <div class="row">
        <div class="col-6">
          <img src="../image/shark.jpg" style="width: 30vw; height: 30vw" />
        </div>
        <div class="col col-lg-6">
          <div class="row mb">
            <h3><strong>物品名稱: IKEA鯊魚</strong></h3>
          </div>
          <div class="row mb">
            <h4>物品外觀說明 : 整體外觀保存良好，狀況極佳</h4>
          </div>
          <div class="row mb">
            <h4>物品數量: 10隻</h4>
          </div>
          <div class="row mb">
            <h4>物品來源: 台中市IKEA商場</h4>
          </div>
          <div class="row mb">
            <h4>物品所在地: 台中市大甲區</h4>
          </div>
          <div class="row mb">
            <h4>想交換物品: 無</h4>
          </div>
          <div class="row mt-3 mb">
            <div class="col-8">
              <button type="button" class="btn btn-primary px-md-4">
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
  </div>
</template>


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
.mb{
  margin-bottom:1rem;
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
</style>