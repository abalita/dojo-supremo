<template>
  <!-- <a-layout style="background-color:black; background-size: cover; background-repeat: no-repeat; background-position: center center; background-attachment: fixed; background-image:url('https://img1.wsimg.com/isteam/ip/d38db8fe-1a79-4212-975e-8f9f83c189fa/logo_over_black.png/:/cr=t:0%25,l:0%25,w:50%25,h:50%25')"> -->
  <a-layout style="background-color:#161616;">
    <a-layout-header style="background-color:#222222">
      <a-row type="flex" justify="start">
        <a-col :span="12">
          <h2 style="color:white">Customer Information</h2>
        </a-col>
        <a-col :span="1" :push="11">
          <a-button ghost>Help</a-button>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content style="minHeight: 500px; margin-top: 70px">
      <a-row type="flex">
        <a-col :span="8" :push="2">
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
        <a-col :span="12" :push="4">
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