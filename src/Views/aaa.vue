<template>
  <div class="ccc">
    <div class="ddd">
      <div class="input-group mb-3 ">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">帳號</span>
        </div>
        <input type="text" class="form-control" placeholder="Account" aria-label="Account" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3 ">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">密碼</span>
        </div>
        <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2">
      </div>
      <div class="input-group mb-3 ">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">確認密碼</span>
        </div>
        <input type="password" class="form-control" placeholder="Confirm" aria-label="Confirm" aria-describedby="basic-addon3">
      </div>
      <div class="input-group mb-3 ">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">用戶姓名</span>
        </div>
        <input type="text" class="form-control" placeholder="UserName" aria-label="UserName" aria-describedby="basic-addon4">
      </div>
      <div class="input-group mb-3 ">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">聯絡地址</span>
        </div>
        <input type="text" class="form-control" placeholder="Address" aria-label="Address" aria-describedby="basic-addon5">
      </div>
      <div class="input-group mb-3 ">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">聯絡電話</span>
        </div>
        <input type="text" class="form-control" placeholder="Cellphone" aria-label="Cellphone" aria-describedby="basic-addon6">
      </div>
      <div class="input-group mb-3 ">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">E-mail</span>
        </div>
        <input type="text" class="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon7">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.account{
  margin: 10px 550px; /* 文字距离上下有100px外边距 距离左右有200外边距 */
}
.form-control{
  max-width: 500px;
}
.ccc{
  position: relative;
  height: 100%;
  width:100%;
}
.ddd{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width:25%;
}
.w_auto{
  width:auto;
}
</style>