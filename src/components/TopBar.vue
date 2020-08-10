<template lang="html">
  <div class="">
      <nav style="display: flex;">
          <router-link :to="{ name: 'Dashboard', params: {} }"><img alt="Kimberly Rayn logo" src="../assets/img/KR.jpg" class="logo"> </router-link>

          <div style="display: flex;" class="nav-nug">
              <span style="margin-right: 7px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97B00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
              </span>
              <div class="dropdown">
                <span class="dropdown-toggle" data-toggle="dropdown">
                    Administrator <span class="caret"></span>
                </span>
                <ul class="dropdown-menu">
                  <li><a href="#">Log Out <span class="glyphicon glyphicon-log-out"></span></a></li>
                  <!-- <li><a href="#">item</a></li> -->
                </ul>
              </div>
          </div>
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

.nav-nug {
    position: absolute;
    right: 5%;
}

</style>
