<template>
  <!-- <a-layout style="background-color:black; background-size: cover; background-repeat: no-repeat; background-position: center center; background-attachment: fixed; background-image:url('https://img1.wsimg.com/isteam/ip/d38db8fe-1a79-4212-975e-8f9f83c189fa/logo_over_black.png/:/cr=t:0%25,l:0%25,w:50%25,h:50%25')"> -->
  <a-layout style="background-color:#161616;">
    <a-affix :offsetTop="0">
    <a-layout-header style="background-color:#222222">
      <a-row type="flex" justify="start">
        <a-col :span="12">
          <img width="100vh" src="https://img1.wsimg.com/isteam/ip/d38db8fe-1a79-4212-975e-8f9f83c189fa/logo_over_black.png" alt="">
          <!-- <h2 style="color:white">Customer Information</h2> -->
        </a-col>
      </a-row>
    </a-layout-header>
    </a-affix>
    <a-layout-content class="content" style="margin-top: 10vh; margin-left: 1vh">
      <a-row type="flex" :gutter="{sm:8, md:24, lg:32}" justify="center" align="middle">
        <a-col :xs="20" :sm="20" :md="8">
          <a-card title="Enter the DOJO">
            <a-form>
                <a-form-item>
                  <a-input
                    v-decorator="['username',
                                {rules: [{ required: true, message: 'Please input your username' }]}]"
                    placeholder="Username or Email"
                    v-model="username"
                  >
                    <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <a-input
                    v-decorator="['password',{rules: [{ required: true, message: 'Please input your Password!' }]}]"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  >
                    <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                  </a-input>
                </a-form-item>
                <a-divider></a-divider>
                <a-row :gutter="16" type="flex" justify="center">
                  <a-col :span="24">
                    <a-button block type="primary" :loading="isLoading" @click="login">Enter</a-button>                   
                  </a-col>
                </a-row>                
              </a-form>
          </a-card>
        </a-col>
        <a-col :xs="0" :sm="0" :md="12" :lg="12" style="margin-left:60px">
          <img width="400px" src="https://img1.wsimg.com/isteam/ip/d38db8fe-1a79-4212-975e-8f9f83c189fa/logo_over_black.png" alt="">
        </a-col>
      </a-row>
    </a-layout-content>
    <a-layout-footer class="footer">DOJO Supremo 2019</a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  data(){
    return {
      username:"",
      password:"",
      isLoading:false
    }
  },
  methods:{
    init(){

    },
    login(){
      this.isLoading=true;
      this.$router.push('/app')
    }
  }
  
}
</script>

<style>
.content {
height:100vh;
min-height:100vh;

}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  /* margin-top:300px; */
  /* background-color: red; */
  /* color: white; */
  z-index: 10;
  text-align: center;
}
</style>