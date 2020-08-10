<template lang="html">
    <div class="department-content">
        <div class="row content">
            <h3 class="content-head">Department</h3>
            <table>
              <thead>
                <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Department</th>
                    <!-- <th scope="col">Total Employee</th> -->
                    <th scope="col"></th>
                </tr>
              </thead>
              <tbody v-for="department in departments"  :key="department.id">
                <tr>
                    <td scope="row" data-label="S/N">{{ department.id }}</td>
                    <td data-label="Department">{{ department.dept }}</td>
                    <!-- <td data-label="Total Employee"></td> -->
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
import departments from '@/data/departments'

export default {
    data() {
        return {
            departments: departments
        }
    },

    methods: {

    }
}
</script>

<style lang="css" scoped>
.department-content {

}
</style>
