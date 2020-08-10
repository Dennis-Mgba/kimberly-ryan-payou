<template>
  <div id="app">
    <TopBar />
    <div class="layout">
        <div class="nav">
            <SideNav />
        </div>
        <div class="app-content">
            <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
import SideNav from '@/components/SideNav.vue'
import TopBar from '@/components/TopBar.vue'

export default {
    name: 'App',
    components: {
      TopBar,
      SideNav
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}

.layout {
    display: flex;
}

.nav {
    width: 18%;
    padding-top: 20px;
    background: #1bb12c;
}

.app-content {
    width: 78%;
    margin-left: 10px;
    /* overflow: scroll; */
}

</style>
