import axios from 'axios'
// http://DOMAIN.XX/
// http://localhost:5000/
const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/php'
})

/*http.interceptors.request.use(function (config) {
  // console.log(process.env.VUE_APP_API_URL)
  // Do something before request is sent
  if (Vue.cookies.get('id') && Vue.cookies.get('admin')) {
    // console.log(document.cookie);
    //config.headers.Authorization = `Bearer ${Vue.cookies.get('token')}`
    config.headers.id = Vue.cookies.get('id')
    config.headers.admin = Vue.cookies.get('admin')
  }
  return config
},
function (error) {
  // Do something with request error
  return Promise.reject(error)
}
)*/

http.interceptors.response.use(res => {
  return res
}, err => {
  //console.log(err)
  if (err.response.data.message) {
    console.log(err.response.data.message)
    this.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
  }
  return Promise.reject(err)
})

export default http
