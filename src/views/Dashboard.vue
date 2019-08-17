<template>
  <a-layout style="background-color:#161616;">
    <a-affix :offsetTop="0">
    <a-layout-header style="background-color:#222222">
      <a-row type="flex" justify="start">
        <a-col :span="12">
          <img width="90px" src="https://img1.wsimg.com/isteam/ip/d38db8fe-1a79-4212-975e-8f9f83c189fa/logo_over_black.png" alt="">
          <!-- <h2 style="color:white">Customer Information</h2> -->
        </a-col>
      </a-row>
    </a-layout-header>
    </a-affix>
    <a-layout-content style="minHeight: 800px; margin-right:20px">
      <a-row type="flex" :gutter="16" style="margin-top: 30px">
        <a-col :span="4">
          <a-affix :offsetTop="100">
            <!-- <a-card style="left:10px; top:10px"> -->
                 <a-menu @click="nav" :defaultSelectedKeys="['/app']" >
                    <a-menu-item key="/app">
                        <a-icon type="home" /><span>Home</span>
                    </a-menu-item> 
                     <a-menu-item key="/app/members/enroll">
                        <a-icon type="solution" /><span>Enrollment</span>
                    </a-menu-item>
                    <a-menu-item key="/app/members">
                        <a-icon type="solution" /><span>Member Records</span>
                    </a-menu-item>                
                    <a-menu-item key="/app/schedules">
                      <a-icon type="calendar" /><span>Class Schedules</span>
                    </a-menu-item>
                     <a-menu-item key="/app/payments">
                        <a-icon type="idcard"  /><span>Payments</span>
                    </a-menu-item>
                     <a-menu-item key="/app/responses">
                        <a-icon type="file-done" /><span>Rates</span>
                    </a-menu-item>
                    <a-divider></a-divider>
                    <a-menu-item key="/app/account">
                        <a-icon type="idcard"  /><span>Account Settings</span>
                    </a-menu-item>
                    
                    <a-menu-item key="/">
                        <a-popconfirm title="Are you sure you want to logout?" @confirm="$router.push('/')" okText="Yes" >
                          <a-icon type="logout" /><span>Logout</span>
                        </a-popconfirm>
                    </a-menu-item>
                </a-menu>
          </a-affix>
            <!-- </a-card> -->         
        </a-col>
        <a-col :span="20">
          <transition name="fade" mode="out-in">
            <router-view/>
          </transition>
        </a-col>
      </a-row>
    </a-layout-content>
    <!-- <a-layout-footer>DOJO Supremo</a-layout-footer> -->
  </a-layout>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    nav(e){
      this.$router.push(e.key)
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