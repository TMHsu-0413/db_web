<template>
  <nav
    class="navbar navbar-expand navbar-dark bg-dark"
    aria-label="Second navbar example"
  >
    <div v-if="upload" class="bg100">
      <Upload :Closeupload="Closeupload" :Verify="0"></Upload>
    </div>

    <div class="container-fluid">
      <router-link to="/user" class="navbar-brand">易物媒合系統</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample02"
        aria-controls="navbarsExample02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample02">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/user" class="nav-link" aria-current="page"
              >首頁</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link cursor" @click="uploadPage">上傳貼文</a>
          </li>
          <li class="nav-item">
            <router-link to="/MyPost" class="nav-link">我的貼文</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/PostRequest" class="nav-link"
              >查看交易請求</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/TransRecords" class="nav-link"
              >查看交易紀錄</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/ReviseInfo_u" class="nav-link"
              >修改個人資料</router-link
            >
          </li>
        </ul>
        <div class="nav-item">
          <button class="nav-link btn" @click="Logout">登出</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Upload from "./UploadPost.vue";
import Vue from "vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      upload: false,
    };
  },
  methods: {
    uploadPage() {
      this.upload = true;
    },
    Closeupload() {
      this.upload = false;
    },
    Logout() {
      Vue.cookies.set("admin", "");
      Vue.cookies.set("id", "");
      this.$router.push("/");
    },
  },
  components: {
    Upload,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  background-color: transparent;
  color: white;
}
.bg100 {
  background-color: rgba(0, 0, 0, 0.85);
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.cursor {
  cursor: pointer;
}
</style>
