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
                        <td data-label="Name">
                            <router-link :to="{ name: 'Employee', params: {name:employee.firstname,id:employee.id} }">
                                {{ employee.firstname }} {{ employee.lastname }}
                            </router-link>
                        </td>
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
            departments: departments
        }
    },

    methods: {

    }
}
</script>

<style lang="css" scoped>
.employee-content {

}
</style>
