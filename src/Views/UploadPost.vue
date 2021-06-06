<template>
        <div class="bg">
            <div class="form">
                <div class="content">
                    <div class="row mt-2 mb-2">
                        <input type="text" class="form-control" placeholder="ItemName" aria-label="ItemName">
                    </div>
                    <div class="row mt-2 mb-2">
                        <input type="text" class="form-control" placeholder="ItemQuanitiy" aria-label="ItemQuanitiy" >
                    </div>
                    <div class="row mt-2 mb-2">
                        <input type="file" class="form-control" placeholder="ItemPicutre" aria-label="ItemQuanitiy" >
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>

.bg{
  position: relative;
  background-image: linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)),url('../image/bg-5.jpg');
  background-size: cover;
  height: 100vh;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form{
  position: absolute;
  padding:2rem 1rem;
  border-radius: 10px;
  width:30vw;
  height: 58vh;
  background-color: rgba(255,255,255,.45);
  border: 2px solid rgba(17, 223, 238, 0.4);
  border-image-slice: 1;
  display: flex;
  flex-direction: column;
  animation: fadein 1s;
}
.content{
  padding:.5rem .5rem;
  width:80%;
  align-self: center;
  border: none;
  border-radius: 5px;
  transition: all .3s;
}

</style>