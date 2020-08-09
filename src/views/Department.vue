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
        <div class="add-new">
            <p><span class="glyphicon glyphicon-plus-sign" @click="toggleDeptForm"></span> Add Department</p>
            <form class="add-form" v-if="showDeptForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="department">New Department</label>
                  <input type="text" class="form-control" placeholder="Department" v-model="departmentData">
                </div>
              </div>

              <button type="submit" class="btn btn-primary dept-add-btn">Add</button>
            </form>
        </div>
        </div>
    </div>
</template>

<script>
import departments from '@/data/departments'

export default {
    data() {
        return {
            departments: departments,
            departmentData: '',
            showDeptForm: false
        }
    },

    methods: {
        toggleDeptForm () {
            this.showDeptForm = !this.showDeptForm
        }
    }
}
</script>

<style lang="css" scoped>
.department-content {

}

.dept-add-btn {
    margin-left: 47%;
}
</style>
