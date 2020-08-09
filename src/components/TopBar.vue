<template lang="html">
  <div class="">
      <nav>
          <router-link :to="{ name: 'Dashboard', params: {} }"><img alt="Kimberly Rayn logo" src="../assets/img/KR.jpg" class="logo"> </router-link>
      </nav>
  </div>
</template>

<script>
export default {
    name: 'TopBar'
}
</script>

<style lang="css" scoped>
nav {
    height: 50px;
    padding: 10px 30px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);
}

.logo {
    width: 100px;
    height: 30px;
}
</style>
