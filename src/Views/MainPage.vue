<template>
    <div class="bg">
        <div class="form">
            <div class="row">
                <div class="col-2">
                    <img src="../image/shark.jpg" height="100px" width="150px">
                    <h4>IKEA鯊魚</h4>
                    <h5>刊登者: </h5>
                </div>
                <div class="col-2">
                    <img src="../image/shark1.jpg" height="100px" width="150px">
                    <h4>鯊魚貼圖</h4>
                    <h5>刊登者: </h5>
                </div>
                <div class="col-2">
                    <img src="../image/shark2.png" height="100px" width="150px">
                    <h4>鯊魚貼圖</h4>
                    <h5>刊登者: </h5>
                </div>
                <div class="col-2">
                    <img src="../image/shark3.jpg" height="100px" width="150px">
                    <h4>鯊魚貼圖</h4>
                    <h5>刊登者: </h5>
                </div>
                <div class="col-2">
                    <img src="../image/shark4.png" height="100px" width="150px">
                    <h4>鯊魚貼圖</h4>
                    <h5>刊登者: </h5>
                </div>
                <div class="col-2">
                    <img src="../image/shark5.png" height="100px" width="150px">
                    <h4>鯊魚貼圖</h4>
                    <h5>刊登者: </h5>
                </div>
            </div>
        </div>
    </div>


</template>


<style scoped>

.bg{
  position: relative;
  background-image: linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)),url('../image/bg-4.jpg');
  background-size: cover;
  height: 100vh;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form{
  position: relative;
  padding: 2rem 2rem;
  border-radius: 10px;
  height: 90%;
  width: 90%;
  /* width:30vw;
  height: 80vh; */
  background-color: rgba(255,255,255,.45);
  border: 2px solid rgba(17, 223, 238, 0.4);
  border-image-slice: 1;
  display: flex;
  flex-direction: column;
  animation: fadein 1s;
}

</style>