<template>
  <div class="load_wapper">
    <el-form class="form_wapper" size="mini" :model="formModel">
      <el-form-item label="用户名:">
        <el-input v-model="formModel.user"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="formModel.password" type="password"></el-input>
      </el-form-item>
      <el-form-item align="center">
        <el-button @click="loadBtn" type="primary" plain> 登录</el-button>
      </el-form-item>
      <!-- <span>管理者：admin,密码：1</span>
      <br />
      <span>普通用户：user,密码：1</span> -->
    </el-form>
  </div>
</template>
<script>
export default {
  components: {

  },
  data() {
    return {
      formModel: {
        user: '10007',
        password: '000000'
      }
    }
  },
  methods: {
    loadBtn() {
      // 这里应该调用接口，将用户信息传给后端，后端查到用户的角色,类似于:
      let qqq = 'userid' +'='+this.formModel.user+'&'+"password" +'='+this.formModel.password;
      let Base64 = require('js-base64').Base64;  
      let ee = this.$md5(Base64.encode(qqq));
      console.log(ee, 'lppp');
      let postData = {
        userid: this.formModel.user,
        password: this.formModel.password,
        token: ee
      }

      this.$axios.post('/tsGateWay/systemManager/login',postData).then(res=>{
        // console.log(res.rtMessage, 'rr'); 
        if(res.data.rtCode || res.data.rtCode == '17005') {
          let getUserRole = this.formModel.user === '10007' ? '10007' : 'user'
          localStorage.setItem('userRole', getUserRole)
          this.$router.push({
            path: '/main'
          }) 
        } else {
          alert(res.data.rtMessage)
        }     
        console.log(res, 'kkkk');        
      })      

      // let getUserRole = this.formModel.user === 'admin' ? 'admin' : 'user'
      // localStorage.setItem('userRole', getUserRole)
      // // window.location.href="/main"  
      // this.$router.push({
      //     path: '/main'
      //   }) 
    }
  },
  mounted() {

  }
}

</script>
<style scoped>
.load_wapper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(48, 65, 86);
}

.form_wapper {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20%;
  transform: translate(-50%, -50%);
  background-color: #1f2d3d !important;
  padding: 10px 30px;
  border-radius: 10px;
  border: 1px solid #fff;
  color: #fff;
  font-size: 14px;
}

</style>
