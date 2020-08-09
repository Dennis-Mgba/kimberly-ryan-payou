<template lang="html">
    <div class="employee-content">
        <div class="row content">
            <h3 class="content-head">Employee</h3>
        <table>
          <thead>
            <tr>
                <th scope="col">S/N</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Department</th>
                <th scope="col">Designation</th>
                <th scope="col"></th>
            </tr>
          </thead>
          <tbody v-for="employee in employees"  :key="employee.id">
            <tr>
                <td scope="row" data-label="S/N">{{ employee.id }}</td>
                <td data-label="Name">{{ employee.firstname }} {{ employee.lastname }}</td>
                <td data-label="Email">{{ employee.email }}</td>
                <td data-label="Department">{{ employee.department }}</td>
                <td data-label="Designation">{{ employee.designation }}</td>
                <td class="table-btns">
                    <button type="button" class="btn btn-warning">Edit</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </td>
            </tr>
          </tbody>
        </table>
        <div class="add-new">
            <p><span class="glyphicon glyphicon-plus-sign" @click="toggleEmployeeForm"></span> Add Employee</p>
            <form class="add-form" v-if="showEmployeeForm">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="first name">First Name</label>
                  <input type="text" class="form-control" placeholder="First name" v-model="employeeData.firstname">
                </div>
                <div class="form-group col-md-6">
                  <label for="last name">Last Name</label>
                  <input type="password" class="form-control" placeholder="Last name" v-model="employeeData.lastname">
                </div>
              </div>

              <div class="form-group col-md-12">
                <label for="email">Email</label>
                <input type="email" class="form-control" placeholder="Email" v-model="employeeData.email">
              </div>
              <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="department">Department</label>
                    <select class="form-control" v-model="employeeData.department">
                      <option selected>Choose...</option>
                      <option v-for="department in departments"  :key="department.id">{{ department.dept }}</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="designation">Designation</label>
                    <input type="text" class="form-control" v-model="employeeData.designation">
                  </div>
              </div>

              <button type="submit" class="btn btn-primary">Add</button>
            </form>
        </div>
        </div>
    </div>
</template>

<script>
import employees from '@/data/employees'
import departments from '@/data/departments'

export default {
    data() {
        return {
            employees: employees,
            departments: departments,
            employeeData: {
                firstname: '',
                lastname: '',
                email: '',
                department: '',
                designation: ''
            },
            showEmployeeForm: false
        }
    },

    methods: {
        toggleEmployeeForm () {
            this.showEmployeeForm = !this.showEmployeeForm
        }
    }
}
</script>

<style lang="css" scoped>
.employee-content {

}
</style>
