<template>
  <div class="container-fluid bg flex">
    <table class="table width60 table-hover">
      <thead class="white fs2">
        <tr>
          <th class="text-middle">資料表內容</th>
          <th class="text-middle">下載</th>
        </tr>
      </thead>
      <tbody class="white1 fs1">
        <tr>
          <th class="text-middle">用戶資料</th>
          <th class="text-middle">
            <form action="http://localhost/php/excel_user.php" method="post">
              <button type="submit" class="btn"><b-icon ty icon="file-earmark-medical-fill" class="cursor white"></b-icon></button>
            </form>
          </th>
        </tr>
        <tr>
          <th class="text-middle">貼文資料</th>
          <th class="text-middle">
            <form action="http://localhost/php/excel_post.php" method="post">
              <button type="submit" class="btn"><b-icon ty icon="file-earmark-medical-fill" class="cursor white"></b-icon></button>
            </form>
          </th>
        </tr>
        <tr>
          <th class="text-middle">交易紀錄資料</th>
          <th class="text-middle">
            <form action="http://localhost/php/excel_change.php" method="post">
              <button type="submit" class="btn"><b-icon ty icon="file-earmark-medical-fill" class="cursor white"></b-icon></button>
            </form>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.bg {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("../image/bg-6.jpg");
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding:0 1rem;
}
.btn{
  background-color: transparent;
  outline: none;
  border: 0;
}
.flex{
  display: flex;
  justify-content: center;
}
.white {
  color: white;
}
.white1{
  color:rgba(193, 196, 197, 0.931)
}
.bg-black {
  position: fixed;
  left:0;
  top:0;
  background-color: rgba(0,0,0,.65);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text-middle{
  text-align: center;
}
.padding1{
  padding:1rem .3rem;
}
.fs2{
  font-size:2rem;
}
.fs1{
  font-size:1rem;
}
.width60{
  width:60%;
}
.cursor{
  cursor:pointer;
}
</style>