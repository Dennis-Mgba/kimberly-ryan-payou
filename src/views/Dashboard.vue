<template>
  <div class="dashboard-content">
      <div class="row content">
          <h3 class="content-head">Dashboard</h3>
          <div class="col-md-4">
              <div class="panel panel-default">
                <div class="panel-body">
                    <h4> {{ employees.length }}
                        <span class="icon-svg pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="50" viewBox="0 0 24 24" fill="none" stroke="#F97B00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </span>
                    </h4>
                    <p>Total Employees</p>
                </div>
              </div>
          </div>
          <div class="col-md-4">
              <div class="panel panel-default">
                <div class="panel-body">
                    <h4> {{ departments.length }}
                        <span class="icon-svg pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#F97B00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line>
                                <line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                        </span>
                    </h4>
                    <p>Total Department</p>
                </div>
              </div>
          </div>
          <div class="col-md-4">
              <div class="panel panel-default">
                <div class="panel-body">
                    <h4>0
                        <span class="icon-svg pull-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#F97B00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                        </span>
                    </h4>
                    <p>Total ...</p>
                </div>
              </div>
          </div>

          <img src="../assets/img/KR.jpg" alt="Kimberly Rayn logo" class="dash-company-logo">
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import employees from '@/data/employees'
import departments from '@/data/departments'

export default {
  name: 'Dashboard',
  components: {
    // HelloWorld
},
data() {
    return {
        employees: employees,
        departments: departments,
    }
},
// mounted () {
//     console.log(this.employees)
// }
}
</script>

<style media="screen">
.dashboard-content {
    /* margin-left: 10px; */
}

.dash-company-logo {
    margin-top: 5%;
    margin-left: 11.5%;
}

</style>
