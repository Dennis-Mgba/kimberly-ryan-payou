<template lang="html">
  <div class="employee-profile">
    <div class="row content">
        <!-- <h3 style="text-align: center;">Welcome {{$route.params.name}}</h3> -->
        <!-- <p>Employee {{ $route.params.id }}</p> -->
        <h3 class="content-head">{{$route.params.name}} Personal Profile</h3>
        <table id="profile-table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>{{ employee.firstname }} {{ employee.lastname }}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{{ employee.email }}</td>
            </tr>
            <tr>
              <td>Department</td>
              <td>{{ employee.department }}</td>
            </tr>
            <tr>
              <td>Designation</td>
              <td>{{ employee.designation }}</td>
            </tr>
            <tr>
              <td>Account Name</td>
              <td>{{ employee.accountname }}</td>
            </tr>
            <tr>
              <td>Account Number</td>
              <td>{{ employee.accountnumber }}</td>
            </tr>
            <tr>
              <td>Bank</td>
              <td>{{ employee.bankname }}</td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import employees from '@/data/employees'

export default {
    data() {
        return {
            employee: ''
        }
    },
    created() {
        let employee = employees;
        // console.log(employee);
        for (var i = 0; i < employee.length; i++) {
            let single = employee[i];
            // console.log(single);
            if (single.id == this.$route.params.id) {
                // console.log(single);
                this.employee = single
            }
        }
    }
}
</script>

<style lang="css" scoped>
#profile-table td:first-child, #profile-table th:first-child {
    width: 25%;
}

#profile-table td:first-child {
    font-weight: 600;
}
</style>
