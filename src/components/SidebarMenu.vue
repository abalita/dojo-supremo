<template>
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
</template>

<script>
export default {
  methods:{
    nav(e){
      this.$router.push(e.key)
    }
  }
}
</script>

<style>

</style>