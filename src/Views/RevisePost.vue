<template>
  <div class="bg">
    <div class="form">
      <div class="container">
        <div class="row mt-2 mb-2 px-5">
          <input
            type="text"
            class="form-control"
            placeholder="ItemName"
            aria-label="ItemName"
          />
        </div>
        <div class="row mt-2 mb-2 px-5">
          <input
            type="text"
            class="form-control"
            placeholder="ItemQuanitiy"
            aria-label="ItemQuanitiy"
          />
        </div>
        <div class="row mt-2 mb-2 px-5">
          <input
            type="file"
            class="form-control"
            placeholder="ItemPicutre"
            aria-label="ItemPicutre"
          />
        </div>
        <div class="row mt-2 mb-2 px-5">
          <input
            type="text"
            class="form-control"
            placeholder="ItemAddress"
            aria-label="ItemAddress"
          />
        </div>
        <div class="row mt-2 mb-2 px-5">
          <input
            type="text"
            class="form-control"
            placeholder="ItemOrigin"
            aria-label="ItemOrigin"
          />
        </div>
        <div class="row mt-2 mb-2 px-5">
          <textarea
            class="form-control"
            placeholder="ItemSituation"
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
              <label class="form-check-label" for="inlineRadio2"
                >自行收回</label
              >
            </div>
          </div>
        </div>
        <div class="row mt-2 mb-2 px-5">
          <input
            type="text"
            class="form-control"
            placeholder="WantItemName"
            aria-label="WantItemName"
          />
        </div>
        <div class="row mt-2 mb-2 px-5">
          <textarea
            class="form-control"
            placeholder="WantItemSituation"
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
  </div>
</template>

<style scoped>
.bg {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url("../image/bg-5.jpg");
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>