<template lang="html">
  <div class="sidebar">
      <accordion>
        <accordion-item> <!-- 1 -->
          <!-- This slot will handle the title/header of the accordion and is the part you click on -->
          <template slot="accordion-trigger">
            <router-link to="/"><span class="glyphicon glyphicon-dashboard"></span> Dashboard</router-link>
          </template>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <!-- <template slot="accordion-content">
            <router-link to=""><p class="inner-link">Lorem ipsum dolor sit amet.</p></router-link>
            <p>Lorem ipsum dolor sit amet.</p>
          </template> -->
        </accordion-item>

        <accordion-item> <!-- 2 -->
          <template slot="accordion-trigger">
            <router-link to="/employees"><span class="glyphicon glyphicon-user"></span> Employees</router-link>
          </template>
          <template slot="accordion-content">
              <router-link to="/employees"><p class="inner-link"> <span class="glyphicon glyphicon-ok-circle"></span>Manage Employees</p></router-link>
              <router-link to="/employee/new"><p class="inner-link"> <span class="glyphicon glyphicon-plus"></span>Add Employees</p></router-link>
          </template>
        </accordion-item>

        <accordion-item> <!-- 3 -->
          <template slot="accordion-trigger">
              <router-link to="/department"><span class="glyphicon glyphicon-briefcase"></span> Department</router-link>
          </template>
          <template slot="accordion-content">
              <router-link to="/department"><p class="inner-link"> <span class="glyphicon glyphicon-ok-circle"></span>Manage Department</p></router-link>
              <router-link to="/department/create"><p class="inner-link"> <span class="glyphicon glyphicon-plus"></span>Create Department</p></router-link>
          </template>
        </accordion-item>

        <accordion-item> <!-- 4 -->
          <template slot="accordion-trigger">
            <router-link to="/payroll"><span class="glyphicon glyphicon-credit-card"></span> Payroll</router-link>
          </template>
          <template slot="accordion-content">
              <router-link to="/payroll"><p class="inner-link"> <span class="glyphicon glyphicon-ok-circle"></span>Payroll</p></router-link>
              <router-link to="/payslip/create"><p class="inner-link"> <span class="glyphicon glyphicon-plus"></span>Create Payslip</p></router-link>
          </template>
        </accordion-item>
      </accordion>
  </div>
</template>

<script>
import Accordion from "@/components/accordion"
import AccordionItem from "@/components/accordion-item"

export default {
    name: 'SideNav',
    components: {
       Accordion,
       AccordionItem
   }
}
</script>

<style lang="css" scoped>
.sidebar {
    /* display: flex; */
    /* flex-direction: column; */
    height: 560px;
}

.inner-link {
    color: #000;
    font-size: 13px;
    text-decoration: none;
}

.glyphicon {
    width: 20px;
}
</style>
