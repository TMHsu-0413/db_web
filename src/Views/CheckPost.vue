<template>
  <div class="bg">
    <div class="form container">
      <div class="row">
        <div class="col-6 mid">
          <img src="../image/shark.jpg" style="width: 25vw; height: 25vw" />
        </div>
        <div class="col col-lg-6">
          <div class="row">
            <h3><strong>物品名稱: IKEA鯊魚</strong></h3>
          </div>
          <div class="row mt-2 mb-2">
            <h4>物品外觀說明 : 整體外觀保存良好，狀況極佳</h4>
          </div>
          <div class="row mt-2 mb-2">
            <h4>物品數量: 10隻</h4>
          </div>
          <div class="row mt-2 mb-2">
            <h4>物品來源: 台中市IKEA商場</h4>
          </div>
          <div class="row mt-2 mb-2">
            <h4>物品所在地: 台中市大甲區</h4>
          </div>
          <div class="row mt-2 mb-2">
            <h4>想交換物品: 無</h4>
          </div>
          <div class="row mt-2 mb-2">
            <div class="col-5"><h4>設定貼文期限:</h4></div>
            <div class="col-5">
              <input
                type="date"
                class="form-control"
                placeholder="Time limit"
                aria-label="Timelimit"
              />
            </div>
            <div class="col-4"></div>
          </div>

          <div class="row mt-2 mb-2">
            <div class="col-7">
              <div class="row mx-1">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1"
                    >可讓貼文者修改此貼文</label
                  >
                </div>
              </div>
              <div class="row mx-1">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2"
                    >無法讓貼文者修改此貼文</label
                  >
                </div>
              </div>
            </div>
            <div class="col-5">
              <button type="button" class="btn btn-primary px-md-4">
                審核貼文
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.mid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
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