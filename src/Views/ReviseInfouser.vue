<template>
  <div class="bg">
    <div class="form">
      <div class="container">
        <div class="row mt-3 mb-3 px-5">
          <div class="type_block fbasis50">
            <input
              type="password"
              class="form-control"
              placeholder="重新設定密碼"
              aria-label="password"
            />
          </div>
        </div>
        <div class="row mt-3 mb-3 px-5">
          <div class="type_block fbasis50">
            <input
              type="password"
              class="form-control"
              placeholder="確認密碼"
              aria-label="confirmpassword"
            />
          </div>
        </div>
        <div class="row mt-3 mb-3 px-5">
          <div class="type_block fbasis50">
            <input
              type="text"
              class="form-control"
              placeholder="電話"
              aria-label="Phone"
            />
          </div>
        </div>
        <div class="row mt-3 mb-3 px-5">
          <div class="type_block fbasis50">
            <input
              type="text"
              class="form-control"
              placeholder="電子郵件"
              aria-label="mail"
            />
          </div>
        </div>
        <div class="row mt-3 mb-3 px-5">
          <div class="type_block fbasis50">
            <input
              type="text"
              class="form-control"
              placeholder="地址"
              aria-label="address"
            />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-7"></div>
          <div class="col">
            <button type="button" class="btn btn-dark">確認修改</button>
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