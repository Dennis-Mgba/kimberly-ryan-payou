<template lang="html">
  <div class="sidebar">
      <router-link to="/"><span class="glyphicon glyphicon-dashboard"></span> Dashboard</router-link>
      <router-link to="/employee"><span class="glyphicon glyphicon-user"></span> Employee</router-link>
      <router-link to="/department"><span class="glyphicon glyphicon-briefcase"></span> Department</router-link>
      <router-link to="/payroll"><span class="glyphicon glyphicon-credit-card"></span> Payroll</router-link>
  </div>
</template>

<script>
export default {
    name: 'SideNav'
}
</script>

<style lang="css" scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    height: 560px;
}

.sidebar a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  padding-top: 10px;
  height: 45px;
  padding-left: 10%;
}

.sidebar a.router-link-exact-active {
  /* color: #42b983; */
  color: #F97B00;
  background-color: #1ec832;
  border-right: 3.5px solid #F97B00;
}

.glyphicon {
    width: 20px;
}
</style>
