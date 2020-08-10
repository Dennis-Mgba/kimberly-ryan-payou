<template lang="html">
    <div class="add-new">
        <div class="row content">
            <h3 class="content-head">Add New Employee</h3>

            <form class="add-form">
                <h5 class="form-sub-head">Personal Details</h5>
                <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="First Name">First Name</label>
                      <input type="text" class="form-control" placeholder="First Name" v-model="employeeData.firstname">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="Last Name">Last Name</label>
                      <input type="text" class="form-control" placeholder="Last Name" v-model="employeeData.lastname">
                    </div>
                </div>

                <div class="form-group col-md-12">
                    <label for="email">Email</label>
                    <input type="Email" class="form-control" placeholder="Email" v-model="employeeData.email">
                </div>

                <h5 class="form-sub-head">Company Details</h5>
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
                    <input type="text" class="form-control" placeholder="Designation" v-model="employeeData.designation">
                  </div>
                </div>

                <h5 class="form-sub-head">Finacial Details</h5>
                <div class="form-row">
                  <div class="form-group col-md-6">
                      <label for="Bank Name">Bank Name</label>
                      <input type="text" class="form-control" placeholder="Bank Name" v-model="employeeData.bankname">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="Account Name">Account Number</label>
                    <input type="text" class="form-control" placeholder="Account Number" v-model="employeeData.accountnumber">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-12">
                      <label for="Acoount Number">Account Name</label>
                      <input type="text" class="form-control" placeholder="Account Name" v-model="employeeData.accountname">
                  </div>
                </div>

              <button type="submit" class="btn btn-primary" @click="addEmployee">Add Employee</button>
            </form>
        </div>
    </div>
</template>

<script>
import departments from '@/data/departments'

export default {
    data() {
        return {
            departments: departments,
            employeeData: {
                firstname: '',
                lastname: '',
                email: '',
                department: '',
                designation: '',
                accountname: '',
                accountnumber: '',
                bankname: '',
            }
        }
    },

    methods: {
        addEmployee () {
            console.log(this.employeeData);
        }
    }
}
</script>

<style lang="css" scoped>
.form-sub-head {
    color: #F97B00;
}

.add-form button {
    margin-left: 43.5%;
}
</style>
