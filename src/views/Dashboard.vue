<template>
  <a-layout style="background-color:#161616;">
    <a-affix :offsetTop="0">
    <a-layout-header style="background-color:#222222">
      <a-row type="flex" justify="start">
        
        <a-col :span="12">
          <img width="90px" src="https://img1.wsimg.com/isteam/ip/d38db8fe-1a79-4212-975e-8f9f83c189fa/logo_over_black.png" alt="">
          <!-- <h2 style="color:white">Customer Information</h2> -->
        </a-col>
        <a-col :push="12" :xs="2" :sm="2" :md="1" :lg="0">
          <a-icon type="menu" style="color:white; cursor:pointer" @click="showMenu=true"></a-icon>
        </a-col>
      </a-row>
    </a-layout-header>
    </a-affix>
    <a-layout-content class="content"  style="margin-left:10px; margin-right:10px">
      <a-row type="flex" :gutter="16" style="margin-top: 30px">
        <a-col :xs="0" :sm="0" md="0" :lg="4">
          <a-affix :offsetTop="100">
            <sidebar></sidebar> 
          </a-affix>       
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="20">
          <transition name="fade" mode="out-in">
            <router-view/>
          </transition>
        </a-col>
      </a-row>
    </a-layout-content>
    <a-layout-footer class="footer">DOJO Supremo</a-layout-footer>
    <a-drawer :visible="showMenu"
      @close="showMenu=false"
      :closable="true">
        <sidebar style="margin-top:5vh"></sidebar>
      </a-drawer>
  </a-layout>
</template>

<script>
import Sidebar from '@/components/SidebarMenu'
export default {
  components:{
      Sidebar
  },
  data(){
    return{
      showMenu:false
    }
  }
}
</script>

<style>
.content {
height:150vh;
min-height:150vh;

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