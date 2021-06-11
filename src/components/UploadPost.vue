<template>
  <div class="form">
    <div class="close">
      <button class="closebtn" @click="Closeupload">&times;</button>
    </div>
    <div class="container">
      <div class="row mt-2 mb-2 px-5">
        <input
          type="text"
          class="form-control"
          placeholder="物品名稱"
          aria-label="ItemName"
        />
      </div>
      <div class="row mt-2 mb-2 px-5">
        <input
          type="text"
          class="form-control"
          placeholder="物品數量"
          aria-label="ItemQuanitiy"
        />
      </div>
      <div class="row mt-2 mb-2 px-5">
        <input
          type="file"
          class="form-control"
          placeholder="物品照片"
          aria-label="ItemPicture"
        />
      </div>
      <div class="row mt-2 mb-2 px-5">
        <input
          type="text"
          class="form-control"
          placeholder="物品所在地"
          aria-label="ItemAddress"
        />
      </div>
      <div class="row mt-2 mb-2 px-5">
        <input
          type="text"
          class="form-control"
          placeholder="物品來源"
          aria-label="ItemOrigin"
        />
      </div>
      <div class="row mt-2 mb-2 px-5">
        <textarea
          class="form-control"
          placeholder="物品目前狀況"
          aria-label="ItemSituation"
        ></textarea>
      </div>
      <h5 class="row mt-2 mb-2 px-5">若是超過時限無人交換,則:</h5>
      <div class="row mt-2 mb-2 px-5">
        <div class="col">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label class="form-check-label" for="inlineRadio1"
              >捐贈至該系統</label
            >
          </div>
        </div>
        <div class="col">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">自行收回</label>
          </div>
        </div>
      </div>
      <div class="row mt-2 mb-2 px-5">
        <input
          type="text"
          class="form-control"
          placeholder="想交換物品"
          aria-label="WantItemName"
        />
      </div>
      <div class="row mt-2 mb-2 px-5">
        <textarea
          class="form-control"
          placeholder="想交換物品之狀況"
          aria-label="WantItemSituation"
        ></textarea>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col">
          <button type="button" class="btn btn-dark">上傳貼文</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    Closeupload: Function,
  },
};
</script>
<style scoped>
@keyframes fadein {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
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
.close {
  margin-bottom: 2rem;
}
.closebtn {
  font-size: 1.5rem;
  background-color: transparent;
  outline: none;
  border: none;
  margin-top: -1rem;
  float: right;
}
</style>